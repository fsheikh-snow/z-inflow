import React, { useEffect, useRef, useState } from 'react'
import { useUserSearch } from '../../services/hooks'
import UserChip from '../shared/UserChip'
import './fields.css'

function formatUserLabel(user) {
    const name = user.name || user.user_name || 'Unknown'
    if (user.email) {
        return `${name} — ${user.email}`
    }
    if (user.user_name && user.name) {
        return `${name} (${user.user_name})`
    }
    return name
}

export default function UserPicker({ value, selectedUser, onChange, placeholder = 'Search users…', id, clearLabel = 'Clear user' }) {
    const [query, setQuery] = useState('')
    const [open, setOpen] = useState(false)
    const containerRef = useRef(null)
    const { data: results = [], isFetching, isError, error } = useUserSearch(query)

    useEffect(() => {
        function handleClickOutside(event) {
            if (containerRef.current && !containerRef.current.contains(event.target)) {
                setOpen(false)
            }
        }
        document.addEventListener('mousedown', handleClickOutside)
        return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [])

    const handleSelect = (user) => {
        onChange(user.sys_id, user)
        setQuery('')
        setOpen(false)
    }

    const handleClear = () => {
        onChange('', null)
        setQuery('')
    }

    return (
        <div className="user-picker" ref={containerRef}>
            {value && selectedUser ? (
                <div className="user-picker-selected">
                    <UserChip user={selectedUser} showEmail />
                    <button type="button" className="user-picker-clear" onClick={handleClear} aria-label={clearLabel}>
                        ×
                    </button>
                </div>
            ) : (
                <>
                    <input
                        id={id}
                        type="text"
                        className="user-picker-input"
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
                        <ul className="user-picker-results" role="listbox">
                            {isFetching && <li className="user-picker-status">Searching…</li>}
                            {!isFetching && isError && (
                                <li className="user-picker-status">
                                    Search failed{error?.message ? `: ${error.message}` : ''}
                                </li>
                            )}
                            {!isFetching && !isError && results.length === 0 && (
                                <li className="user-picker-status">No users found</li>
                            )}
                            {!isError &&
                                results.map((user) => (
                                    <li key={user.sys_id}>
                                        <button
                                            type="button"
                                            className="user-picker-option"
                                            onClick={() => handleSelect(user)}
                                        >
                                            <span className="user-picker-option-main">{formatUserLabel(user)}</span>
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
