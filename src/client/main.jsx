import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app'

const rootElement = document.getElementById('root')
const loadingElement = document.getElementById('pm-workspace-loading')

if (rootElement) {
    try {
        // Ensure #root is empty before React takes ownership (SN may have
        // injected/moved nodes; clearing avoids removeChild conflicts).
        rootElement.innerHTML = ''

        // Hide the sibling loading placeholder once React is ready to mount.
        if (loadingElement) {
            loadingElement.remove()
        }

        // Avoid StrictMode double-mount under ServiceNow UI Pages — platform
        // DOM mutations between mounts commonly trigger removeChild errors.
        ReactDOM.createRoot(rootElement).render(<App />)
    } catch (error) {
        if (loadingElement) {
            loadingElement.remove()
        }
        rootElement.textContent = `PM Workspace failed to start: ${error?.message || error}`
    }
}
