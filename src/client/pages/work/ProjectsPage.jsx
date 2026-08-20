import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import TopBar from '../../layout/TopBar'
import BreadcrumbBar from '../../layout/BreadcrumbBar'
import ProjectForm from '../../components/project/ProjectForm'
import { useProjects } from '../../services/hooks'
import { PROJECT_STATUS_CHOICES, PROJECT_PRIORITY_CHOICES } from '../../constants/fieldChoices'

function choiceLabel(choices, value) {
    if (!value) return '—'
    const match = choices.find((c) => c.value === value)
    return match ? match.label : value
}

export default function ProjectsPage() {
    const navigate = useNavigate()
    const { data: projects = [], isLoading, isError, error } = useProjects()
    const [showCreate, setShowCreate] = useState(false)
    const defaultWorkspaceId = projects[0]?.workspace_id

    return (
        <>
            <TopBar
                title="Projects"
                actions={
                    <button type="button" className="btn btn-primary" onClick={() => setShowCreate(true)}>
                        + New project
                    </button>
                }
            />
            <BreadcrumbBar crumbs={[{ label: 'Projects' }]} />
            <div className="page-content">
                {isLoading && <div className="empty-state"><p>Loading projects…</p></div>}
                {isError && (
                    <div className="empty-state">
                        <p>Could not load projects{error?.message ? `: ${error.message}` : ''}</p>
                    </div>
                )}
                {!isLoading && !isError && projects.length === 0 && (
                    <div className="empty-state">
                        <p>No projects yet.</p>
                        <button type="button" className="btn btn-primary" onClick={() => setShowCreate(true)}>
                            + New project
                        </button>
                    </div>
                )}
                {!isLoading && !isError && projects.length > 0 && (
                    <div className="projects-list">
                        <table className="projects-table">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Key</th>
                                    <th>Status</th>
                                    <th>Priority</th>
                                    <th>Due</th>
                                </tr>
                            </thead>
                            <tbody>
                                {projects.map((project) => (
                                    <tr
                                        key={project.sys_id}
                                        className="projects-table-row"
                                        onClick={() => navigate(`/projects/${project.sys_id}`)}
                                    >
                                        <td>{project.name}</td>
                                        <td>{project.project_key || '—'}</td>
                                        <td>{choiceLabel(PROJECT_STATUS_CHOICES, project.status)}</td>
                                        <td>{choiceLabel(PROJECT_PRIORITY_CHOICES, project.priority)}</td>
                                        <td>{project.due_date || '—'}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
            {showCreate && (
                <ProjectForm
                    mode="create"
                    workspaceId={defaultWorkspaceId}
                    onClose={() => setShowCreate(false)}
                    onSaved={(project) => {
                        setShowCreate(false)
                        if (project?.sys_id) navigate(`/projects/${project.sys_id}`)
                    }}
                />
            )}
        </>
    )
}
