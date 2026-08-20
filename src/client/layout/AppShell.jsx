import React, { Suspense } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import AppSidebar from './AppSidebar'
import PageErrorBoundary from '../components/shared/PageErrorBoundary'
import './layout.css'

function PageLoader() {
    return <div className="page-loader">Loading…</div>
}

export default function AppShell() {
    const location = useLocation()

    return (
        <div className="app-shell">
            <AppSidebar />
            <main className="app-main">
                <PageErrorBoundary resetKey={location.pathname}>
                    <Suspense fallback={<PageLoader />}>
                        <Outlet />
                    </Suspense>
                </PageErrorBoundary>
            </main>
        </div>
    )
}
