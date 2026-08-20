export {}

declare global {
    namespace x_gzi_zflow {
        class AccessService {
            canReadProject(projectId: string, userId?: string): boolean
            canWriteProject(projectId: string, userId?: string): boolean
            canManageProject(projectId: string, userId?: string): boolean
            canReadPortfolio(portfolioId: string, userId?: string): boolean
        }

        class UserService {
            searchUsers(query: string, limit?: string | number): unknown[]
            getTeamMembers(groupId: string): unknown[]
            getUsersByIds(userIds: string[]): Record<string, unknown>
        }

        class ViewDataService {
            getView(viewId: string): Record<string, unknown> | null
            getPortfolioViews(portfolioId: string): unknown[]
            getPortfolioViewData(portfolioId: string, viewId: string): Record<string, unknown> | null
        }

        class PortfolioService {
            listPortfolios(workspaceId?: string): unknown[]
            getPortfolio(portfolioId: string): Record<string, unknown> | null
            getTimeline(portfolioId: string): Record<string, unknown>
            getDashboard(portfolioId: string): Record<string, unknown>
            getProgress(portfolioId: string): Record<string, unknown> | null
            getWorkload(portfolioId: string): Record<string, unknown>
            linkProject(portfolioId: string, projectId: string): string
            unlinkProject(portfolioId: string, projectId: string): boolean
            getProjectPortfolios(projectId: string): unknown[]
        }

        class ProjectTaskService {
            listProjects(workspaceId?: string): unknown[]
            getProjectSections(projectId: string): unknown[]
            getProjectBoard(projectId: string): Record<string, unknown>
            getProjectTasks(projectId: string): unknown[]
            getTask(taskId: string): Record<string, unknown> | null
            getTaskProjects(taskId: string): unknown[]
        }

        class CapacityService {
            listPlans(workspaceId?: string): unknown[]
            getPlanGrid(planId: string): Record<string, unknown> | null
            getPlanAllocations(planId: string): unknown[] | null
        }
    }
}
