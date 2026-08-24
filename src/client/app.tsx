import React, { useState, useEffect, useCallback } from "react";
import { NowRecordListConnected } from "@servicenow/react-components/NowRecordListConnected";
import { RecordProvider } from "@servicenow/react-components/RecordContext";
import { FormActionBar } from "@servicenow/react-components/FormActionBar";
import { FormColumnLayout } from "@servicenow/react-components/FormColumnLayout";
import "./styles.css";

interface ViewState {
  view: string;
  recordId: string | null;
}

function getViewFromUrl(): ViewState {
  const params = new URLSearchParams(window.location.search);
  return {
    view: params.get("view") || "projects",
    recordId: params.get("id") || null,
  };
}

export default function App() {
  const [currentView, setCurrentView] = useState<ViewState>(getViewFromUrl);

  useEffect(() => {
    const onPopState = () => setCurrentView(getViewFromUrl());
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  const navigateToView = useCallback(
    (viewName: string, recordId?: string | null, opts?: { title?: string }) => {
      const params = new URLSearchParams({ view: viewName });
      if (recordId) params.set("id", recordId);
      const relativePath = `${window.location.pathname}?${params}`;
      const pageTitle = opts?.title || `PPM - ${viewName}`;

      if (window.self !== window.top) {
        (window as any).CustomEvent.fireTop("magellanNavigator.permalink.set", {
          relativePath,
          title: pageTitle,
        });
      }

      window.history.pushState({ viewName, recordId }, "", relativePath);
      document.title = pageTitle;
      setCurrentView({ view: viewName, recordId: recordId || null });
    },
    []
  );

  const { view, recordId } = currentView;
  const isListView = ["projects", "tasks", "portfolios"].includes(view);

  return (
    <div className="ppm-app">
      <header className="ppm-header">
        <h1 className="ppm-title">PPM Workspace</h1>
        <nav className="ppm-nav">
          <button
            className={`ppm-nav-btn ${view === "projects" || view.startsWith("project") ? "active" : ""}`}
            onClick={() => navigateToView("projects", null, { title: "PPM - Projects" })}
          >
            Projects
          </button>
          <button
            className={`ppm-nav-btn ${view === "tasks" || view.startsWith("task") ? "active" : ""}`}
            onClick={() => navigateToView("tasks", null, { title: "PPM - Tasks" })}
          >
            Tasks
          </button>
          <button
            className={`ppm-nav-btn ${view === "portfolios" || view.startsWith("portfolio") ? "active" : ""}`}
            onClick={() => navigateToView("portfolios", null, { title: "PPM - Portfolios" })}
          >
            Portfolios
          </button>
        </nav>
      </header>

      <div className="ppm-content">
        {view === "projects" && (
          <NowRecordListConnected
            table="x_gzi_ppm_project"
            listTitle="Projects"
            columns="name,status,priority,owner_id,start_date,due_date,percent_complete"
            onRowClicked={(e: any) => {
              const sysId = e.detail.payload.sys_id;
              navigateToView("project-detail", sysId, { title: "Project Detail" });
            }}
            onNewActionClicked={() => {
              navigateToView("project-create", "-1", { title: "New Project" });
            }}
          />
        )}

        {view === "tasks" && (
          <NowRecordListConnected
            table="x_gzi_ppm_task"
            listTitle="Tasks"
            columns="name,status,priority,assignee_id,due_date,task_type"
            onRowClicked={(e: any) => {
              const sysId = e.detail.payload.sys_id;
              navigateToView("task-detail", sysId, { title: "Task Detail" });
            }}
            onNewActionClicked={() => {
              navigateToView("task-create", "-1", { title: "New Task" });
            }}
          />
        )}

        {view === "portfolios" && (
          <NowRecordListConnected
            table="x_gzi_ppm_portfolio"
            listTitle="Portfolios"
            columns="name,owner_id,due_date,description"
            onRowClicked={(e: any) => {
              const sysId = e.detail.payload.sys_id;
              navigateToView("portfolio-detail", sysId, { title: "Portfolio Detail" });
            }}
            onNewActionClicked={() => {
              navigateToView("portfolio-create", "-1", { title: "New Portfolio" });
            }}
          />
        )}

        {view === "project-detail" && recordId && (
          <RecordProvider table="x_gzi_ppm_project" sysId={recordId} isReadOnly={false}>
            <FormActionBar
              onSubmit={() => navigateToView("projects", null, { title: "PPM - Projects" })}
              onCancel={() => navigateToView("projects", null, { title: "PPM - Projects" })}
            />
            <FormColumnLayout />
          </RecordProvider>
        )}

        {view === "project-create" && (
          <RecordProvider table="x_gzi_ppm_project" sysId="-1" isReadOnly={false}>
            <FormActionBar
              onSubmit={() => navigateToView("projects", null, { title: "PPM - Projects" })}
              onCancel={() => navigateToView("projects", null, { title: "PPM - Projects" })}
            />
            <FormColumnLayout />
          </RecordProvider>
        )}

        {view === "task-detail" && recordId && (
          <RecordProvider table="x_gzi_ppm_task" sysId={recordId} isReadOnly={false}>
            <FormActionBar
              onSubmit={() => navigateToView("tasks", null, { title: "PPM - Tasks" })}
              onCancel={() => navigateToView("tasks", null, { title: "PPM - Tasks" })}
            />
            <FormColumnLayout />
          </RecordProvider>
        )}

        {view === "task-create" && (
          <RecordProvider table="x_gzi_ppm_task" sysId="-1" isReadOnly={false}>
            <FormActionBar
              onSubmit={() => navigateToView("tasks", null, { title: "PPM - Tasks" })}
              onCancel={() => navigateToView("tasks", null, { title: "PPM - Tasks" })}
            />
            <FormColumnLayout />
          </RecordProvider>
        )}

        {view === "portfolio-detail" && recordId && (
          <RecordProvider table="x_gzi_ppm_portfolio" sysId={recordId} isReadOnly={false}>
            <FormActionBar
              onSubmit={() => navigateToView("portfolios", null, { title: "PPM - Portfolios" })}
              onCancel={() => navigateToView("portfolios", null, { title: "PPM - Portfolios" })}
            />
            <FormColumnLayout />
          </RecordProvider>
        )}

        {view === "portfolio-create" && (
          <RecordProvider table="x_gzi_ppm_portfolio" sysId="-1" isReadOnly={false}>
            <FormActionBar
              onSubmit={() => navigateToView("portfolios", null, { title: "PPM - Portfolios" })}
              onCancel={() => navigateToView("portfolios", null, { title: "PPM - Portfolios" })}
            />
            <FormColumnLayout />
          </RecordProvider>
        )}
      </div>
    </div>
  );
}
