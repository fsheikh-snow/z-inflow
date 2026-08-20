import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { usePortfolios } from '../services/hooks'
import PortfolioForm from '../components/portfolio/PortfolioForm'
import './layout.css'

const NAV_ITEMS = [
    { to: '/my-tasks', label: 'My tasks', icon: '☑' },
    { to: '/capacity', label: 'Capacity', icon: '📊' },
    { to: '/admin/fields', label: 'Field library', icon: '🏷' },
    { to: '/admin/rules', label: 'Automations', icon: '⚡' },
]

export default function AppSidebar() {
    const { data: portfolios = [] } = usePortfolios()
    const navigate = useNavigate()
    const [showCreatePortfolio, setShowCreatePortfolio] = useState(false)
    const defaultWorkspaceId = portfolios[0]?.workspace_id

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

                <div className="sidebar-section-label">Portfolios</div>
                <button type="button" className="sidebar-link sidebar-link-action" onClick={() => setShowCreatePortfolio(true)}>
                    <span className="sidebar-icon">+</span>
                    New portfolio
                </button>
                {portfolios.length === 0 ? (
                    <div className="sidebar-empty">No portfolios</div>
                ) : (
                    portfolios.map((p) => (
                        <NavLink
                            key={p.sys_id}
                            to={`/portfolios/${p.sys_id}`}
                            className={({ isActive }) => `sidebar-link${isActive ? ' active' : ''}`}
                        >
                            <span className="sidebar-dot" style={{ background: p.color || '#6366f1' }} />
                            {p.name}
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
                        navigate(`/portfolios/${portfolio.sys_id}`)
                    }}
                />
            )}
        </aside>
    )
}
