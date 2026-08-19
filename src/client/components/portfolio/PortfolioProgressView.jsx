import React from 'react'
import UserChip from '../shared/UserChip'
import PortfolioAboutPanel from './PortfolioAboutPanel'
import './portfolio.css'

export default function PortfolioProgressView({ data, loading }) {
    if (loading) return <div className="portfolio-loading">Loading progress…</div>

    const updates = data?.status_updates || []

    return (
        <div className="portfolio-progress">
            <div className="progress-main">
                <div className="progress-kpis">
                    <div className="progress-kpi">
                        <span className="progress-kpi-value">{data?.on_track ?? 0}</span>
                        <span className="progress-kpi-label">On track</span>
                    </div>
                    <div className="progress-kpi">
                        <span className="progress-kpi-value progress-amber">{data?.at_risk ?? 0}</span>
                        <span className="progress-kpi-label">At risk</span>
                    </div>
                    <div className="progress-kpi">
                        <span className="progress-kpi-value">{data?.total ?? 0}</span>
                        <span className="progress-kpi-label">Total</span>
                    </div>
                </div>

                <div className="status-feed">
                    <h3 className="feed-title">Recent status updates</h3>
                    {updates.length === 0 ? (
                        <p className="feed-empty">No status updates yet.</p>
                    ) : (
                        updates.map((update) => (
                            <div key={update.sys_id} className="feed-item">
                                <div className="feed-item-header">
                                    <UserChip user={update.author} size="sm" />
                                    <span className="feed-date">{update.created_at}</span>
                                </div>
                                <p className="feed-body">{update.body || update.summary}</p>
                                {update.rag && <span className={`feed-rag feed-rag-${update.rag}`}>{update.rag}</span>}
                            </div>
                        ))
                    )}
                </div>
            </div>
            <PortfolioAboutPanel portfolio={data?.portfolio} />
        </div>
    )
}
