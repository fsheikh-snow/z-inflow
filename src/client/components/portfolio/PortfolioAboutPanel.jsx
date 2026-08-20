import React, { useState } from 'react'
import UserChip from '../shared/UserChip'
import PortfolioForm from './PortfolioForm'
import './portfolio.css'

export default function PortfolioAboutPanel({ portfolio, onUpdated }) {
    const [showEdit, setShowEdit] = useState(false)

    if (!portfolio) {
        return (
            <aside className="portfolio-about">
                <h3 className="about-title">About</h3>
                <p className="about-empty">Portfolio details unavailable.</p>
            </aside>
        )
    }

    return (
        <>
            <aside className="portfolio-about">
                <div className="about-header">
                    <h3 className="about-title">About</h3>
                    <button type="button" className="btn btn-ghost" onClick={() => setShowEdit(true)}>
                        Edit
                    </button>
                </div>
                <dl className="about-fields">
                    <div className="about-field">
                        <dt>Owner</dt>
                        <dd>
                            <UserChip user={portfolio.owner} />
                        </dd>
                    </div>
                    <div className="about-field">
                        <dt>Due date</dt>
                        <dd>{portfolio.due_date || '—'}</dd>
                    </div>
                </dl>
                <div className="about-description">
                    {portfolio.description || <span className="about-placeholder">Click to add portfolio description…</span>}
                </div>
            </aside>
            {showEdit && (
                <PortfolioForm
                    mode="edit"
                    portfolio={portfolio}
                    onClose={() => setShowEdit(false)}
                    onSaved={(updated) => {
                        onUpdated?.(updated)
                        setShowEdit(false)
                    }}
                />
            )}
        </>
    )
}
