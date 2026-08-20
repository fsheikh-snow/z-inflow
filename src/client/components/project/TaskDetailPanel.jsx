import React, { useState } from 'react'
import UserChip from '../shared/UserChip'
import ChoiceSelect from '../fields/ChoiceSelect'
import DateField from '../fields/DateField'
import { TASK_PRIORITY_CHOICES, TASK_STATUS_CHOICES } from '../../constants/fieldChoices'
import { useUpdateTask } from '../../services/hooks'
import UserPicker from '../fields/UserPicker'
import './project.css'

export default function TaskDetailPanel({ task, projectId, onClose, onUpdate }) {
    const [form, setForm] = useState(null)
    const [assignee, setAssignee] = useState(null)
    const updateMutation = useUpdateTask(projectId)

    if (!task) return null

    const editing = form !== null
    const values = editing
        ? form
        : {
              name: task.name || '',
              assignee_id: task.assignee_id || task.assignee?.sys_id || '',
              status: task.status || '',
              priority: task.priority || '',
              start_date: task.start_date || '',
              due_date: task.due_date || '',
              description: task.description || '',
              notes: task.notes || '',
          }

    const setField = (field, value) => {
        setForm((prev) => ({ ...(prev || values), [field]: value }))
    }

    const startEditing = () => {
        setForm({
            name: task.name || '',
            assignee_id: task.assignee_id || task.assignee?.sys_id || '',
            status: task.status || '',
            priority: task.priority || '',
            start_date: task.start_date || '',
            due_date: task.due_date || '',
            description: task.description || '',
            notes: task.notes || '',
        })
        setAssignee(task.assignee || null)
    }

    const cancelEditing = () => {
        setForm(null)
        setAssignee(null)
    }

    const handleSave = async () => {
        const payload = { name: values.name.trim() }
        const fields = ['assignee_id', 'status', 'priority', 'start_date', 'due_date', 'description', 'notes']
        for (const field of fields) {
            if (values[field]) payload[field] = values[field]
        }

        const updated = await updateMutation.mutateAsync({ taskId: task.sys_id, data: payload })
        onUpdate?.(updated)
        setForm(null)
    }

    return (
        <aside className="task-detail-panel">
            <div className="task-detail-header">
                {editing ? (
                    <input
                        type="text"
                        className="field-control task-detail-title-input"
                        value={values.name}
                        onChange={(e) => setField('name', e.target.value)}
                    />
                ) : (
                    <h2 className="task-detail-title">{task.name}</h2>
                )}
                <button type="button" className="task-detail-close" onClick={onClose} aria-label="Close">
                    ×
                </button>
            </div>

            <div className="task-detail-body">
                <div className="task-detail-field">
                    <label htmlFor="task-panel-assignee">Assignee</label>
                    {editing ? (
                        <UserPicker
                            id="task-panel-assignee"
                            value={values.assignee_id}
                            selectedUser={assignee}
                            placeholder="Search assignees…"
                            clearLabel="Clear assignee"
                            onChange={(assigneeId, user) => {
                                setField('assignee_id', assigneeId)
                                setAssignee(user)
                            }}
                        />
                    ) : (
                        <UserChip user={task.assignee} />
                    )}
                </div>

                <div className="task-detail-field">
                    <label htmlFor="task-panel-status">Status</label>
                    {editing ? (
                        <ChoiceSelect
                            id="task-panel-status"
                            value={values.status}
                            onChange={(value) => setField('status', value)}
                            choices={TASK_STATUS_CHOICES}
                        />
                    ) : (
                        <span>{task.status || '—'}</span>
                    )}
                </div>

                <div className="task-detail-field">
                    <label htmlFor="task-panel-priority">Priority</label>
                    {editing ? (
                        <ChoiceSelect
                            id="task-panel-priority"
                            value={values.priority}
                            onChange={(value) => setField('priority', value)}
                            choices={TASK_PRIORITY_CHOICES}
                        />
                    ) : (
                        <span>{task.priority || '—'}</span>
                    )}
                </div>

                <div className="task-detail-field">
                    <label htmlFor="task-panel-start-date">Start date</label>
                    {editing ? (
                        <DateField
                            id="task-panel-start-date"
                            value={values.start_date}
                            onChange={(value) => setField('start_date', value)}
                        />
                    ) : (
                        <span>{task.start_date || '—'}</span>
                    )}
                </div>

                <div className="task-detail-field">
                    <label htmlFor="task-panel-due-date">Due date</label>
                    {editing ? (
                        <DateField
                            id="task-panel-due-date"
                            value={values.due_date}
                            onChange={(value) => setField('due_date', value)}
                        />
                    ) : (
                        <span>{task.due_date || '—'}</span>
                    )}
                </div>

                {(editing || task.description) && (
                    <div className="task-detail-field">
                        <label htmlFor="task-panel-description">Description</label>
                        {editing ? (
                            <textarea
                                id="task-panel-description"
                                className="field-control"
                                rows={4}
                                value={values.description}
                                onChange={(e) => setField('description', e.target.value)}
                            />
                        ) : (
                            <div className="task-detail-description" dangerouslySetInnerHTML={{ __html: task.description }} />
                        )}
                    </div>
                )}

                {(editing || task.notes) && (
                    <div className="task-detail-field">
                        <label htmlFor="task-panel-notes">Notes</label>
                        {editing ? (
                            <input
                                id="task-panel-notes"
                                type="text"
                                className="field-control"
                                value={values.notes}
                                onChange={(e) => setField('notes', e.target.value)}
                            />
                        ) : (
                            <span>{task.notes}</span>
                        )}
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

                {updateMutation.isError && <p className="project-create-error">{updateMutation.error.message}</p>}
            </div>

            <div className="task-detail-footer">
                {editing ? (
                    <>
                        <button type="button" className="btn btn-ghost" onClick={cancelEditing} disabled={updateMutation.isPending}>
                            Cancel
                        </button>
                        <button type="button" className="btn btn-primary" onClick={handleSave} disabled={updateMutation.isPending || !values.name.trim()}>
                            {updateMutation.isPending ? 'Saving…' : 'Save changes'}
                        </button>
                    </>
                ) : (
                    <button type="button" className="btn btn-primary" onClick={startEditing}>
                        Edit task
                    </button>
                )}
            </div>
        </aside>
    )
}
