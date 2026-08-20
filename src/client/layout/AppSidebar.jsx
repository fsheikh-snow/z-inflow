import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { usePortfolios, useProjects } from '../services/hooks'
import PortfolioForm from '../components/portfolio/PortfolioForm'
import ProjectForm from '../components/project/ProjectForm'
import './layout.css'

const NAV_ITEMS = [
    { to: '/my-tasks', label: 'My tasks', icon: '☑' },
    { to: '/capacity', label: 'Capacity', icon: '📊' },
    { to: '/admin/fields', label: 'Field library', icon: '🏷' },
    { to: '/admin/rules', label: 'Automations', icon: '⚡' },
]

function asList(data) {
    return Array.isArray(data) ? data : []
}

export default function AppSidebar() {
    const portfoliosQuery = usePortfolios()
    const projectsQuery = useProjects()
    const portfolios = asList(portfoliosQuery.data)
    const projects = asList(projectsQuery.data)
    const navigate = useNavigate()
    const [showCreatePortfolio, setShowCreatePortfolio] = useState(false)
    const [showCreateProject, setShowCreateProject] = useState(false)
    const defaultWorkspaceId = portfolios[0]?.workspace_id || projects[0]?.workspace_id

    return (
        <aside className="app-sidebar">
            <div className="sidebar-brand">
                <span className="sidebar-logo">Z</span>
                <span className="sidebar-title">Inflow</span>
            </div>

            <nav className="sidebar-nav">
                <div className="sidebar-section-label">Work</div>
                {NAV_ITEMS.slice(0, 1).map((item) => (
                    <NavLink key={item.to} to={item.to} className={({ isActive }) => `sidebar-link${isActive ? ' active' : ''}`}>
                        <span className="sidebar-icon">{item.icon}</span>
                        {item.label}
                    </NavLink>
                ))}

                <div className="sidebar-section-label">Projects</div>
                <NavLink to="/projects" end className={({ isActive }) => `sidebar-link${isActive ? ' active' : ''}`}>
                    <span className="sidebar-icon">📁</span>
                    All projects
                </NavLink>
                <button type="button" className="sidebar-link sidebar-link-action" onClick={() => setShowCreateProject(true)}>
                    <span className="sidebar-icon">+</span>
                    New project
                </button>
                {projects.length === 0 ? (
                    <div className="sidebar-empty">{projectsQuery.isLoading ? 'Loading…' : 'No projects'}</div>
                ) : (
                    projects.slice(0, 12).map((p) => (
                        <NavLink
                            key={p.sys_id}
                            to={`/projects/${p.sys_id}`}
                            className={({ isActive }) => `sidebar-link${isActive ? ' active' : ''}`}
                        >
                            <span className="sidebar-icon">•</span>
                            {typeof p.name === 'string' ? p.name : String(p.name || 'Untitled')}
                        </NavLink>
                    ))
                )}

                <div className="sidebar-section-label">Portfolios</div>
                <button type="button" className="sidebar-link sidebar-link-action" onClick={() => setShowCreatePortfolio(true)}>
                    <span className="sidebar-icon">+</span>
                    New portfolio
                </button>
                {portfolios.length === 0 ? (
                    <div className="sidebar-empty">{portfoliosQuery.isLoading ? 'Loading…' : 'No portfolios'}</div>
                ) : (
                    portfolios.map((p) => (
                        <NavLink
                            key={p.sys_id}
                            to={`/portfolios/${p.sys_id}`}
                            className={({ isActive }) => `sidebar-link${isActive ? ' active' : ''}`}
                        >
                            <span className="sidebar-dot" style={{ background: typeof p.color === 'string' && p.color ? p.color : '#6366f1' }} />
                            {typeof p.name === 'string' ? p.name : String(p.name || 'Untitled')}
                        </NavLink>
                    ))
                )}

                <div className="sidebar-section-label">Strategy</div>
                {NAV_ITEMS.slice(1, 2).map((item) => (
                    <NavLink key={item.to} to={item.to} className={({ isActive }) => `sidebar-link${isActive ? ' active' : ''}`}>
                        <span className="sidebar-icon">{item.icon}</span>
                        {item.label}
                    </NavLink>
                ))}

                <div className="sidebar-section-label">Admin</div>
                {NAV_ITEMS.slice(2).map((item) => (
                    <NavLink key={item.to} to={item.to} className={({ isActive }) => `sidebar-link${isActive ? ' active' : ''}`}>
                        <span className="sidebar-icon">{item.icon}</span>
                        {item.label}
                    </NavLink>
                ))}
            </nav>
            {showCreatePortfolio && (
                <PortfolioForm
                    mode="create"
                    workspaceId={defaultWorkspaceId}
                    onClose={() => setShowCreatePortfolio(false)}
                    onSaved={(portfolio) => {
                        setShowCreatePortfolio(false)
                        if (portfolio?.sys_id) navigate(`/portfolios/${portfolio.sys_id}`)
                    }}
                />
            )}
            {showCreateProject && (
                <ProjectForm
                    mode="create"
                    workspaceId={defaultWorkspaceId}
                    onClose={() => setShowCreateProject(false)}
                    onSaved={(project) => {
                        setShowCreateProject(false)
                        if (project?.sys_id) navigate(`/projects/${project.sys_id}`)
                    }}
                />
            )}
        </aside>
    )
}
