import React from 'react'
import './shared.css'

export default function EntityTabBar({ tabs, activeTab, onTabChange, onAddTab }) {
    return (
        <div className="entity-tab-bar">
            <div className="entity-tabs">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        type="button"
                        className={`entity-tab${activeTab === tab.id ? ' active' : ''}`}
                        onClick={() => onTabChange(tab.id)}
                    >
                        {tab.icon && <span className="entity-tab-icon">{tab.icon}</span>}
                        {tab.label}
                    </button>
                ))}
                {onAddTab && (
                    <button type="button" className="entity-tab entity-tab-add" onClick={onAddTab} title="Add view">
                        +
                    </button>
                )}
            </div>
        </div>
    )
}
