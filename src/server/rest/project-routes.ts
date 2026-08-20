import { getPathParam, getQueryParam, parseBody, projectTaskService, safeList, sendError, sendJson } from './helpers.ts'

export function listProjects(request: any, response: any) {
    safeList(response, 'listProjects', function () {
        const svc = projectTaskService()
        const workspaceId = getQueryParam(request, 'workspace_id')
        return svc.listProjects(workspaceId)
    })
}

export function createProject(request: any, response: any) {
    try {
        const body = parseBody(request)
        const svc = projectTaskService()
        if (!svc || typeof svc.createProject !== 'function') {
            sendError(response, 'ProjectTaskService.createProject is not available on the Script Include instance.', 500)
            return
        }
        const project = svc.createProject(body)
        if (!project) {
            sendError(
                response,
                'Unable to create project. Name is required, and a workspace/team must be resolvable.',
                400
            )
            return
        }
        sendJson(response, project, 201)
    } catch (error: any) {
        sendError(response, error && error.message ? String(error.message) : String(error || 'Create project failed'), 500)
    }
}

export function updateProject(request: any, response: any) {
    const projectId = getPathParam(request, 'id')
    const body = parseBody(request)
    const svc = projectTaskService()
    const project = svc.updateProject(projectId, body)
    if (!project) {
        sendError(response, 'Project not found', 404)
        return
    }
    sendJson(response, project)
}

export function createProjectTask(request: any, response: any) {
    const projectId = getPathParam(request, 'id')
    const body = parseBody(request)
    const svc = projectTaskService()
    const task = svc.createTask(projectId, body)
    if (!task) {
        sendError(response, 'Unable to create task. Name and project are required.', 400)
        return
    }
    sendJson(response, task, 201)
}

export function getProject(request: any, response: any) {
    const projectId = getPathParam(request, 'id')
    const svc = projectTaskService()
    const project = svc.getProject(projectId)
    if (!project) {
        sendError(response, 'Project not found', 404)
        return
    }
    sendJson(response, project)
}

export function getProjectSections(request: any, response: any) {
    const projectId = getPathParam(request, 'id')
    const svc = projectTaskService()
    sendJson(response, svc.getProjectSections(projectId))
}

export function getProjectBoard(request: any, response: any) {
    const projectId = getPathParam(request, 'id')
    const svc = projectTaskService()
    sendJson(response, svc.getProjectBoard(projectId))
}

export function getProjectTasks(request: any, response: any) {
    const projectId = getPathParam(request, 'id')
    const svc = projectTaskService()
    sendJson(response, svc.getProjectTasks(projectId))
}

export function getTask(request: any, response: any) {
    const taskId = getPathParam(request, 'id')
    const svc = projectTaskService()
    const task = svc.getTask(taskId)
    if (!task) {
        sendError(response, 'Task not found', 404)
        return
    }
    sendJson(response, task)
}

export function getTaskProjects(request: any, response: any) {
    const taskId = getPathParam(request, 'id')
    const svc = projectTaskService()
    sendJson(response, svc.getTaskProjects(taskId))
}

export function updateTask(request: any, response: any) {
    const taskId = getPathParam(request, 'id')
    const body = parseBody(request)
    const svc = projectTaskService()
    const task = svc.updateTask(taskId, body)
    if (!task) {
        sendError(response, 'Task not found', 404)
        return
    }
    sendJson(response, task)
}

export function reorderBoard(request: any, response: any) {
    const projectId = getPathParam(request, 'id')
    const body = parseBody(request)
    const columnId = String(body.column_id || '')
    const taskIds = (body.task_ids as string[]) || []
    if (!columnId) {
        sendError(response, 'column_id is required', 400)
        return
    }
    const svc = projectTaskService()
    sendJson(response, svc.reorderBoard(projectId, columnId, taskIds))
}
