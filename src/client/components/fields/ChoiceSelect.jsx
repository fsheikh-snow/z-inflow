import React from 'react'
import './fields.css'

export default function ChoiceSelect({ id, value, onChange, choices = [], placeholder, disabled }) {
    return (
        <select
            id={id}
            className="field-control"
            value={value ?? ''}
            onChange={(e) => onChange(e.target.value)}
            disabled={disabled}
        >
            {placeholder && (
                <option value="" disabled>
                    {placeholder}
                </option>
            )}
            {choices.map((choice) => (
                <option key={choice.value || 'none'} value={choice.value}>
                    {choice.label}
                </option>
            ))}
        </select>
    )
}
