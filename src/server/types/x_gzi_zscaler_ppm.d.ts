declare module '@servicenow/glide/x_gzi_zscaler_ppm' {
    export class AccessService {
        canReadProject(projectId: string, userId?: string): boolean
        canWriteProject(projectId: string, userId?: string): boolean
        canManageProject(projectId: string, userId?: string): boolean
        canReadPortfolio(portfolioId: string, userId?: string): boolean
        canWritePortfolio(portfolioId: string, userId?: string): boolean
        canManagePortfolio(portfolioId: string, userId?: string): boolean
    }

    export class MemberService {
        listMembers(entityType: string, entityId: string): unknown[]
        getMember(entityType: string, memberId: string): Record<string, unknown> | null
        addMember(entityType: string, entityId: string, data: Record<string, unknown>): Record<string, unknown> | null
        updateMember(entityType: string, memberId: string, data: Record<string, unknown>): Record<string, unknown> | null
        removeMember(entityType: string, memberId: string): boolean
        setMembers(entityType: string, entityId: string, members: unknown[]): unknown[]
        seedMembers(entityType: string, entityId: string, data: Record<string, unknown>): unknown[]
    }

    export class UserService {
        searchUsers(query: string, limit?: string | number): unknown[]
        searchGroups(query: string, limit?: string | number): unknown[]
        getTeamMembers(groupId: string): unknown[]
        getUsersByIds(userIds: string[]): Record<string, unknown>
        getGroupsByIds(groupIds: string[]): Record<string, unknown>
    }

    export class ViewDataService {
        getView(viewId: string): Record<string, unknown> | null
        updateView(viewId: string, data: Record<string, unknown>): Record<string, unknown> | null
        getPortfolioViews(portfolioId: string): unknown[]
        getPortfolioViewData(portfolioId: string, viewId: string): Record<string, unknown> | null
    }

    export class PortfolioService {
        listPortfolios(workspaceId?: string): unknown[]
        getPortfolio(portfolioId: string): Record<string, unknown> | null
        createPortfolio(data: Record<string, unknown>): Record<string, unknown> | null
        updatePortfolio(portfolioId: string, data: Record<string, unknown>): Record<string, unknown> | null
        getTimeline(portfolioId: string): Record<string, unknown>
        getDashboard(portfolioId: string): {
            total_projects: number
            on_track: number
            at_risk: number
            off_track: number
            status_breakdown: Array<{ name: string; value: number }>
            priority_breakdown: Array<{ name: string; value: number }>
        }
        getProgress(portfolioId: string): {
            portfolio: Record<string, unknown>
            status_updates: Array<Record<string, unknown>>
            on_track: number
            at_risk: number
            total: number
        } | null
        getWorkload(portfolioId: string): {
            people: Array<{ sys_id: string; name: string; tasks: Record<string, number> }>
            days: string[]
        }
        linkProject(portfolioId: string, projectId: string): string
        unlinkProject(portfolioId: string, projectId: string): boolean
        getProjectPortfolios(projectId: string): unknown[]
    }

    export class ProjectTaskService {
        listProjects(workspaceId?: string): unknown[]
        getProject(projectId: string): Record<string, unknown> | null
        createProject(data: Record<string, unknown>): Record<string, unknown> | null
        updateProject(projectId: string, data: Record<string, unknown>): Record<string, unknown> | null
        createTask(projectId: string, data: Record<string, unknown>): Record<string, unknown> | null
        getProjectSections(projectId: string): unknown[]
        createSection(projectId: string, data: Record<string, unknown>): Record<string, unknown> | null
        updateSection(projectId: string, sectionId: string, data: Record<string, unknown>): Record<string, unknown> | null
        deleteSection(projectId: string, sectionId: string): boolean
        reorderSections(projectId: string, sectionIds: string[]): unknown[]
        reorderTaskList(projectId: string, payload: Record<string, unknown>): Record<string, unknown>
        getProjectBoard(projectId: string): Record<string, unknown>
        getProjectTasks(projectId: string): unknown[]
        getTask(taskId: string, projectId?: string): Record<string, unknown> | null
        getTaskProjects(taskId: string): unknown[]
        updateTask(taskId: string, data: Record<string, unknown>): Record<string, unknown> | null
        reorderBoard(projectId: string, columnId: string, taskIds: string[]): Record<string, unknown>
    }

    export class CapacityService {
        listPlans(workspaceId?: string): unknown[]
        getPlan(planId: string): Record<string, unknown> | null
        getPlanGrid(planId: string): Record<string, unknown> | null
        getPlanAllocations(planId: string): unknown[] | null
        updateAllocation(planId: string, allocationId: string, data: Record<string, unknown>): Record<string, unknown> | null
    }
}
