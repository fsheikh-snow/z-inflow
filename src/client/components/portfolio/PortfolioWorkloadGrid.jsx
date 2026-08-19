import React from 'react'
import './portfolio.css'

export default function PortfolioWorkloadGrid({ data, loading }) {
    if (loading) return <div className="portfolio-loading">Loading workload…</div>

    const people = data?.people || []
    const days = data?.days || []

    if (!people.length) {
        return <div className="portfolio-empty">No workload data available.</div>
    }

    return (
        <div className="workload-grid-wrapper">
            <table className="workload-grid">
                <thead>
                    <tr>
                        <th className="workload-person-col">Person</th>
                        {days.map((day) => (
                            <th key={day} className="workload-day-col">
                                {day}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {people.map((person) => (
                        <tr key={person.sys_id || person.name}>
                            <td className="workload-person-col">{person.name}</td>
                            {days.map((day) => {
                                const count = person.tasks?.[day] ?? 0
                                const heat = count === 0 ? '' : count <= 2 ? 'heat-low' : count <= 4 ? 'heat-med' : 'heat-high'
                                return (
                                    <td key={day} className={`workload-cell ${heat}`}>
                                        {count || ''}
                                    </td>
                                )
                            })}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
