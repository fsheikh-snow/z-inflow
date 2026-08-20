import React, { lazy } from 'react'
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom'
import AppShell from './layout/AppShell'

const PortfolioPage = lazy(() => import('./pages/work/PortfolioPage'))
const ProjectsPage = lazy(() => import('./pages/work/ProjectsPage'))
const ProjectPage = lazy(() => import('./pages/work/ProjectPage'))
const MyTasksPage = lazy(() => import('./pages/work/MyTasksPage'))
const CapacityPlanPage = lazy(() => import('./pages/strategy/CapacityPlanPage'))
const RuleBuilderPage = lazy(() => import('./pages/admin/RuleBuilderPage'))
const FieldLibraryPage = lazy(() => import('./pages/admin/FieldLibraryPage'))

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
