import React from 'react'
import { Link } from 'react-router-dom'
import './layout.css'

export default function BreadcrumbBar({ crumbs = [] }) {
    if (!crumbs.length) return null

    return (
        <nav className="breadcrumb-bar" aria-label="Breadcrumb">
            {crumbs.map((crumb, index) => {
                const isLast = index === crumbs.length - 1
                return (
                    <span key={crumb.label} className="breadcrumb-item">
                        {index > 0 && <span className="breadcrumb-sep">/</span>}
                        {isLast || !crumb.to ? (
                            <span className="breadcrumb-current">{crumb.label}</span>
                        ) : (
                            <Link to={crumb.to} className="breadcrumb-link">
                                {crumb.label}
                            </Link>
                        )}
                    </span>
                )
            })}
        </nav>
    )
}
