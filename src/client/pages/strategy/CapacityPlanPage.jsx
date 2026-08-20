import React, { useState } from 'react'
import TopBar from '../../layout/TopBar'
import BreadcrumbBar from '../../layout/BreadcrumbBar'
import { useCapacityPlans, useCapacityGrid } from '../../services/hooks'
import '../../components/rules/rules.css'

export default function CapacityPlanPage() {
    const [viewMode, setViewMode] = useState('people')
    const { data: plans = [] } = useCapacityPlans()
    const activePlan = plans[0]
    const { data: grid, isLoading } = useCapacityGrid(activePlan?.sys_id)

    const months = grid?.months || []
    const rows = viewMode === 'people' ? grid?.people || [] : grid?.projects || []

    return (
        <>
            <TopBar title={activePlan?.name || 'Capacity plan'} />
            <BreadcrumbBar
                crumbs={[
                    { label: 'Strategy', to: '/capacity' },
                    { label: activePlan?.name || 'Capacity plan' },
                ]}
            />
            <div className="page-content">
                <div className="capacity-tabs">
                    <button
                        type="button"
                        className={`capacity-tab${viewMode === 'people' ? ' active' : ''}`}
                        onClick={() => setViewMode('people')}
                    >
                        People
                    </button>
                    <button
                        type="button"
                        className={`capacity-tab${viewMode === 'projects' ? ' active' : ''}`}
                        onClick={() => setViewMode('projects')}
                    >
                        Projects
                    </button>
                </div>

                {isLoading ? (
                    <p className="portfolio-loading">Loading capacity grid…</p>
                ) : !activePlan ? (
                    <div className="empty-state">
                        <p>No capacity plan yet.</p>
                        <p className="gantt-empty-hint">
                            Create a capacity plan record (with people/project allocations) to use this view. With zero
                            plans the page stays empty by design.
                        </p>
                    </div>
                ) : rows.length === 0 ? (
                    <div className="empty-state">
                        <p>Capacity plan has no allocations yet.</p>
                        <p className="gantt-empty-hint">
                            Add people or project allocations to “{activePlan.name}” to see the grid.
                        </p>
                    </div>
                ) : (
                    <div className="capacity-grid-wrapper">
                        <table className="capacity-grid">
                            <thead>
                                <tr>
                                    <th className="person-col">{viewMode === 'people' ? 'Person' : 'Project'}</th>
                                    {months.map((month) => (
                                        <th key={month}>{month}</th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {rows.map((row) => (
                                    <tr key={row.sys_id || row.name}>
                                        <td className="person-col">{row.name}</td>
                                        {months.map((month) => {
                                            const pct = row.allocations?.[month] ?? 0
                                            const over = pct > 100
                                            return (
                                                <td key={month} className={`capacity-cell${over ? ' overallocated' : ''}`}>
                                                    {pct > 0 ? `${pct}%` : '—'}
                                                </td>
                                            )
                                        })}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </>
    )
}
