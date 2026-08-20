import React, { useState } from 'react'
import UserPicker from '../fields/UserPicker'
import GroupPicker from '../fields/GroupPicker'
import ChoiceSelect from '../fields/ChoiceSelect'
import DateField from '../fields/DateField'
import { PROJECT_PRIORITY_CHOICES, PROJECT_STATUS_CHOICES } from '../../constants/fieldChoices'
import { useCreateProject, useUpdateProject } from '../../services/hooks'
import '../../components/rules/rules.css'
import './project.css'

const EMPTY_FORM = {
    name: '',
    project_key: '',
    owner_id: '',
    assignment_group: '',
    status: '',
    priority: '',
    start_date: '',
    due_date: '',
    notes: '',
}

function buildInitialForm(project) {
    if (!project) return EMPTY_FORM
    return {
        name: project.name || '',
        project_key: project.project_key || '',
        owner_id: project.owner_id || project.owner?.sys_id || '',
        assignment_group: project.assignment_group || project.team?.sys_id || '',
        status: project.status || '',
        priority: project.priority || '',
        start_date: project.start_date || '',
        due_date: project.due_date || '',
        notes: project.notes || '',
    }
}

function buildPayload(form, { workspaceId, portfolioId } = {}) {
    const payload = { name: form.name.trim() }
    if (workspaceId) payload.workspace_id = workspaceId
    if (portfolioId) payload.portfolio_id = portfolioId

    const optionalFields = [
        'project_key',
        'owner_id',
        'assignment_group',
        'status',
        'priority',
        'start_date',
        'due_date',
        'notes',
    ]
    for (const field of optionalFields) {
        if (form[field]) {
            payload[field] = form[field]
        }
    }
    return payload
}

export default function ProjectForm({ mode = 'create', project, portfolio, onClose, onSaved }) {
    const isEdit = mode === 'edit'
    const [form, setForm] = useState(() => buildInitialForm(project))
    const [owner, setOwner] = useState(project?.owner || null)
    const [team, setTeam] = useState(project?.team || project?.assignment_group_obj || null)

    const createMutation = useCreateProject(portfolio?.sys_id)
    const updateMutation = useUpdateProject(project?.sys_id)
    const mutation = isEdit ? updateMutation : createMutation

    const setField = (field, value) => {
        setForm((prev) => ({ ...prev, [field]: value }))
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        if (!form.name.trim()) return

        const payload = isEdit
            ? buildPayload(form)
            : buildPayload(form, { workspaceId: portfolio?.workspace_id, portfolioId: portfolio?.sys_id })

        const saved = await mutation.mutateAsync(payload)
        onSaved?.(saved)
        onClose?.()
    }

    return (
        <div className="field-create-modal">
            <form className="field-create-content project-create-form" onSubmit={handleSubmit}>
                <h3>{isEdit ? 'Edit project' : 'New project'}</h3>

                <label htmlFor="project-name">
                    Name
                    <input
                        id="project-name"
                        type="text"
                        className="field-control"
                        value={form.name}
                        onChange={(e) => setField('name', e.target.value)}
                        placeholder="Project name"
                        required
                        autoFocus
                    />
                </label>

                <label htmlFor="project-key">
                    Project key
                    <input
                        id="project-key"
                        type="text"
                        className="field-control"
                        value={form.project_key}
                        onChange={(e) => setField('project_key', e.target.value)}
                        placeholder="Optional key"
                    />
                </label>

                <label htmlFor="project-owner">
                    Owner
                    <UserPicker
                        id="project-owner"
                        value={form.owner_id}
                        selectedUser={owner}
                        onChange={(ownerId, user) => {
                            setField('owner_id', ownerId)
                            setOwner(user)
                        }}
                    />
                </label>

                <label htmlFor="project-team">
                    Team
                    <GroupPicker
                        id="project-team"
                        value={form.assignment_group}
                        selectedGroup={team}
                        onChange={(groupId, group) => {
                            setField('assignment_group', groupId)
                            setTeam(group)
                        }}
                    />
                </label>

                <label htmlFor="project-status">
                    Status
                    <ChoiceSelect
                        id="project-status"
                        value={form.status}
                        onChange={(value) => setField('status', value)}
                        choices={PROJECT_STATUS_CHOICES}
                    />
                </label>

                <label htmlFor="project-priority">
                    Priority
                    <ChoiceSelect
                        id="project-priority"
                        value={form.priority}
                        onChange={(value) => setField('priority', value)}
                        choices={PROJECT_PRIORITY_CHOICES}
                    />
                </label>

                <label htmlFor="project-start-date">
                    Start date
                    <DateField
                        id="project-start-date"
                        value={form.start_date}
                        onChange={(value) => setField('start_date', value)}
                    />
                </label>

                <label htmlFor="project-due-date">
                    Due date
                    <DateField
                        id="project-due-date"
                        value={form.due_date}
                        onChange={(value) => setField('due_date', value)}
                    />
                </label>

                <label htmlFor="project-notes">
                    Notes
                    <input
                        id="project-notes"
                        type="text"
                        className="field-control"
                        value={form.notes}
                        onChange={(e) => setField('notes', e.target.value)}
                        placeholder="Optional notes"
                    />
                </label>

                {mutation.isError && <p className="project-create-error">{mutation.error.message}</p>}

                <div className="field-create-actions">
                    <button type="button" className="btn btn-ghost" onClick={onClose} disabled={mutation.isPending}>
                        Cancel
                    </button>
                    <button type="submit" className="btn btn-primary" disabled={mutation.isPending || !form.name.trim()}>
                        {mutation.isPending ? 'Saving…' : isEdit ? 'Save changes' : 'Create project'}
                    </button>
                </div>
            </form>
        </div>
    )
}
