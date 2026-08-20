import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app'

const rootElement = document.getElementById('root')
if (rootElement) {
    try {
        ReactDOM.createRoot(rootElement).render(
            <React.StrictMode>
                <App />
            </React.StrictMode>
        )
    } catch (error) {
        rootElement.textContent = `PM Workspace failed to start: ${error?.message || error}`
    }
}
