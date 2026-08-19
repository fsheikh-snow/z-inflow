import React, { useState } from 'react'
import TopBar from '../../layout/TopBar'
import BreadcrumbBar from '../../layout/BreadcrumbBar'
import { useCustomFields } from '../../services/hooks'
import '../../components/rules/rules.css'

const FIELD_TYPES = ['Text', 'Number', 'Date', 'Single select', 'Multi select', 'User', 'Formula']

export default function FieldLibraryPage() {
    const { data: fields = [], isLoading } = useCustomFields()
    const [showCreate, setShowCreate] = useState(false)

    return (
        <>
            <TopBar title="Field library" />
            <BreadcrumbBar
                crumbs={[
                    { label: 'Admin', to: '/admin/fields' },
                    { label: 'Field library' },
                ]}
            />
            <div className="page-content field-library">
            <div className="field-library-header">
                <h2>Custom fields</h2>
                <button type="button" className="btn btn-primary" onClick={() => setShowCreate(true)}>
                    + New field
                </button>
            </div>

            {isLoading ? (
                <p className="field-library-loading">Loading fields…</p>
            ) : (
                <table className="field-library-table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Type</th>
                            <th>Scope</th>
                            <th>Library</th>
                        </tr>
                    </thead>
                    <tbody>
                        {fields.length === 0 ? (
                            <tr>
                                <td colSpan={4} className="field-library-empty">
                                    No custom fields defined.
                                </td>
                            </tr>
                        ) : (
                            fields.map((field) => (
                                <tr key={field.sys_id}>
                                    <td>{field.name}</td>
                                    <td>{field.field_type}</td>
                                    <td>{field.scope || 'Workspace'}</td>
                                    <td>{field.in_library ? 'Yes' : 'No'}</td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            )}

            {showCreate && (
                <div className="field-create-modal">
                    <div className="field-create-content">
                        <h3>Create field</h3>
                        <label>
                            Name
                            <input type="text" placeholder="Field name" />
                        </label>
                        <label>
                            Type
                            <select>
                                {FIELD_TYPES.map((t) => (
                                    <option key={t} value={t}>
                                        {t}
                                    </option>
                                ))}
                            </select>
                        </label>
                        <div className="field-create-actions">
                            <button type="button" className="btn btn-ghost" onClick={() => setShowCreate(false)}>
                                Cancel
                            </button>
                            <button type="button" className="btn btn-primary">
                                Create
                            </button>
                        </div>
                    </div>
                </div>
            )}
            </div>
        </>
    )
}
