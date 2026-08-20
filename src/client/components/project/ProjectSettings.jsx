import React, { useState } from 'react'
import UserChip from '../shared/UserChip'
import ProjectForm from './ProjectForm'
import './project.css'

export default function ProjectSettings({ project, members = [] }) {
    const [showEdit, setShowEdit] = useState(false)

    return (
        <div className="project-settings">
            <section className="settings-section">
                <div className="settings-section-header">
                    <h3>General</h3>
                    <button type="button" className="btn btn-ghost" onClick={() => setShowEdit(true)}>
                        Edit
                    </button>
                </div>
                <dl className="settings-fields">
                    <div className="settings-field">
                        <dt>Project name</dt>
                        <dd>{project?.name || '—'}</dd>
                    </div>
                    <div className="settings-field">
                        <dt>Project key</dt>
                        <dd>{project?.project_key || '—'}</dd>
                    </div>
                    <div className="settings-field">
                        <dt>Owner</dt>
                        <dd>
                            <UserChip user={project?.owner} />
                        </dd>
                    </div>
                    <div className="settings-field">
                        <dt>Status</dt>
                        <dd>{project?.status || '—'}</dd>
                    </div>
                    <div className="settings-field">
                        <dt>Priority</dt>
                        <dd>{project?.priority || '—'}</dd>
                    </div>
                    <div className="settings-field">
                        <dt>Due date</dt>
                        <dd>{project?.due_date || '—'}</dd>
                    </div>
                    <div className="settings-field">
                        <dt>Team</dt>
                        <dd>{project?.team?.name || project?.assignment_group_name || '—'}</dd>
                    </div>
                </dl>
            </section>

            <section className="settings-section">
                <h3>Members</h3>
                {members.length === 0 ? (
                    <p className="settings-empty">No members configured.</p>
                ) : (
                    <ul className="settings-members">
                        {members.map((m) => (
                            <li key={m.sys_id}>
                                <UserChip user={m.user || m} />
                                <span className="member-role">{m.role || 'Member'}</span>
                            </li>
                        ))}
                    </ul>
                )}
            </section>

            <section className="settings-section">
                <h3>Integrations</h3>
                <label className="settings-toggle">
                    <input type="checkbox" checked={project?.sync_with_jira || false} readOnly />
                    Sync with Jira
                </label>
            </section>

            {showEdit && (
                <ProjectForm mode="edit" project={project} onClose={() => setShowEdit(false)} onSaved={() => setShowEdit(false)} />
            )}
        </div>
    )
}
