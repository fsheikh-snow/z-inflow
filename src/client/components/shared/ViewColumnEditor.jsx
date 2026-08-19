import React, { useState } from 'react'
import '../rules/rules.css'

const AVAILABLE_COLUMNS = [
    { key: 'name', label: 'Name' },
    { key: 'priority', label: 'Priority' },
    { key: 'owner', label: 'Owner' },
    { key: 'status', label: 'Status' },
    { key: 'due_date', label: 'Due date' },
    { key: 'start_date', label: 'Start date' },
    { key: 'programs', label: 'Programs' },
    { key: 'scope_status', label: 'Scope status' },
    { key: 'capacity', label: 'Capacity' },
]

export default function ViewColumnEditor({ columns = [], onSave, onClose }) {
    const [selected, setSelected] = useState(columns.map((c) => c.key || c))

    const toggleColumn = (key) => {
        setSelected((prev) => (prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key]))
    }

    const moveColumn = (index, direction) => {
        const next = [...selected]
        const target = index + direction
        if (target < 0 || target >= next.length) return
        ;[next[index], next[target]] = [next[target], next[index]]
        setSelected(next)
    }

    return (
        <div className="view-column-editor">
            <div className="view-column-header">
                <h3>Customize columns</h3>
                {onClose && (
                    <button type="button" className="view-column-close" onClick={onClose}>
                        ×
                    </button>
                )}
            </div>

            <div className="view-column-body">
                <div className="view-column-available">
                    <h4>Available</h4>
                    {AVAILABLE_COLUMNS.filter((c) => !selected.includes(c.key)).map((col) => (
                        <button key={col.key} type="button" className="view-column-item" onClick={() => toggleColumn(col.key)}>
                            + {col.label}
                        </button>
                    ))}
                </div>

                <div className="view-column-selected">
                    <h4>Visible columns</h4>
                    {selected.map((key, index) => {
                        const col = AVAILABLE_COLUMNS.find((c) => c.key === key)
                        return (
                            <div key={key} className="view-column-selected-item">
                                <span>{col?.label || key}</span>
                                <div className="view-column-move">
                                    <button type="button" onClick={() => moveColumn(index, -1)} disabled={index === 0}>
                                        ↑
                                    </button>
                                    <button type="button" onClick={() => moveColumn(index, 1)} disabled={index === selected.length - 1}>
                                        ↓
                                    </button>
                                    <button type="button" onClick={() => toggleColumn(key)}>
                                        ×
                                    </button>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>

            <div className="view-column-footer">
                <button type="button" className="btn btn-primary" onClick={() => onSave?.(selected)}>
                    Save view
                </button>
            </div>
        </div>
    )
}
