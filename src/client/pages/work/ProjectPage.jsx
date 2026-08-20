import React, { useState, useMemo } from 'react'
import { useParams } from 'react-router-dom'
import TopBar from '../../layout/TopBar'
import BreadcrumbBar from '../../layout/BreadcrumbBar'
import EntityTabBar from '../../components/shared/EntityTabBar'
import ViewToolbar from '../../components/shared/ViewToolbar'
import DynamicDataGrid from '../../components/grid/DynamicDataGrid'
import KanbanBoard from '../../components/board/KanbanBoard'
import VirtualizedGantt from '../../components/gantt/VirtualizedGantt'
import TaskDetailPanel from '../../components/project/TaskDetailPanel'
import TaskForm from '../../components/project/TaskForm'
import ProjectSettings from '../../components/project/ProjectSettings'
import { useProject, useProjectBoard, useProjectTasks, useReorderBoard } from '../../services/hooks'

const PROJECT_TABS = [
    { id: 'list', label: 'List', icon: '☰' },
    { id: 'board', label: 'Board', icon: '▦' },
    { id: 'timeline', label: 'Timeline', icon: '📅' },
    { id: 'settings', label: 'Settings', icon: '⚙' },
]

export default function ProjectPage() {
    const { projectId } = useParams()
    const [activeTab, setActiveTab] = useState('list')
    const [selectedTask, setSelectedTask] = useState(null)
    const [showCreateTask, setShowCreateTask] = useState(false)

    const { data: project } = useProject(projectId)
    const { data: board, isLoading: boardLoading } = useProjectBoard(projectId)
    const { data: tasks, isLoading: tasksLoading } = useProjectTasks(projectId)
    const reorderMutation = useReorderBoard(projectId)

    const tasksByColumn = useMemo(() => {
        if (!board?.columns) return {}
        const map = {}
        for (const col of board.columns) {
            map[col.sys_id || col.id] = col.tasks || []
        }
        return map
    }, [board])

    const handleReorder = (columnId, taskIds) => {
        reorderMutation.mutate({ columnId, taskIds })
    }

    const renderTabContent = () => {
        switch (activeTab) {
            case 'list':
                return (
                    <DynamicDataGrid
                        rows={tasks || []}
                        loading={tasksLoading}
                        onRowClick={setSelectedTask}
                    />
                )
            case 'board':
                return (
                    <KanbanBoard
                        columns={board?.columns || []}
                        tasksByColumn={tasksByColumn}
                        loading={boardLoading}
                        onTaskClick={setSelectedTask}
                        onReorder={handleReorder}
                    />
                )
            case 'timeline':
                return (
                    <VirtualizedGantt
                        mode="task"
                        items={tasks || []}
                        startDate={project?.start_date}
                        endDate={project?.due_date}
                        loading={tasksLoading}
                        onBarClick={setSelectedTask}
                    />
                )
            case 'settings':
                return <ProjectSettings project={project} />
            default:
                return null
        }
    }

    return (
        <>
            <TopBar
                title={project?.project_key ? `(${project.project_key}) ${project.name}` : project?.name || 'Project'}
            />
            <BreadcrumbBar
                crumbs={[
                    { label: 'Projects', to: '/projects' },
                    { label: project?.name || 'Loading…' },
                ]}
            />
            <EntityTabBar tabs={PROJECT_TABS} activeTab={activeTab} onTabChange={setActiveTab} />
            <ViewToolbar onAddWork={() => setShowCreateTask(true)} onFilter={() => {}} onSort={() => {}} onGroup={() => {}} />
            <div className="page-content">{renderTabContent()}</div>
            <TaskDetailPanel
                task={selectedTask}
                projectId={projectId}
                onClose={() => setSelectedTask(null)}
                onUpdate={setSelectedTask}
            />
            {showCreateTask && (
                <div className="field-create-modal">
                    <TaskForm
                        mode="create"
                        projectId={projectId}
                        onClose={() => setShowCreateTask(false)}
                        onSaved={(task) => {
                            setShowCreateTask(false)
                            setSelectedTask(task)
                        }}
                    />
                </div>
            )}
        </>
    )
}
