import {
    getPathParam,
    memberService,
    parseBody,
    safeList,
    sendError,
    sendJson,
} from './helpers.ts'

export function listProjectMembers(request: any, response: any) {
    const projectId = getPathParam(request, 'id')
    safeList(response, 'listProjectMembers', function () {
        return memberService().listMembers('project', projectId)
    })
}

export function addProjectMember(request: any, response: any) {
    const projectId = getPathParam(request, 'id')
    const body = parseBody(request)
    const member = memberService().addMember('project', projectId, body)
    if (!member) {
        sendError(response, 'Unable to add project member. user_id is required.', 400)
        return
    }
    sendJson(response, member, 201)
}

export function updateProjectMember(request: any, response: any) {
    const memberId = getPathParam(request, 'memberId')
    const body = parseBody(request)
    const member = memberService().updateMember('project', memberId, body)
    if (!member) {
        sendError(response, 'Project member not found', 404)
        return
    }
    sendJson(response, member)
}

export function removeProjectMember(request: any, response: any) {
    const memberId = getPathParam(request, 'memberId')
    const removed = memberService().removeMember('project', memberId)
    if (!removed) {
        sendError(response, 'Project member not found', 404)
        return
    }
    sendJson(response, { removed: true })
}

export function listPortfolioMembers(request: any, response: any) {
    const portfolioId = getPathParam(request, 'id')
    safeList(response, 'listPortfolioMembers', function () {
        return memberService().listMembers('portfolio', portfolioId)
    })
}

export function addPortfolioMember(request: any, response: any) {
    const portfolioId = getPathParam(request, 'id')
    const body = parseBody(request)
    const member = memberService().addMember('portfolio', portfolioId, body)
    if (!member) {
        sendError(response, 'Unable to add portfolio member. user_id is required.', 400)
        return
    }
    sendJson(response, member, 201)
}

export function updatePortfolioMember(request: any, response: any) {
    const memberId = getPathParam(request, 'memberId')
    const body = parseBody(request)
    const member = memberService().updateMember('portfolio', memberId, body)
    if (!member) {
        sendError(response, 'Portfolio member not found', 404)
        return
    }
    sendJson(response, member)
}

export function removePortfolioMember(request: any, response: any) {
    const memberId = getPathParam(request, 'memberId')
    const removed = memberService().removeMember('portfolio', memberId)
    if (!removed) {
        sendError(response, 'Portfolio member not found', 404)
        return
    }
    sendJson(response, { removed: true })
}
