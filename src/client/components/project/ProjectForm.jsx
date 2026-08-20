import React, { useState } from 'react'
import GroupPicker from '../fields/GroupPicker'
import ChoiceSelect from '../fields/ChoiceSelect'
import DateField from '../fields/DateField'
import MembersEditor, { membersToPayload, primaryOwnerId } from '../shared/MembersEditor'
import { PROJECT_PRIORITY_CHOICES, PROJECT_STATUS_CHOICES } from '../../constants/fieldChoices'
import { useCreateProject, useUpdateProject } from '../../services/hooks'
import '../../components/rules/rules.css'
import './project.css'

const EMPTY_FORM = {
    name: '',
    project_key: '',
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
        assignment_group: project.assignment_group || project.team?.sys_id || '',
        status: project.status || '',
        priority: project.priority || '',
        start_date: project.start_date || '',
        due_date: project.due_date || '',
        notes: project.notes || '',
    }
}

function buildInitialMembers(project) {
    if (Array.isArray(project?.members) && project.members.length) {
        return project.members
    }
    const ownerId = project?.owner_id || project?.owner?.sys_id
    if (ownerId) {
        return [
            {
                user_id: ownerId,
                role: 'owner',
                user: project.owner || null,
            },
        ]
    }
    return []
}

function buildPayload(form, members, { workspaceId, portfolioId } = {}) {
    const payload = { name: form.name.trim() }
    if (workspaceId) payload.workspace_id = workspaceId
    if (portfolioId) payload.portfolio_id = portfolioId

    const optionalFields = ['project_key', 'assignment_group', 'status', 'priority', 'start_date', 'due_date', 'notes']
    for (const field of optionalFields) {
        if (form[field]) {
            payload[field] = form[field]
        }
    }

    const memberPayload = membersToPayload(members)
    payload.members = memberPayload
    const ownerId = primaryOwnerId(members)
    if (ownerId) {
        payload.owner_id = ownerId
    }

    return payload
}

export default function ProjectForm({ mode = 'create', project, portfolio, workspaceId, onClose, onSaved }) {
    const isEdit = mode === 'edit'
    const [form, setForm] = useState(() => buildInitialForm(project))
    const [members, setMembers] = useState(() => buildInitialMembers(project))
    const [team, setTeam] = useState(project?.team || project?.assignment_group_obj || null)
    const [showAdvanced, setShowAdvanced] = useState(Boolean(project?.project_key))

    const createMutation = useCreateProject(portfolio?.sys_id)
    const updateMutation = useUpdateProject(project?.sys_id)
    const mutation = isEdit ? updateMutation : createMutation

    const setField = (field, value) => {
        setForm((prev) => ({ ...prev, [field]: value }))
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        if (!form.name.trim()) return

        const resolvedWorkspace =
            workspaceId || portfolio?.workspace_id || project?.workspace_id || undefined

        const payload = isEdit
            ? buildPayload(form, members)
            : buildPayload(form, members, {
                  workspaceId: resolvedWorkspace,
                  portfolioId: portfolio?.sys_id,
              })

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

                <MembersEditor members={members} onChange={setMembers} disabled={mutation.isPending} />

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

                <button
                    type="button"
                    className="btn btn-ghost project-advanced-toggle"
                    onClick={() => setShowAdvanced((v) => !v)}
                >
                    {showAdvanced ? 'Hide advanced' : 'Advanced options'}
                </button>

                {showAdvanced && (
                    <label htmlFor="project-key">
                        Project key
                        <input
                            id="project-key"
                            type="text"
                            className="field-control"
                            value={form.project_key}
                            onChange={(e) => setField('project_key', e.target.value)}
                            placeholder={isEdit ? 'Override key' : 'Auto-generated if blank'}
                        />
                        <span className="field-hint">Leave blank on create to auto-generate from the project name.</span>
                    </label>
                )}

                {mutation.isError && (
                    <p className="project-create-error">
                        {typeof mutation.error?.message === 'string'
                            ? mutation.error.message
                            : 'Could not save project'}
                    </p>
                )}

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
