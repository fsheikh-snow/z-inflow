import React from 'react'
import './fields.css'

export function toDateInputValue(value) {
    if (!value) return ''
    const str = String(value)
    return str.length >= 10 ? str.slice(0, 10) : str
}

export default function DateField({ id, value, onChange, disabled }) {
    return (
        <input
            id={id}
            type="date"
            className="field-control"
            value={toDateInputValue(value)}
            onChange={(e) => onChange(e.target.value)}
            disabled={disabled}
        />
    )
}
