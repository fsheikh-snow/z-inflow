import '@servicenow/sdk/global'
import { ScriptInclude } from '@servicenow/sdk/core'

export const AccessService = ScriptInclude({
    $id: Now.ID['access-service'],
    name: 'AccessService',
    script: Now.include('../../server/script-includes/AccessService.server.js'),
    description: 'Project and portfolio access checks via PROJECT_MEMBER / PORTFOLIO_MEMBER roles',
    accessibleFrom: 'package_private',
})

export const MemberService = ScriptInclude({
    $id: Now.ID['member-service'],
    name: 'MemberService',
    script: Now.include('../../server/script-includes/MemberService.server.js'),
    description: 'Project and portfolio member CRUD with role sync to owner_id',
    accessibleFrom: 'package_private',
})

export const UserService = ScriptInclude({
    $id: Now.ID['user-service'],
    name: 'UserService',
    script: Now.include('../../server/script-includes/UserService.server.js'),
    description: 'Batched sys_user and sys_user_grmember reads',
    accessibleFrom: 'package_private',
})

export const ViewDataService = ScriptInclude({
    $id: Now.ID['view-data-service'],
    name: 'ViewDataService',
    script: Now.include('../../server/script-includes/ViewDataService.server.js'),
    description: 'Custom view and EAV pivot data for portfolio and project grids',
    accessibleFrom: 'package_private',
})

export const PortfolioService = ScriptInclude({
    $id: Now.ID['portfolio-service'],
    name: 'PortfolioService',
    script: Now.include('../../server/script-includes/PortfolioService.server.js'),
    description: 'Portfolio list, timeline, dashboard, progress, workload, and project linking',
    accessibleFrom: 'package_private',
})

export const ProjectTaskService = ScriptInclude({
    $id: Now.ID['project-task-service'],
    name: 'ProjectTaskService',
    script: Now.include('../../server/script-includes/ProjectTaskService.server.js'),
    description: 'Project sections, board, tasks, and multi-home queries',
    accessibleFrom: 'package_private',
})

export const CapacityService = ScriptInclude({
    $id: Now.ID['capacity-service'],
    name: 'CapacityService',
    script: Now.include('../../server/script-includes/CapacityService.server.js'),
    description: 'Capacity plan grid and allocation aggregation',
    accessibleFrom: 'package_private',
})
