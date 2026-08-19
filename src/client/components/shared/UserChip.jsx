import React from 'react'
import './shared.css'

export default function UserChip({ user, size = 'sm' }) {
    if (!user) return <span className="user-chip-empty">Unassigned</span>

    const name = user.name || user.display_name || user.user_name || 'Unknown'
    const initials = name
        .split(' ')
        .map((n) => n[0])
        .join('')
        .slice(0, 2)
        .toUpperCase()

    return (
        <span className={`user-chip user-chip-${size}`}>
            <span className="user-chip-avatar">{initials}</span>
            <span className="user-chip-name">{name}</span>
        </span>
    )
}
