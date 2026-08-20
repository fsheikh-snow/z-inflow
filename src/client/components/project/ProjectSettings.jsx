import React, { useState } from 'react'
import UserChip from '../shared/UserChip'
import MembersEditor from '../shared/MembersEditor'
import ProjectForm from './ProjectForm'
import {
    useProjectMembers,
    useAddProjectMember,
    useUpdateProjectMember,
    useRemoveProjectMember,
} from '../../services/hooks'
import './project.css'

export default function ProjectSettings({ project }) {
    const [showEdit, setShowEdit] = useState(false)
    const projectId = project?.sys_id
    const { data: members = [], isLoading: membersLoading } = useProjectMembers(projectId)
    const addMember = useAddProjectMember(projectId)
    const updateMember = useUpdateProjectMember(projectId)
    const removeMember = useRemoveProjectMember(projectId)
    const busy = addMember.isPending || updateMember.isPending || removeMember.isPending

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
                        <dt>Primary owner</dt>
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
                <h3>Share / Members</h3>
                {membersLoading ? (
                    <p className="settings-empty">Loading members…</p>
                ) : (
                    <MembersEditor
                        title=""
                        hint="People with access to this project. Multiple owners are allowed."
                        members={members}
                        liveMode
                        disabled={busy}
                        onAdd={async (entry) => {
                            await addMember.mutateAsync({ user_id: entry.user_id, role: entry.role })
                        }}
                        onRoleChange={async (member, role) => {
                            if (!member?.sys_id) return
                            await updateMember.mutateAsync({ memberId: member.sys_id, role })
                        }}
                        onRemove={async (member) => {
                            if (!member?.sys_id) return
                            await removeMember.mutateAsync(member.sys_id)
                        }}
                    />
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
                <ProjectForm
                    mode="edit"
                    project={{ ...project, members }}
                    onClose={() => setShowEdit(false)}
                    onSaved={() => setShowEdit(false)}
                />
            )}
        </div>
    )
}
