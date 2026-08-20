import React, { Component } from 'react'
import QueryProvider from './providers/QueryProvider'
import AppRoutes from './routes'
import { errorText } from './components/shared/PageErrorBoundary'
import './app.css'

/** Top-level: catastrophic boot failures only. */
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
                    <p>PM Workspace failed to load: {errorText(this.state.error)}</p>
                    <button type="button" className="sidebar-link sidebar-link-action" onClick={() => window.location.reload()}>
                        Reload
                    </button>
                </div>
            )
        }
        return this.props.children
    }
}

export default function App() {
    return (
        <AppErrorBoundary>
            <QueryProvider>
                <AppRoutes />
            </QueryProvider>
        </AppErrorBoundary>
    )
}
