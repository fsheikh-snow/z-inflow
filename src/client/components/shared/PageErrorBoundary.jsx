import React, { Component } from 'react'

export function errorText(error) {
    if (error == null) {
        return 'Unknown error'
    }
    if (typeof error === 'string') {
        return error
    }
    const message = error.message
    if (typeof message === 'string' && message) {
        return message
    }
    if (message != null && typeof message !== 'object') {
        return String(message)
    }
    try {
        return JSON.stringify(error)
    } catch {
        return String(error)
    }
}

/** Page-level: keep sidebar mounted when a route crashes. */
export default class PageErrorBoundary extends Component {
    constructor(props) {
        super(props)
        this.state = { error: null }
    }

    static getDerivedStateFromError(error) {
        return { error }
    }

    componentDidUpdate(prevProps) {
        if (prevProps.resetKey !== this.props.resetKey && this.state.error) {
            this.setState({ error: null })
        }
    }

    render() {
        if (this.state.error) {
            return (
                <div className="empty-state">
                    <p>This view failed to load: {errorText(this.state.error)}</p>
                    <button type="button" className="sidebar-link sidebar-link-action" onClick={() => this.setState({ error: null })}>
                        Try again
                    </button>
                </div>
            )
        }
        return this.props.children
    }
}
