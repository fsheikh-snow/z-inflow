import React from 'react'
import './shared.css'

export default function ViewToolbar({ onAddWork, onFilter, onSort, onGroup, onCustomize, filterCount = 0, sortCount = 0, groupCount = 0 }) {
    return (
        <div className="view-toolbar">
            <div className="view-toolbar-left">
                {onAddWork && (
                    <button type="button" className="btn btn-primary" onClick={onAddWork}>
                        + Add work
                    </button>
                )}
            </div>
            <div className="view-toolbar-right">
                {onFilter && (
                    <button type="button" className="btn btn-ghost" onClick={onFilter}>
                        Filters{filterCount > 0 && <span className="badge">{filterCount}</span>}
                    </button>
                )}
                {onSort && (
                    <button type="button" className="btn btn-ghost" onClick={onSort}>
                        Sort{sortCount > 0 && <span className="badge">{sortCount}</span>}
                    </button>
                )}
                {onGroup && (
                    <button type="button" className="btn btn-ghost" onClick={onGroup}>
                        Group{groupCount > 0 && <span className="badge">{groupCount}</span>}
                    </button>
                )}
                {onCustomize && (
                    <button type="button" className="btn btn-ghost" onClick={onCustomize}>
                        Customize
                    </button>
                )}
            </div>
        </div>
    )
}
