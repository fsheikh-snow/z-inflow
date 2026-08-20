import React, { Component, Suspense } from 'react'
import QueryProvider from './providers/QueryProvider'
import AppRoutes from './routes'
import './app.css'

class AppErrorBoundary extends Component {
    constructor(props) {
        super(props)
        this.state = { error: null }
    }

    static getDerivedStateFromError(error) {
        return { error }
    }

    render() {
        if (this.state.error) {
            return (
                <div className="empty-state">
                    <p>PM Workspace failed to load: {this.state.error.message || String(this.state.error)}</p>
                </div>
            )
        }
        return this.props.children
    }
}

function BootFallback() {
    return (
        <div className="empty-state">
            <p>Loading workspace…</p>
        </div>
    )
}

export default function App() {
    return (
        <AppErrorBoundary>
            <QueryProvider>
                <Suspense fallback={<BootFallback />}>
                    <AppRoutes />
                </Suspense>
            </QueryProvider>
        </AppErrorBoundary>
    )
}
