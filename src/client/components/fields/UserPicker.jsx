import React, { useEffect, useRef, useState } from 'react'
import { useUserSearch } from '../../services/hooks'
import UserChip from '../shared/UserChip'
import './fields.css'

export default function UserPicker({ value, selectedUser, onChange, placeholder = 'Search users…', id, clearLabel = 'Clear user' }) {
    const [query, setQuery] = useState('')
    const [open, setOpen] = useState(false)
    const containerRef = useRef(null)
    const { data: results = [], isFetching } = useUserSearch(query)

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
                    <UserChip user={selectedUser} />
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
                            {!isFetching && results.length === 0 && (
                                <li className="user-picker-status">No users found</li>
                            )}
                            {results.map((user) => (
                                <li key={user.sys_id}>
                                    <button
                                        type="button"
                                        className="user-picker-option"
                                        onClick={() => handleSelect(user)}
                                    >
                                        <UserChip user={user} />
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
