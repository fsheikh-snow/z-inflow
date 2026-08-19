import React from 'react'
import { Link } from 'react-router-dom'
import UserChip from '../shared/UserChip'
import TagPill from '../shared/TagPill'
import './portfolio.css'

export default function PortfolioKanbanGrid({ lanes = [], loading, onCardClick }) {
    if (loading) return <div className="portfolio-loading">Loading kanban…</div>

    if (!lanes.length) {
        return <div className="portfolio-empty">No projects in this portfolio.</div>
    }

    return (
        <div className="portfolio-kanban">
            {lanes.map((lane) => (
                <div key={lane.id || lane.status} className="kanban-lane">
                    <div className="kanban-lane-header">
                        <span className="kanban-lane-title">{lane.label || lane.status}</span>
                        <span className="kanban-lane-count">{(lane.projects || lane.cards || []).length}</span>
                    </div>
                    <div className="kanban-lane-cards">
                        {(lane.projects || lane.cards || []).map((project) => (
                            <div
                                key={project.sys_id}
                                className="kanban-card"
                                onClick={() => onCardClick?.(project)}
                                role="button"
                                tabIndex={0}
                            >
                                <div className="kanban-card-key">{project.project_key}</div>
                                <Link to={`/projects/${project.sys_id}`} className="kanban-card-name" onClick={(e) => e.stopPropagation()}>
                                    {project.name}
                                </Link>
                                <div className="kanban-card-meta">
                                    {project.priority && <TagPill label={project.priority} variant={project.priority?.toLowerCase()} />}
                                    <UserChip user={project.owner} size="sm" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    )
}
