import React, { useState } from 'react'
import './rules.css'

const TRIGGERS = ['Task created', 'Task completed', 'Due date changed', 'Field updated']
const ACTIONS = ['Assign task', 'Move to section', 'Send notification', 'Update field']

export default function RuleBuilderCanvas({ rules = [], onSave }) {
    const [selectedRule, setSelectedRule] = useState(null)
    const [trigger, setTrigger] = useState('')
    const [action, setAction] = useState('')

    return (
        <div className="rule-builder">
            <div className="rule-builder-sidebar">
                <h3>Automations</h3>
                <button type="button" className="btn btn-primary btn-sm" onClick={() => setSelectedRule({ id: 'new' })}>
                    + New rule
                </button>
                <ul className="rule-list">
                    {rules.map((rule) => (
                        <li key={rule.sys_id}>
                            <button
                                type="button"
                                className={`rule-list-item${selectedRule?.sys_id === rule.sys_id ? ' active' : ''}`}
                                onClick={() => setSelectedRule(rule)}
                            >
                                {rule.name}
                            </button>
                        </li>
                    ))}
                    {rules.length === 0 && <li className="rule-list-empty">No rules yet</li>}
                </ul>
            </div>

            <div className="rule-builder-canvas">
                {selectedRule ? (
                    <>
                        <div className="rule-block rule-trigger">
                            <h4>When</h4>
                            <select value={trigger || selectedRule.trigger || ''} onChange={(e) => setTrigger(e.target.value)}>
                                <option value="">Select trigger…</option>
                                {TRIGGERS.map((t) => (
                                    <option key={t} value={t}>
                                        {t}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="rule-connector" />
                        <div className="rule-block rule-conditions">
                            <h4>If</h4>
                            <p className="rule-placeholder">Add conditions…</p>
                        </div>
                        <div className="rule-connector" />
                        <div className="rule-block rule-actions">
                            <h4>Then</h4>
                            <select value={action || selectedRule.action || ''} onChange={(e) => setAction(e.target.value)}>
                                <option value="">Select action…</option>
                                {ACTIONS.map((a) => (
                                    <option key={a} value={a}>
                                        {a}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="rule-builder-footer">
                            <button type="button" className="btn btn-primary" onClick={() => onSave?.({ trigger, action })}>
                                Save rule
                            </button>
                        </div>
                    </>
                ) : (
                    <div className="rule-builder-empty">Select or create a rule to begin.</div>
                )}
            </div>
        </div>
    )
}
