import React, { useRef, useMemo } from 'react'
import { useVirtualizer } from '@tanstack/react-virtual'
import TimelineHeader from './TimelineHeader'
import './gantt.css'

const PRIORITY_COLORS = {
    high: '#ef4444',
    strategic: '#8b5cf6',
    medium: '#f59e0b',
    low: '#22c55e',
    default: '#6366f1',
}

const ROW_HEIGHT = 36
const LABEL_WIDTH = 220
const BAR_HEIGHT = 20

function parseDate(value) {
    if (!value) return null
    const d = new Date(value)
    return Number.isNaN(d.getTime()) ? null : d
}

function daysBetween(a, b) {
    return Math.round((b - a) / (1000 * 60 * 60 * 24))
}

export default function VirtualizedGantt({ mode = 'project', items = [], startDate, endDate, loading, onBarClick, onDateChange }) {
    const scrollRef = useRef(null)

    const range = useMemo(() => {
        const start = parseDate(startDate) || new Date()
        const end = parseDate(endDate) || new Date(start.getTime() + 90 * 86400000)
        const totalDays = Math.max(daysBetween(start, end), 1)
        const dayWidth = 24
        return { start, end, totalDays, dayWidth, chartWidth: totalDays * dayWidth }
    }, [startDate, endDate])

    const rowVirtualizer = useVirtualizer({
        count: items.length,
        getScrollElement: () => scrollRef.current,
        estimateSize: () => ROW_HEIGHT,
        overscan: 8,
    })

    if (loading) {
        return <div className="gantt-loading">Loading timeline…</div>
    }

    return (
        <div className="virtualized-gantt">
            <TimelineHeader startDate={range.start} endDate={range.end} dayWidth={range.dayWidth} labelWidth={LABEL_WIDTH} />
            <div className="gantt-body" ref={scrollRef}>
                <div style={{ height: rowVirtualizer.getTotalSize(), position: 'relative', minWidth: LABEL_WIDTH + range.chartWidth }}>
                    {rowVirtualizer.getVirtualItems().map((virtualRow) => {
                        const item = items[virtualRow.index]
                        const itemStart = parseDate(item.start_date) || range.start
                        const itemEnd = parseDate(item.due_date || item.end_date) || itemStart
                        const offsetDays = Math.max(daysBetween(range.start, itemStart), 0)
                        const durationDays = Math.max(daysBetween(itemStart, itemEnd), 1)
                        const color = PRIORITY_COLORS[item.priority?.toLowerCase()] || PRIORITY_COLORS.default

                        return (
                            <div
                                key={item.sys_id || virtualRow.index}
                                className="gantt-row"
                                style={{ transform: `translateY(${virtualRow.start}px)`, height: ROW_HEIGHT }}
                            >
                                <div className="gantt-label" style={{ width: LABEL_WIDTH }}>
                                    {mode === 'project' && item.project_key && (
                                        <span className="gantt-key">({item.project_key}) </span>
                                    )}
                                    {item.name}
                                </div>
                                <div className="gantt-chart" style={{ width: range.chartWidth }}>
                                    <svg width={range.chartWidth} height={ROW_HEIGHT}>
                                        <rect
                                            x={offsetDays * range.dayWidth}
                                            y={(ROW_HEIGHT - BAR_HEIGHT) / 2}
                                            width={durationDays * range.dayWidth}
                                            height={BAR_HEIGHT}
                                            rx={4}
                                            fill={color}
                                            className="gantt-bar"
                                            onClick={() => onBarClick?.(item)}
                                            role="button"
                                            tabIndex={0}
                                        />
                                        {mode === 'task' && item.dependencies?.map((dep) => {
                                            const depItem = items.find((i) => i.sys_id === dep.target_id)
                                            if (!depItem) return null
                                            const depEnd = parseDate(depItem.due_date) || range.start
                                            const x1 = offsetDays * range.dayWidth
                                            const x2 = Math.max(daysBetween(range.start, depEnd), 0) * range.dayWidth
                                            const y = ROW_HEIGHT / 2
                                            return (
                                                <line
                                                    key={dep.sys_id}
                                                    x1={x2}
                                                    y1={y}
                                                    x2={x1}
                                                    y2={y}
                                                    stroke="#94a3b8"
                                                    strokeWidth={1}
                                                    markerEnd="url(#arrow)"
                                                />
                                            )
                                        })}
                                    </svg>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
