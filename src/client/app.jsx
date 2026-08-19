import React from 'react'
import QueryProvider from './providers/QueryProvider'
import AppRoutes from './routes'
import './app.css'

export default function App() {
    return (
        <QueryProvider>
            <AppRoutes />
        </QueryProvider>
    )
}
