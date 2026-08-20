import React, { useState } from 'react'
import UserPicker from '../fields/UserPicker'
import ChoiceSelect from '../fields/ChoiceSelect'
import DateField from '../fields/DateField'
import { TASK_PRIORITY_CHOICES, TASK_STATUS_CHOICES } from '../../constants/fieldChoices'
import { useCreateTask, useUpdateTask } from '../../services/hooks'
import '../project/project.css'

const EMPTY_FORM = {
    name: '',
    assignee_id: '',
    status: 'open',
    priority: '',
    start_date: '',
    due_date: '',
    description: '',
    notes: '',
}

function buildInitialForm(task) {
    if (!task) return EMPTY_FORM
    return {
        name: task.name || '',
        assignee_id: task.assignee_id || task.assignee?.sys_id || '',
        status: task.status || '',
        priority: task.priority || '',
        start_date: task.start_date || '',
        due_date: task.due_date || '',
        description: task.description || '',
        notes: task.notes || '',
    }
}

function buildPayload(form) {
    const payload = { name: form.name.trim() }
    const optionalFields = ['assignee_id', 'status', 'priority', 'start_date', 'due_date', 'description', 'notes']
    for (const field of optionalFields) {
        if (form[field]) {
            payload[field] = form[field]
        }
    }
    return payload
}

export default function TaskForm({ mode = 'create', task, projectId, onClose, onSaved, compact = false }) {
    const isEdit = mode === 'edit'
    const [form, setForm] = useState(() => buildInitialForm(task))
    const [assignee, setAssignee] = useState(task?.assignee || null)

    const createMutation = useCreateTask(projectId)
    const updateMutation = useUpdateTask(projectId)
    const mutation = isEdit ? updateMutation : createMutation

    const setField = (field, value) => {
        setForm((prev) => ({ ...prev, [field]: value }))
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        if (!form.name.trim()) return

        const payload = buildPayload(form)
        const saved = isEdit
            ? await updateMutation.mutateAsync({ taskId: task.sys_id, data: payload })
            : await createMutation.mutateAsync(payload)

        onSaved?.(saved)
        onClose?.()
    }

    const FormWrapper = compact ? 'div' : 'form'
    const formProps = compact ? {} : { onSubmit: handleSubmit }

    return (
        <FormWrapper className={compact ? 'task-form-compact' : 'field-create-content project-create-form'} {...formProps}>
            {!compact && <h3>{isEdit ? 'Edit task' : 'New task'}</h3>}

            <label htmlFor="task-name">
                Name
                <input
                    id="task-name"
                    type="text"
                    className="field-control"
                    value={form.name}
                    onChange={(e) => setField('name', e.target.value)}
                    placeholder="Task name"
                    required
                />
            </label>

            <label htmlFor="task-assignee">
                Assignee
                <UserPicker
                    id="task-assignee"
                    value={form.assignee_id}
                    selectedUser={assignee}
                    placeholder="Search assignees…"
                    clearLabel="Clear assignee"
                    onChange={(assigneeId, user) => {
                        setField('assignee_id', assigneeId)
                        setAssignee(user)
                    }}
                />
            </label>

            <label htmlFor="task-status">
                Status
                <ChoiceSelect
                    id="task-status"
                    value={form.status}
                    onChange={(value) => setField('status', value)}
                    choices={TASK_STATUS_CHOICES}
                />
            </label>

            <label htmlFor="task-priority">
                Priority
                <ChoiceSelect
                    id="task-priority"
                    value={form.priority}
                    onChange={(value) => setField('priority', value)}
                    choices={TASK_PRIORITY_CHOICES}
                />
            </label>

            <label htmlFor="task-start-date">
                Start date
                <DateField
                    id="task-start-date"
                    value={form.start_date}
                    onChange={(value) => setField('start_date', value)}
                />
            </label>

            <label htmlFor="task-due-date">
                Due date
                <DateField
                    id="task-due-date"
                    value={form.due_date}
                    onChange={(value) => setField('due_date', value)}
                />
            </label>

            <label htmlFor="task-description">
                Description
                <textarea
                    id="task-description"
                    className="field-control"
                    rows={3}
                    value={form.description}
                    onChange={(e) => setField('description', e.target.value)}
                    placeholder="Optional description"
                />
            </label>

            <label htmlFor="task-notes">
                Notes
                <input
                    id="task-notes"
                    type="text"
                    className="field-control"
                    value={form.notes}
                    onChange={(e) => setField('notes', e.target.value)}
                    placeholder="Optional notes"
                />
            </label>

            {mutation.isError && <p className="project-create-error">{mutation.error.message}</p>}

            <div className="field-create-actions">
                {onClose && (
                    <button type="button" className="btn btn-ghost" onClick={onClose} disabled={mutation.isPending}>
                        Cancel
                    </button>
                )}
                <button
                    type={compact ? 'button' : 'submit'}
                    className="btn btn-primary"
                    disabled={mutation.isPending || !form.name.trim()}
                    onClick={compact ? handleSubmit : undefined}
                >
                    {mutation.isPending ? 'Saving…' : isEdit ? 'Save changes' : 'Create task'}
                </button>
            </div>
        </FormWrapper>
    )
}
