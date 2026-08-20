import React from 'react'
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom'
import AppShell from './layout/AppShell'
// Static page imports (not React.lazy): SN jsdbx chunks cannot share minified named
// exports from main.jsdbx, which broke lazy route chunks (missing export 'l'/'w').
import PortfolioPage from './pages/work/PortfolioPage'
import ProjectsPage from './pages/work/ProjectsPage'
import ProjectPage from './pages/work/ProjectPage'
import MyTasksPage from './pages/work/MyTasksPage'
import CapacityPlanPage from './pages/strategy/CapacityPlanPage'
import RuleBuilderPage from './pages/admin/RuleBuilderPage'
import FieldLibraryPage from './pages/admin/FieldLibraryPage'

export default function AppRoutes() {
    return (
        <HashRouter>
            <Routes>
                <Route element={<AppShell />}>
                    <Route index element={<Navigate to="/my-tasks" replace />} />
                    <Route path="my-tasks" element={<MyTasksPage />} />
                    <Route path="portfolios/:portfolioId" element={<PortfolioPage />} />
                    <Route path="projects" element={<ProjectsPage />} />
                    <Route path="projects/:projectId" element={<ProjectPage />} />
                    <Route path="capacity" element={<CapacityPlanPage />} />
                    <Route path="admin/rules" element={<RuleBuilderPage />} />
                    <Route path="admin/fields" element={<FieldLibraryPage />} />
                </Route>
            </Routes>
        </HashRouter>
    )
}
