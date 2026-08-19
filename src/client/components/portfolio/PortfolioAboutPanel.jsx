import React from 'react'
import UserChip from '../shared/UserChip'
import './portfolio.css'

export default function PortfolioAboutPanel({ portfolio }) {
    if (!portfolio) {
        return (
            <aside className="portfolio-about">
                <h3 className="about-title">About</h3>
                <p className="about-empty">Portfolio details unavailable.</p>
            </aside>
        )
    }

    return (
        <aside className="portfolio-about">
            <h3 className="about-title">About</h3>
            <dl className="about-fields">
                <div className="about-field">
                    <dt>Owner</dt>
                    <dd>
                        <UserChip user={portfolio.owner} />
                    </dd>
                </div>
                {portfolio.due_date && (
                    <div className="about-field">
                        <dt>Due date</dt>
                        <dd>{portfolio.due_date}</dd>
                    </div>
                )}
            </dl>
            <div className="about-description">
                {portfolio.description || <span className="about-placeholder">Click to add portfolio description…</span>}
            </div>
        </aside>
    )
}
