import '@servicenow/sdk/global'
import { RestApi } from '@servicenow/sdk/core'
import {
    listPortfolios,
    getPortfolioViews,
    getPortfolioViewData,
    getPortfolioTimeline,
    getPortfolioDashboard,
    getPortfolioProgress,
    getPortfolioWorkload,
    linkPortfolioProject,
    unlinkPortfolioProject,
    getProjectPortfolios,
} from '../../server/rest/portfolio-routes'
import {
    listProjects,
    getProjectSections,
    getProjectBoard,
    getProjectTasks,
    getTask,
    getTaskProjects,
} from '../../server/rest/project-routes'
import {
    getView,
    listCustomFields,
    listCustomFieldValues,
    upsertCustomFieldValues,
} from '../../server/rest/view-routes'
import {
    listCapacityPlans,
    getCapacityPlanGrid,
    getCapacityPlanAllocations,
    searchUsers,
    getTeamMembers,
} from '../../server/rest/capacity-routes'

RestApi({
    $id: Now.ID['z-inflow-rest-api'],
    name: 'Z-Inflow REST API',
    serviceId: 'v1',
    namespace: 'x_gzi_z_ppm',
    consumes: 'application/json',
    produces: 'application/json',
    shortDescription: 'Scoped REST API for Z-Inflow portfolio, project, capacity, and identity operations',
    routes: [
        { $id: Now.ID['route-portfolios-get'], name: 'List Portfolios', method: 'GET', path: '/portfolios', script: listPortfolios },
        { $id: Now.ID['route-portfolio-views-get'], name: 'Portfolio Views', method: 'GET', path: '/portfolios/{id}/views', script: getPortfolioViews },
        { $id: Now.ID['route-portfolio-view-data-get'], name: 'Portfolio View Data', method: 'GET', path: '/portfolios/{id}/views/{viewId}/data', script: getPortfolioViewData },
        { $id: Now.ID['route-portfolio-timeline-get'], name: 'Portfolio Timeline', method: 'GET', path: '/portfolios/{id}/timeline', script: getPortfolioTimeline },
        { $id: Now.ID['route-portfolio-dashboard-get'], name: 'Portfolio Dashboard', method: 'GET', path: '/portfolios/{id}/dashboard', script: getPortfolioDashboard },
        { $id: Now.ID['route-portfolio-progress-get'], name: 'Portfolio Progress', method: 'GET', path: '/portfolios/{id}/progress', script: getPortfolioProgress },
        { $id: Now.ID['route-portfolio-workload-get'], name: 'Portfolio Workload', method: 'GET', path: '/portfolios/{id}/workload', script: getPortfolioWorkload },
        { $id: Now.ID['route-portfolio-projects-post'], name: 'Link Portfolio Project', method: 'POST', path: '/portfolios/{id}/projects', script: linkPortfolioProject },
        { $id: Now.ID['route-portfolio-projects-delete'], name: 'Unlink Portfolio Project', method: 'DELETE', path: '/portfolios/{id}/projects', script: unlinkPortfolioProject },
        { $id: Now.ID['route-project-portfolios-get'], name: 'Project Portfolios', method: 'GET', path: '/projects/{id}/portfolios', script: getProjectPortfolios },
        { $id: Now.ID['route-projects-get'], name: 'List Projects', method: 'GET', path: '/projects', script: listProjects },
        { $id: Now.ID['route-project-sections-get'], name: 'Project Sections', method: 'GET', path: '/projects/{id}/sections', script: getProjectSections },
        { $id: Now.ID['route-project-board-get'], name: 'Project Board', method: 'GET', path: '/projects/{id}/board', script: getProjectBoard },
        { $id: Now.ID['route-project-tasks-get'], name: 'Project Tasks', method: 'GET', path: '/projects/{id}/tasks', script: getProjectTasks },
        { $id: Now.ID['route-task-get'], name: 'Get Task', method: 'GET', path: '/tasks/{id}', script: getTask },
        { $id: Now.ID['route-task-projects-get'], name: 'Task Projects', method: 'GET', path: '/tasks/{id}/projects', script: getTaskProjects },
        { $id: Now.ID['route-view-get'], name: 'Get View', method: 'GET', path: '/views/{id}', script: getView },
        { $id: Now.ID['route-custom-fields-get'], name: 'List Custom Fields', method: 'GET', path: '/custom-fields', script: listCustomFields },
        { $id: Now.ID['route-custom-field-values-get'], name: 'List Custom Field Values', method: 'GET', path: '/custom-fields/values', script: listCustomFieldValues },
        { $id: Now.ID['route-custom-field-values-post'], name: 'Upsert Custom Field Values', method: 'POST', path: '/custom-fields/values', script: upsertCustomFieldValues },
        { $id: Now.ID['route-capacity-plans-get'], name: 'List Capacity Plans', method: 'GET', path: '/capacity/plans', script: listCapacityPlans },
        { $id: Now.ID['route-capacity-plan-grid-get'], name: 'Capacity Plan Grid', method: 'GET', path: '/capacity/plans/{id}/grid', script: getCapacityPlanGrid },
        { $id: Now.ID['route-capacity-plan-allocations-get'], name: 'Capacity Plan Allocations', method: 'GET', path: '/capacity/plans/{id}/allocations', script: getCapacityPlanAllocations },
        { $id: Now.ID['route-users-search-get'], name: 'Search Users', method: 'GET', path: '/users/search', script: searchUsers },
        { $id: Now.ID['route-team-members-get'], name: 'Team Members', method: 'GET', path: '/teams/{id}/members', script: getTeamMembers },
    ],
})
