import { getPathParam, getQueryParam, projectTaskService, sendError, sendJson } from './helpers'

export function listProjects(request: any, response: any) {
    const svc = projectTaskService()
    const workspaceId = getQueryParam(request, 'workspace_id')
    sendJson(response, svc.listProjects(workspaceId))
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
