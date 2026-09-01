import React, { useEffect, useState } from 'react'
import UserChip from '../shared/UserChip'
import ChoiceSelect from '../fields/ChoiceSelect'
import DateField from '../fields/DateField'
import { TASK_PRIORITY_CHOICES, TASK_STATUS_CHOICES } from '../../constants/fieldChoices'
import { useTask, useUpdateTask } from '../../services/hooks'
import UserPicker from '../fields/UserPicker'
import './project.css'

export default function TaskDetailPanel({ task, projectId, onClose, onUpdate }) {
    const taskId = task?.sys_id
    const { data: fullTask, isLoading } = useTask(taskId, projectId, { enabled: Boolean(taskId) })
    const displayTask = fullTask || task

    const [form, setForm] = useState(null)
    const [assignee, setAssignee] = useState(null)
    const updateMutation = useUpdateTask(projectId)

    useEffect(() => {
        setForm(null)
        setAssignee(null)
    }, [taskId])

    if (!task) return null

    const editing = form !== null
    const values = editing
        ? form
        : {
              name: displayTask.name || '',
              assignee_id: displayTask.assignee_id || displayTask.assignee?.sys_id || '',
              status: displayTask.status || '',
              priority: displayTask.priority || '',
              start_date: displayTask.start_date || '',
              due_date: displayTask.due_date || '',
              description: displayTask.description || '',
              notes: displayTask.notes || '',
          }

    const setField = (field, value) => {
        setForm((prev) => ({ ...(prev || values), [field]: value }))
    }

    const startEditing = () => {
        setForm({
            name: displayTask.name || '',
            assignee_id: displayTask.assignee_id || displayTask.assignee?.sys_id || '',
            status: displayTask.status || '',
            priority: displayTask.priority || '',
            start_date: displayTask.start_date || '',
            due_date: displayTask.due_date || '',
            description: displayTask.description || '',
            notes: displayTask.notes || '',
        })
        setAssignee(displayTask.assignee || null)
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

        const updated = await updateMutation.mutateAsync({ taskId: displayTask.sys_id, data: payload })
        onUpdate?.(updated)
        setForm(null)
    }

    const handleToggleComplete = async () => {
        const updated = await updateMutation.mutateAsync({
            taskId: displayTask.sys_id,
            data: { completed: !displayTask.completed },
        })
        onUpdate?.(updated)
    }

    return (
        <aside className="task-detail-panel">
            <div className="task-detail-header">
                <button
                    type="button"
                    className={`task-detail-complete${displayTask.completed ? ' done' : ''}`}
                    onClick={handleToggleComplete}
                    disabled={updateMutation.isPending}
                    aria-label={displayTask.completed ? 'Mark incomplete' : 'Mark complete'}
                >
                    {displayTask.completed ? '✓' : '○'}
                </button>
                {editing ? (
                    <input
                        type="text"
                        className="field-control task-detail-title-input"
                        value={values.name}
                        onChange={(e) => setField('name', e.target.value)}
                    />
                ) : (
                    <h2 className={`task-detail-title${displayTask.completed ? ' done' : ''}`}>{displayTask.name}</h2>
                )}
                <button type="button" className="task-detail-close" onClick={onClose} aria-label="Close">
                    ×
                </button>
            </div>

            {isLoading && !fullTask ? (
                <div className="task-detail-body task-detail-loading">Loading task…</div>
            ) : (
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
                            <UserChip user={displayTask.assignee} />
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
                            <span>{displayTask.status || '—'}</span>
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
                            <span>{displayTask.priority || '—'}</span>
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
                            <span>{displayTask.start_date || '—'}</span>
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
                            <span>{displayTask.due_date || '—'}</span>
                        )}
                    </div>

                    {(editing || displayTask.description) && (
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
                                <div className="task-detail-description" dangerouslySetInnerHTML={{ __html: displayTask.description }} />
                            )}
                        </div>
                    )}

                    {(editing || displayTask.notes) && (
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
                                <span>{displayTask.notes}</span>
                            )}
                        </div>
                    )}

                    {displayTask.projects?.length > 1 && (
                        <div className="task-detail-field">
                            <label>Also in</label>
                            <ul className="task-detail-projects">
                                {displayTask.projects.map((p) => (
                                    <li key={p.sys_id}>{p.name}</li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {displayTask.subtasks?.length > 0 && (
                        <div className="task-detail-field">
                            <label>Subtasks</label>
                            <ul className="task-detail-subtasks">
                                {displayTask.subtasks.map((st) => (
                                    <li key={st.sys_id} className={st.completed ? 'completed' : ''}>
                                        {st.name}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {updateMutation.isError && (
                        <p className="project-create-error">
                            {typeof updateMutation.error?.message === 'string'
                                ? updateMutation.error.message
                                : 'Could not update task'}
                        </p>
                    )}
                </div>
            )}

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
