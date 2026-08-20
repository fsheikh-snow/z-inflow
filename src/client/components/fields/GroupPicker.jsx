import React, { useEffect, useRef, useState } from 'react'
import { useGroupSearch } from '../../services/hooks'
import './fields.css'

export default function GroupPicker({ value, selectedGroup, onChange, placeholder = 'Search teams…', id, clearLabel = 'Clear team' }) {
    const [query, setQuery] = useState('')
    const [open, setOpen] = useState(false)
    const containerRef = useRef(null)
    const { data: results = [], isFetching } = useGroupSearch(query)

    useEffect(() => {
        function handleClickOutside(event) {
            if (containerRef.current && !containerRef.current.contains(event.target)) {
                setOpen(false)
            }
        }
        document.addEventListener('mousedown', handleClickOutside)
        return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [])

    const handleSelect = (group) => {
        onChange(group.sys_id, group)
        setQuery('')
        setOpen(false)
    }

    const handleClear = () => {
        onChange('', null)
        setQuery('')
    }

    const displayName = selectedGroup?.name || selectedGroup?.display_name || 'Selected team'

    return (
        <div className="group-picker" ref={containerRef}>
            {value && selectedGroup ? (
                <div className="group-picker-selected">
                    <span className="group-picker-name">{displayName}</span>
                    <button type="button" className="group-picker-clear" onClick={handleClear} aria-label={clearLabel}>
                        ×
                    </button>
                </div>
            ) : (
                <>
                    <input
                        id={id}
                        type="text"
                        className="group-picker-input"
                        value={query}
                        placeholder={placeholder}
                        onChange={(e) => {
                            setQuery(e.target.value)
                            setOpen(true)
                        }}
                        onFocus={() => setOpen(true)}
                        autoComplete="off"
                    />
                    {open && query.length >= 2 && (
                        <ul className="group-picker-results" role="listbox">
                            {isFetching && <li className="group-picker-status">Searching…</li>}
                            {!isFetching && results.length === 0 && (
                                <li className="group-picker-status">No teams found</li>
                            )}
                            {results.map((group) => (
                                <li key={group.sys_id}>
                                    <button
                                        type="button"
                                        className="group-picker-option"
                                        onClick={() => handleSelect(group)}
                                    >
                                        {group.name}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    )}
                </>
            )}
        </div>
    )
}
