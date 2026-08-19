import React from 'react'
import { useNavigate } from 'react-router-dom'
import './layout.css'

export default function TopBar({ title, actions }) {
    const navigate = useNavigate()

    return (
        <header className="top-bar">
            <div className="top-bar-left">
                <button type="button" className="top-bar-back" onClick={() => navigate(-1)} aria-label="Go back">
                    ←
                </button>
                <h1 className="top-bar-title">{title}</h1>
            </div>
            {actions && <div className="top-bar-actions">{actions}</div>}
        </header>
    )
}
