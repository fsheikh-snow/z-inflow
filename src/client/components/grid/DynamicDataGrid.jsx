import React, { useRef } from 'react'
import { useVirtualizer } from '@tanstack/react-virtual'
import UserChip from '../shared/UserChip'
import TagPill from '../shared/TagPill'
import './grid.css'

const DEFAULT_COLUMNS = [
    { key: 'name', label: 'Name', width: 280 },
    { key: 'priority', label: 'Priority', width: 120 },
    { key: 'owner', label: 'Owner', width: 160 },
    { key: 'status', label: 'Status', width: 140 },
    { key: 'due_date', label: 'Due date', width: 120 },
]

function renderCell(row, column) {
    switch (column.key) {
        case 'owner':
            return <UserChip user={row.owner} size="sm" />
        case 'priority':
            return row.priority ? <TagPill label={row.priority} variant={row.priority?.toLowerCase()} /> : '—'
        case 'status':
            return row.status_label || row.status || '—'
        case 'name': {
            const key = row.project_key ? `(${row.project_key}) ` : ''
            return (
                <span className="grid-name-cell">
                    {key}
                    {row.name}
                </span>
            )
        }
        default:
            return row[column.key] ?? '—'
    }
}

export default function DynamicDataGrid({ rows = [], columns = DEFAULT_COLUMNS, groups = [], onRowClick, loading }) {
    const parentRef = useRef(null)
    const flatRows = groups.length
        ? groups.flatMap((g) => [{ _isGroup: true, label: g.label, count: g.rows?.length }, ...(g.rows || [])])
        : rows

    const virtualizer = useVirtualizer({
        count: flatRows.length,
        getScrollElement: () => parentRef.current,
        estimateSize: (index) => (flatRows[index]?._isGroup ? 36 : 44),
        overscan: 10,
    })

    if (loading) {
        return <div className="grid-loading">Loading data…</div>
    }

    const totalWidth = columns.reduce((sum, c) => sum + c.width, 0)

    return (
        <div className="dynamic-grid">
            <div className="grid-header" style={{ minWidth: totalWidth }}>
                {columns.map((col) => (
                    <div key={col.key} className="grid-header-cell" style={{ width: col.width }}>
                        {col.label}
                    </div>
                ))}
            </div>
            <div className="grid-body" ref={parentRef}>
                <div style={{ height: virtualizer.getTotalSize(), position: 'relative', minWidth: totalWidth }}>
                    {virtualizer.getVirtualItems().map((virtualRow) => {
                        const row = flatRows[virtualRow.index]
                        if (row._isGroup) {
                            return (
                                <div
                                    key={`group-${virtualRow.index}`}
                                    className="grid-group-header"
                                    style={{ transform: `translateY(${virtualRow.start}px)`, width: totalWidth }}
                                >
                                    {row.label}
                                    <span className="grid-group-count">{row.count}</span>
                                </div>
                            )
                        }
                        return (
                            <div
                                key={row.sys_id || virtualRow.index}
                                className="grid-row"
                                style={{ transform: `translateY(${virtualRow.start}px)`, width: totalWidth }}
                                onClick={() => onRowClick?.(row)}
                                role={onRowClick ? 'button' : undefined}
                                tabIndex={onRowClick ? 0 : undefined}
                            >
                                {columns.map((col) => (
                                    <div key={col.key} className="grid-cell" style={{ width: col.width }}>
                                        {renderCell(row, col)}
                                    </div>
                                ))}
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
