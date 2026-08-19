import React from 'react'
import TopBar from '../../layout/TopBar'
import BreadcrumbBar from '../../layout/BreadcrumbBar'

export default function MyTasksPage() {
    return (
        <>
            <TopBar title="My tasks" />
            <BreadcrumbBar crumbs={[{ label: 'My tasks' }]} />
            <div className="page-content">
                <div className="empty-state">
                    <p>Tasks assigned to you will appear here.</p>
                </div>
            </div>
        </>
    )
}
