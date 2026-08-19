import React, { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import AppSidebar from './AppSidebar'
import './layout.css'

function PageLoader() {
    return <div className="page-loader">Loading…</div>
}

export default function AppShell() {
    return (
        <div className="app-shell">
            <AppSidebar />
            <main className="app-main">
                <Suspense fallback={<PageLoader />}>
                    <Outlet />
                </Suspense>
            </main>
        </div>
    )
}
