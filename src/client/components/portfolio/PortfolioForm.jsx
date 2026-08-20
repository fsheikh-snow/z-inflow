import React, { useState } from 'react'
import DateField from '../fields/DateField'
import MembersEditor, { membersToPayload, primaryOwnerId } from '../shared/MembersEditor'
import { useCreatePortfolio, useUpdatePortfolio } from '../../services/hooks'
import '../../components/rules/rules.css'
import '../project/project.css'

const EMPTY_FORM = {
    name: '',
    due_date: '',
    description: '',
}

function buildInitialForm(portfolio) {
    if (!portfolio) return EMPTY_FORM
    return {
        name: portfolio.name || '',
        due_date: portfolio.due_date || '',
        description: portfolio.description || '',
    }
}

function buildInitialMembers(portfolio) {
    if (Array.isArray(portfolio?.members) && portfolio.members.length) {
        return portfolio.members
    }
    const ownerId = portfolio?.owner_id || portfolio?.owner?.sys_id
    if (ownerId) {
        return [
            {
                user_id: ownerId,
                role: 'owner',
                user: portfolio.owner || null,
            },
        ]
    }
    return []
}

function buildPayload(form, members, workspaceId) {
    const payload = { name: form.name.trim() }
    if (workspaceId) payload.workspace_id = workspaceId
    if (form.due_date) payload.due_date = form.due_date
    if (form.description.trim()) payload.description = form.description.trim()

    const memberPayload = membersToPayload(members)
    payload.members = memberPayload
    const ownerId = primaryOwnerId(members)
    if (ownerId) {
        payload.owner_id = ownerId
    }

    return payload
}

export default function PortfolioForm({ mode = 'create', portfolio, workspaceId, onClose, onSaved }) {
    const isEdit = mode === 'edit'
    const [form, setForm] = useState(() => buildInitialForm(portfolio))
    const [members, setMembers] = useState(() => buildInitialMembers(portfolio))

    const createMutation = useCreatePortfolio()
    const updateMutation = useUpdatePortfolio(portfolio?.sys_id)
    const mutation = isEdit ? updateMutation : createMutation

    const setField = (field, value) => {
        setForm((prev) => ({ ...prev, [field]: value }))
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        if (!form.name.trim()) return

        const payload = buildPayload(form, members, workspaceId || portfolio?.workspace_id)
        const saved = await mutation.mutateAsync(payload)
        onSaved?.(saved)
        onClose?.()
    }

    return (
        <div className="field-create-modal">
            <form className="field-create-content project-create-form" onSubmit={handleSubmit}>
                <h3>{isEdit ? 'Edit portfolio' : 'New portfolio'}</h3>

                <label htmlFor="portfolio-name">
                    Name
                    <input
                        id="portfolio-name"
                        type="text"
                        className="field-control"
                        value={form.name}
                        onChange={(e) => setField('name', e.target.value)}
                        placeholder="Portfolio name"
                        required
                        autoFocus
                    />
                </label>

                <MembersEditor members={members} onChange={setMembers} disabled={mutation.isPending} />

                <label htmlFor="portfolio-due-date">
                    Due date
                    <DateField
                        id="portfolio-due-date"
                        value={form.due_date}
                        onChange={(value) => setField('due_date', value)}
                    />
                </label>

                <label htmlFor="portfolio-description">
                    Description
                    <textarea
                        id="portfolio-description"
                        className="field-control"
                        rows={3}
                        value={form.description}
                        onChange={(e) => setField('description', e.target.value)}
                        placeholder="Optional description"
                    />
                </label>

                {mutation.isError && (
                    <p className="project-create-error">
                        {typeof mutation.error?.message === 'string'
                            ? mutation.error.message
                            : 'Could not save portfolio'}
                    </p>
                )}

                <div className="field-create-actions">
                    <button type="button" className="btn btn-ghost" onClick={onClose} disabled={mutation.isPending}>
                        Cancel
                    </button>
                    <button type="submit" className="btn btn-primary" disabled={mutation.isPending || !form.name.trim()}>
                        {mutation.isPending ? 'Saving…' : isEdit ? 'Save changes' : 'Create portfolio'}
                    </button>
                </div>
            </form>
        </div>
    )
}
