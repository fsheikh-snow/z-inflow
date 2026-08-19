import React from 'react'
import './shared.css'

const COLOR_MAP = {
    high: '#ef4444',
    strategic: '#8b5cf6',
    medium: '#f59e0b',
    low: '#22c55e',
    default: '#94a3b8',
}

export default function TagPill({ label, variant = 'default' }) {
    const color = COLOR_MAP[variant] || COLOR_MAP.default
    return (
        <span className="tag-pill" style={{ background: `${color}20`, color, borderColor: `${color}40` }}>
            {label}
        </span>
    )
}
