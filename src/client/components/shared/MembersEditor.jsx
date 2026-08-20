import React, { useMemo, useState } from 'react'
import UserPicker from '../fields/UserPicker'
import ChoiceSelect from '../fields/ChoiceSelect'
import UserChip from '../shared/UserChip'
import { MEMBER_ROLE_CHOICES } from '../../constants/fieldChoices'
import './members.css'

function toDraftMembers(members) {
    if (!Array.isArray(members)) return []
    return members
        .map((m) => ({
            sys_id: m.sys_id || null,
            user_id: m.user_id || m.user?.sys_id || '',
            role: (m.role || 'viewer').toLowerCase(),
            user: m.user || null,
        }))
        .filter((m) => m.user_id)
}

/**
 * Shared members editor for projects and portfolios.
 * Controlled via `members` + `onChange` (create forms) or live callbacks (settings).
 */
export default function MembersEditor({
    members = [],
    onChange,
    onAdd,
    onRoleChange,
    onRemove,
    disabled = false,
    title = 'Members',
    hint = 'Add people with Owner, Editor, Commenter, or Viewer. Multiple owners are allowed.',
    liveMode = false,
}) {
    const list = useMemo(() => toDraftMembers(members), [members])
    const [pendingUserId, setPendingUserId] = useState('')
    const [pendingUser, setPendingUser] = useState(null)
    const [pendingRole, setPendingRole] = useState('editor')
    const [error, setError] = useState('')

    const emitChange = (next) => {
        onChange?.(next)
    }

    const handleAdd = async () => {
        setError('')
        if (!pendingUserId || !pendingUser) {
            setError('Select a person to add.')
            return
        }
        if (list.some((m) => m.user_id === pendingUserId)) {
            setError('That person is already a member.')
            return
        }

        const entry = {
            sys_id: null,
            user_id: pendingUserId,
            role: pendingRole || 'viewer',
            user: pendingUser,
        }

        if (liveMode && onAdd) {
            try {
                await onAdd(entry)
            } catch (e) {
                setError(e?.message || 'Could not add member')
                return
            }
        } else {
            emitChange([...list, entry])
        }

        setPendingUserId('')
        setPendingUser(null)
        setPendingRole('editor')
    }

    const handleRoleChange = async (userId, role) => {
        setError('')
        if (liveMode && onRoleChange) {
            const member = list.find((m) => m.user_id === userId)
            try {
                await onRoleChange(member, role)
            } catch (e) {
                setError(e?.message || 'Could not update role')
            }
            return
        }
        emitChange(list.map((m) => (m.user_id === userId ? { ...m, role } : m)))
    }

    const handleRemove = async (userId) => {
        setError('')
        if (liveMode && onRemove) {
            const member = list.find((m) => m.user_id === userId)
            try {
                await onRemove(member)
            } catch (e) {
                setError(e?.message || 'Could not remove member')
            }
            return
        }
        emitChange(list.filter((m) => m.user_id !== userId))
    }

    return (
        <div className="members-editor">
            {title ? <h4 className="members-editor-title">{title}</h4> : null}
            {hint ? <p className="members-editor-hint">{hint}</p> : null}

            {list.length === 0 ? (
                <p className="members-editor-empty">No members yet. Add at least one owner when sharing.</p>
            ) : (
                <ul className="members-editor-list">
                    {list.map((m) => (
                        <li key={m.user_id} className="members-editor-row">
                            <UserChip user={m.user || { sys_id: m.user_id, name: m.user_id }} showEmail />
                            <div className="members-editor-row-actions">
                                <ChoiceSelect
                                    id={`member-role-${m.user_id}`}
                                    value={m.role}
                                    onChange={(value) => handleRoleChange(m.user_id, value)}
                                    choices={MEMBER_ROLE_CHOICES}
                                    disabled={disabled}
                                />
                                <button
                                    type="button"
                                    className="btn btn-ghost members-remove"
                                    onClick={() => handleRemove(m.user_id)}
                                    disabled={disabled}
                                    aria-label="Remove member"
                                >
                                    Remove
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            )}

            <div className="members-editor-add">
                <UserPicker
                    id="members-add-user"
                    value={pendingUserId}
                    selectedUser={pendingUser}
                    onChange={(id, user) => {
                        setPendingUserId(id)
                        setPendingUser(user)
                        setError('')
                    }}
                    placeholder="Search by name or email…"
                />
                <ChoiceSelect
                    id="members-add-role"
                    value={pendingRole}
                    onChange={setPendingRole}
                    choices={MEMBER_ROLE_CHOICES}
                    disabled={disabled}
                />
                <button type="button" className="btn btn-primary" onClick={handleAdd} disabled={disabled || !pendingUserId}>
                    Add
                </button>
            </div>

            {error ? <p className="members-editor-error">{error}</p> : null}
        </div>
    )
}

/** Payload helper: strip UI-only fields for REST create/update */
export function membersToPayload(members) {
    return toDraftMembers(members).map((m) => ({
        user_id: m.user_id,
        role: m.role || 'viewer',
    }))
}

/** Keep owner_id aligned with first Owner for list/display fields */
export function primaryOwnerId(members) {
    const owners = toDraftMembers(members).filter((m) => m.role === 'owner')
    return owners[0]?.user_id || ''
}
