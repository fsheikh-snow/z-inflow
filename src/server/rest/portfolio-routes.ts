import { getPathParam, getQueryParam, parseBody, portfolioService, safeList, sendError, sendJson, viewDataService } from './helpers'

export function listPortfolios(request: any, response: any) {
    safeList(response, 'listPortfolios', function () {
        const svc = portfolioService()
        const workspaceId = getQueryParam(request, 'workspace_id')
        return svc.listPortfolios(workspaceId)
    })
}

export function createPortfolio(request: any, response: any) {
    const body = parseBody(request)
    const svc = portfolioService()
    const portfolio = svc.createPortfolio(body)
    if (!portfolio) {
        sendError(response, 'Unable to create portfolio. Name is required, and a workspace must be resolvable.', 400)
        return
    }
    sendJson(response, portfolio, 201)
}

export function updatePortfolio(request: any, response: any) {
    const portfolioId = getPathParam(request, 'id')
    const body = parseBody(request)
    const svc = portfolioService()
    const portfolio = svc.updatePortfolio(portfolioId, body)
    if (!portfolio) {
        sendError(response, 'Portfolio not found', 404)
        return
    }
    sendJson(response, portfolio)
}

export function getPortfolio(request: any, response: any) {
    const portfolioId = getPathParam(request, 'id')
    const svc = portfolioService()
    const portfolio = svc.getPortfolio(portfolioId)
    if (!portfolio) {
        sendError(response, 'Portfolio not found', 404)
        return
    }
    sendJson(response, portfolio)
}

export function getPortfolioViews(request: any, response: any) {
    const portfolioId = getPathParam(request, 'id')
    const viewSvc = viewDataService()
    sendJson(response, viewSvc.getPortfolioViews(portfolioId))
}

export function getPortfolioViewData(request: any, response: any) {
    const portfolioId = getPathParam(request, 'id')
    const viewId = getPathParam(request, 'viewId')
    const viewSvc = viewDataService()
    const data = viewSvc.getPortfolioViewData(portfolioId, viewId)
    if (!data) {
        sendError(response, 'View not found', 404)
        return
    }
    sendJson(response, data)
}

export function getPortfolioTimeline(request: any, response: any) {
    const portfolioId = getPathParam(request, 'id')
    const svc = portfolioService()
    sendJson(response, svc.getTimeline(portfolioId))
}

export function getPortfolioDashboard(request: any, response: any) {
    const portfolioId = getPathParam(request, 'id')
    const svc = portfolioService()
    sendJson(response, svc.getDashboard(portfolioId))
}

export function getPortfolioProgress(request: any, response: any) {
    const portfolioId = getPathParam(request, 'id')
    const svc = portfolioService()
    const data = svc.getProgress(portfolioId)
    if (!data) {
        sendError(response, 'Portfolio not found', 404)
        return
    }
    sendJson(response, data)
}

export function getPortfolioWorkload(request: any, response: any) {
    const portfolioId = getPathParam(request, 'id')
    const svc = portfolioService()
    sendJson(response, svc.getWorkload(portfolioId))
}

export function linkPortfolioProject(request: any, response: any) {
    const portfolioId = getPathParam(request, 'id')
    const body = parseBody(request)
    const projectId = String(body.project_id || '')
    if (!projectId) {
        sendError(response, 'project_id is required', 400)
        return
    }
    const svc = portfolioService()
    sendJson(response, { sys_id: svc.linkProject(portfolioId, projectId) }, 201)
}

export function unlinkPortfolioProject(request: any, response: any) {
    const portfolioId = getPathParam(request, 'id')
    const projectId = getPathParam(request, 'projectId') || getQueryParam(request, 'project_id')
    if (!projectId) {
        sendError(response, 'project_id is required', 400)
        return
    }
    const svc = portfolioService()
    sendJson(response, { removed: svc.unlinkProject(portfolioId, projectId) })
}

export function getProjectPortfolios(request: any, response: any) {
    const projectId = getPathParam(request, 'id')
    const svc = portfolioService()
    sendJson(response, svc.getProjectPortfolios(projectId))
}
