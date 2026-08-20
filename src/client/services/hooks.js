import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { portfolioService } from './portfolioService'
import { projectService } from './projectService'
import { viewService } from './viewService'
import { capacityService } from './capacityService'
import { userService } from './userService'

export const queryKeys = {
    portfolios: ['portfolios'],
    portfolio: (id) => ['portfolios', id],
    portfolioViews: (id) => ['portfolios', id, 'views'],
    portfolioViewData: (id, viewId) => ['portfolios', id, 'views', viewId, 'data'],
    portfolioTimeline: (id) => ['portfolios', id, 'timeline'],
    portfolioDashboard: (id) => ['portfolios', id, 'dashboard'],
    portfolioProgress: (id) => ['portfolios', id, 'progress'],
    portfolioWorkload: (id) => ['portfolios', id, 'workload'],
    projects: ['projects'],
    project: (id) => ['projects', id],
    projectBoard: (id) => ['projects', id, 'board'],
    projectTasks: (id) => ['projects', id, 'tasks'],
    projectPortfolios: (id) => ['projects', id, 'portfolios'],
    capacityPlans: ['capacity', 'plans'],
    capacityGrid: (id) => ['capacity', 'plans', id, 'grid'],
    customFields: ['custom-fields'],
    userSearch: (q) => ['users', 'search', q],
    groupSearch: (q) => ['groups', 'search', q],
}

export function usePortfolios() {
    return useQuery({
        queryKey: queryKeys.portfolios,
        queryFn: () => portfolioService.list(),
    })
}

export function usePortfolio(id) {
    return useQuery({
        queryKey: queryKeys.portfolio(id),
        queryFn: () => portfolioService.get(id),
        enabled: Boolean(id),
    })
}

export function usePortfolioViews(portfolioId) {
    return useQuery({
        queryKey: queryKeys.portfolioViews(portfolioId),
        queryFn: () => portfolioService.getViews(portfolioId),
        enabled: Boolean(portfolioId),
    })
}

export function usePortfolioViewData(portfolioId, viewId) {
    return useQuery({
        queryKey: queryKeys.portfolioViewData(portfolioId, viewId),
        queryFn: () => portfolioService.getViewData(portfolioId, viewId),
        enabled: Boolean(portfolioId && viewId),
    })
}

export function usePortfolioTimeline(portfolioId) {
    return useQuery({
        queryKey: queryKeys.portfolioTimeline(portfolioId),
        queryFn: () => portfolioService.getTimeline(portfolioId),
        enabled: Boolean(portfolioId),
    })
}

export function usePortfolioDashboard(portfolioId) {
    return useQuery({
        queryKey: queryKeys.portfolioDashboard(portfolioId),
        queryFn: () => portfolioService.getDashboard(portfolioId),
        enabled: Boolean(portfolioId),
    })
}

export function usePortfolioProgress(portfolioId) {
    return useQuery({
        queryKey: queryKeys.portfolioProgress(portfolioId),
        queryFn: () => portfolioService.getProgress(portfolioId),
        enabled: Boolean(portfolioId),
    })
}

export function usePortfolioWorkload(portfolioId) {
    return useQuery({
        queryKey: queryKeys.portfolioWorkload(portfolioId),
        queryFn: () => portfolioService.getWorkload(portfolioId),
        enabled: Boolean(portfolioId),
    })
}

export function useProject(projectId) {
    return useQuery({
        queryKey: queryKeys.project(projectId),
        queryFn: () => projectService.get(projectId),
        enabled: Boolean(projectId),
    })
}

export function useProjects(params = {}) {
    return useQuery({
        queryKey: [...queryKeys.projects, params],
        queryFn: () => projectService.list(params),
    })
}

export function useCreateProject(portfolioId) {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: (data) => projectService.create(data),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: queryKeys.projects })
            if (portfolioId) {
                queryClient.invalidateQueries({ queryKey: queryKeys.portfolio(portfolioId) })
                queryClient.invalidateQueries({ queryKey: queryKeys.portfolioViews(portfolioId) })
                queryClient.invalidateQueries({ queryKey: queryKeys.portfolioTimeline(portfolioId) })
                queryClient.invalidateQueries({ queryKey: queryKeys.portfolioDashboard(portfolioId) })
                queryClient.invalidateQueries({ queryKey: queryKeys.portfolioProgress(portfolioId) })
                queryClient.invalidateQueries({ queryKey: queryKeys.portfolioWorkload(portfolioId) })
            }
        },
    })
}

export function useUpdateProject(projectId) {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: (data) => projectService.update(projectId, data),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: queryKeys.project(projectId) })
            queryClient.invalidateQueries({ queryKey: queryKeys.projects })
        },
    })
}

export function useCreatePortfolio() {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: (data) => portfolioService.create(data),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: queryKeys.portfolios })
        },
    })
}

export function useUpdatePortfolio(portfolioId) {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: (data) => portfolioService.update(portfolioId, data),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: queryKeys.portfolio(portfolioId) })
            queryClient.invalidateQueries({ queryKey: queryKeys.portfolios })
        },
    })
}

export function useCreateTask(projectId) {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: (data) => projectService.createTask(projectId, data),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: queryKeys.projectBoard(projectId) })
            queryClient.invalidateQueries({ queryKey: queryKeys.projectTasks(projectId) })
        },
    })
}

export function useProjectBoard(projectId) {
    return useQuery({
        queryKey: queryKeys.projectBoard(projectId),
        queryFn: () => projectService.getBoard(projectId),
        enabled: Boolean(projectId),
    })
}

export function useProjectTasks(projectId) {
    return useQuery({
        queryKey: queryKeys.projectTasks(projectId),
        queryFn: () => projectService.getTasks(projectId),
        enabled: Boolean(projectId),
    })
}

export function useReorderBoard(projectId) {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: ({ columnId, taskIds }) => projectService.reorderBoard(projectId, columnId, taskIds),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: queryKeys.projectBoard(projectId) })
        },
    })
}

export function useUpdateTask(projectId) {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: ({ taskId, data }) => projectService.updateTask(taskId, data),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: queryKeys.projectBoard(projectId) })
            queryClient.invalidateQueries({ queryKey: queryKeys.projectTasks(projectId) })
        },
    })
}

export function useCapacityPlans() {
    return useQuery({
        queryKey: queryKeys.capacityPlans,
        queryFn: () => capacityService.listPlans(),
    })
}

export function useCapacityGrid(planId) {
    return useQuery({
        queryKey: queryKeys.capacityGrid(planId),
        queryFn: () => capacityService.getGrid(planId),
        enabled: Boolean(planId),
    })
}

export function useCustomFields() {
    return useQuery({
        queryKey: queryKeys.customFields,
        queryFn: () => viewService.getCustomFields(),
    })
}

export function useUserSearch(query) {
    return useQuery({
        queryKey: queryKeys.userSearch(query),
        queryFn: () => userService.search(query),
        enabled: query.length >= 2,
    })
}

export function useGroupSearch(query) {
    return useQuery({
        queryKey: queryKeys.groupSearch(query),
        queryFn: () => userService.searchGroups(query),
        enabled: query.length >= 2,
    })
}
