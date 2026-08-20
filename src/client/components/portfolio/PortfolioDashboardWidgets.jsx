import React, { useEffect, useState } from 'react'
import './portfolio.css'

const STATUS_COLORS = ['#22c55e', '#f59e0b', '#ef4444', '#94a3b8']

/**
 * Load recharts only when the Dashboard tab mounts.
 * Dynamic import of the vendor package (main → recharts chunk) is SN-safe;
 * React.lazy of local page modules (chunk → main named exports) is not.
 */
function useRecharts() {
    const [recharts, setRecharts] = useState(null)

    useEffect(() => {
        let cancelled = false
        import('recharts').then((mod) => {
            if (!cancelled) setRecharts(mod)
        })
        return () => {
            cancelled = true
        }
    }, [])

    return recharts
}

export default function PortfolioDashboardWidgets({ data, loading }) {
    const recharts = useRecharts()

    if (loading || !recharts) {
        return <div className="portfolio-loading">Loading dashboard…</div>
    }

    const { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip } = recharts

    const statusBreakdown = data?.status_breakdown || [
        { name: 'On track', value: 0 },
        { name: 'At risk', value: 0 },
        { name: 'Off track', value: 0 },
        { name: 'No updates', value: 0 },
    ]

    const priorityBreakdown = data?.priority_breakdown || []

    return (
        <div className="portfolio-dashboard">
            <div className="dashboard-widget">
                <h3 className="widget-title">Project status</h3>
                <ResponsiveContainer width="100%" height={220}>
                    <PieChart>
                        <Pie data={statusBreakdown} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80} label>
                            {statusBreakdown.map((_, i) => (
                                <Cell key={i} fill={STATUS_COLORS[i % STATUS_COLORS.length]} />
                            ))}
                        </Pie>
                        <Tooltip />
                    </PieChart>
                </ResponsiveContainer>
            </div>
            <div className="dashboard-widget">
                <h3 className="widget-title">By priority</h3>
                <ResponsiveContainer width="100%" height={220}>
                    <BarChart data={priorityBreakdown}>
                        <XAxis dataKey="name" tick={{ fontSize: 12 }} />
                        <YAxis tick={{ fontSize: 12 }} />
                        <Tooltip />
                        <Bar dataKey="value" fill="#6366f1" radius={[4, 4, 0, 0]} />
                    </BarChart>
                </ResponsiveContainer>
            </div>
            <div className="dashboard-widget dashboard-kpis">
                <h3 className="widget-title">Summary</h3>
                <div className="kpi-grid">
                    <div className="kpi-item">
                        <span className="kpi-value">{data?.total_projects ?? 0}</span>
                        <span className="kpi-label">Total projects</span>
                    </div>
                    <div className="kpi-item">
                        <span className="kpi-value kpi-green">{data?.on_track ?? 0}</span>
                        <span className="kpi-label">On track</span>
                    </div>
                    <div className="kpi-item">
                        <span className="kpi-value kpi-amber">{data?.at_risk ?? 0}</span>
                        <span className="kpi-label">At risk</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
