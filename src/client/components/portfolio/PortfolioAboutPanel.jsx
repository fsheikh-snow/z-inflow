import React, { useState } from 'react'
import UserChip from '../shared/UserChip'
import MembersEditor from '../shared/MembersEditor'
import PortfolioForm from './PortfolioForm'
import {
    usePortfolioMembers,
    useAddPortfolioMember,
    useUpdatePortfolioMember,
    useRemovePortfolioMember,
} from '../../services/hooks'
import './portfolio.css'

export default function PortfolioAboutPanel({ portfolio, onUpdated }) {
    const [showEdit, setShowEdit] = useState(false)
    const portfolioId = portfolio?.sys_id
    const { data: members = [], isLoading: membersLoading } = usePortfolioMembers(portfolioId)
    const addMember = useAddPortfolioMember(portfolioId)
    const updateMember = useUpdatePortfolioMember(portfolioId)
    const removeMember = useRemovePortfolioMember(portfolioId)
    const busy = addMember.isPending || updateMember.isPending || removeMember.isPending

    if (!portfolio) {
        return (
            <aside className="portfolio-about">
                <h3 className="about-title">About</h3>
                <p className="about-empty">Portfolio details unavailable.</p>
            </aside>
        )
    }

    return (
        <>
            <aside className="portfolio-about">
                <div className="about-header">
                    <h3 className="about-title">About</h3>
                    <button type="button" className="btn btn-ghost" onClick={() => setShowEdit(true)}>
                        Edit
                    </button>
                </div>
                <dl className="about-fields">
                    <div className="about-field">
                        <dt>Primary owner</dt>
                        <dd>
                            <UserChip user={portfolio.owner} />
                        </dd>
                    </div>
                    <div className="about-field">
                        <dt>Due date</dt>
                        <dd>{portfolio.due_date || '—'}</dd>
                    </div>
                </dl>
                <div className="about-description">
                    {portfolio.description || <span className="about-placeholder">Click to add portfolio description…</span>}
                </div>

                <div className="about-members">
                    <h4 className="about-members-title">Share / Members</h4>
                    {membersLoading ? (
                        <p className="about-empty">Loading members…</p>
                    ) : (
                        <MembersEditor
                            title=""
                            hint="People with access to this portfolio. Multiple owners are allowed."
                            members={members}
                            liveMode
                            disabled={busy}
                            onAdd={async (entry) => {
                                await addMember.mutateAsync({ user_id: entry.user_id, role: entry.role })
                                onUpdated?.(portfolio)
                            }}
                            onRoleChange={async (member, role) => {
                                if (!member?.sys_id) return
                                await updateMember.mutateAsync({ memberId: member.sys_id, role })
                                onUpdated?.(portfolio)
                            }}
                            onRemove={async (member) => {
                                if (!member?.sys_id) return
                                await removeMember.mutateAsync(member.sys_id)
                                onUpdated?.(portfolio)
                            }}
                        />
                    )}
                </div>
            </aside>
            {showEdit && (
                <PortfolioForm
                    mode="edit"
                    portfolio={{ ...portfolio, members }}
                    onClose={() => setShowEdit(false)}
                    onSaved={(updated) => {
                        onUpdated?.(updated)
                        setShowEdit(false)
                    }}
                />
            )}
        </>
    )
}
