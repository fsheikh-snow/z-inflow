import React from 'react'
import UserChip from '../shared/UserChip'
import './project.css'

export default function TaskDetailPanel({ task, onClose, onUpdate }) {
    if (!task) return null

    return (
        <aside className="task-detail-panel">
            <div className="task-detail-header">
                <h2 className="task-detail-title">{task.name}</h2>
                <button type="button" className="task-detail-close" onClick={onClose} aria-label="Close">
                    ×
                </button>
            </div>

            <div className="task-detail-body">
                <div className="task-detail-field">
                    <label>Assignee</label>
                    <UserChip user={task.assignee} />
                </div>

                {task.due_date && (
                    <div className="task-detail-field">
                        <label>Due date</label>
                        <span>{task.due_date}</span>
                    </div>
                )}

                {task.description && (
                    <div className="task-detail-field">
                        <label>Description</label>
                        <div className="task-detail-description" dangerouslySetInnerHTML={{ __html: task.description }} />
                    </div>
                )}

                {task.projects?.length > 1 && (
                    <div className="task-detail-field">
                        <label>Also in</label>
                        <ul className="task-detail-projects">
                            {task.projects.map((p) => (
                                <li key={p.sys_id}>{p.name}</li>
                            ))}
                        </ul>
                    </div>
                )}

                {task.subtasks?.length > 0 && (
                    <div className="task-detail-field">
                        <label>Subtasks</label>
                        <ul className="task-detail-subtasks">
                            {task.subtasks.map((st) => (
                                <li key={st.sys_id} className={st.completed ? 'completed' : ''}>
                                    {st.name}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </aside>
    )
}
