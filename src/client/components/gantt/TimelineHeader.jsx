import React, { useMemo } from 'react'
import './gantt.css'

function addDays(date, days) {
    const d = new Date(date)
    d.setDate(d.getDate() + days)
    return d
}

function formatMonth(date) {
    return date.toLocaleDateString('en-US', { month: 'short', year: '2-digit' })
}

function formatDay(date) {
    return date.getDate().toString()
}

export default function TimelineHeader({ startDate, endDate, dayWidth = 24, labelWidth = 220 }) {
    const months = useMemo(() => {
        const result = []
        let current = new Date(startDate.getFullYear(), startDate.getMonth(), 1)
        while (current <= endDate) {
            const monthStart = new Date(current)
            const monthEnd = new Date(current.getFullYear(), current.getMonth() + 1, 0)
            const visibleStart = monthStart < startDate ? startDate : monthStart
            const visibleEnd = monthEnd > endDate ? endDate : monthEnd
            const offsetDays = Math.round((visibleStart - startDate) / 86400000)
            const spanDays = Math.round((visibleEnd - visibleStart) / 86400000) + 1
            result.push({ label: formatMonth(current), offsetDays, spanDays })
            current = new Date(current.getFullYear(), current.getMonth() + 1, 1)
        }
        return result
    }, [startDate, endDate])

    const totalDays = Math.round((endDate - startDate) / 86400000) + 1
    const days = useMemo(() => {
        return Array.from({ length: totalDays }, (_, i) => addDays(startDate, i))
    }, [startDate, totalDays])

    return (
        <div className="timeline-header">
            <div className="timeline-label-spacer" style={{ width: labelWidth }} />
            <div className="timeline-scale" style={{ width: totalDays * dayWidth }}>
                <div className="timeline-months">
                    {months.map((m) => (
                        <div
                            key={m.label}
                            className="timeline-month"
                            style={{ left: m.offsetDays * dayWidth, width: m.spanDays * dayWidth }}
                        >
                            {m.label}
                        </div>
                    ))}
                </div>
                <div className="timeline-days">
                    {days.map((day, i) => (
                        <div key={i} className="timeline-day" style={{ width: dayWidth }}>
                            {day.getDay() === 1 || i === 0 ? formatDay(day) : ''}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
