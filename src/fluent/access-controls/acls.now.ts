import '@servicenow/sdk/global'
import { Acl, Role } from '@servicenow/sdk/core'

export const ppmUserRole = Role({
    name: 'x_gzi_zscaler_ppm.user',
    description: 'Z-Inflow PM workspace user',
    grantable: true,
})

export const ppmAdminRole = Role({
    name: 'x_gzi_zscaler_ppm.admin',
    description: 'Z-Inflow PM workspace administrator',
    scopedAdmin: true,
    grantable: true,
})

Acl({
    $id: Now.ID['acl-workspace-read'],
    type: 'record',
    table: 'x_gzi_zscaler_ppm_workspace',
    operation: 'read',
    securityAttribute: 'user_is_authenticated',
    adminOverrides: true,
    description: 'Allow authenticated read on x_gzi_zscaler_ppm_workspace',
})

Acl({
    $id: Now.ID['acl-workspace-create'],
    type: 'record',
    table: 'x_gzi_zscaler_ppm_workspace',
    operation: 'create',
    securityAttribute: 'user_is_authenticated',
    adminOverrides: true,
    description: 'Allow authenticated create on x_gzi_zscaler_ppm_workspace',
})

Acl({
    $id: Now.ID['acl-workspace-write'],
    type: 'record',
    table: 'x_gzi_zscaler_ppm_workspace',
    operation: 'write',
    securityAttribute: 'user_is_authenticated',
    adminOverrides: true,
    description: 'Allow authenticated write on x_gzi_zscaler_ppm_workspace',
})

Acl({
    $id: Now.ID['acl-workspace-delete'],
    type: 'record',
    table: 'x_gzi_zscaler_ppm_workspace',
    operation: 'delete',
    securityAttribute: 'user_is_authenticated',
    adminOverrides: true,
    description: 'Allow authenticated delete on x_gzi_zscaler_ppm_workspace',
})

Acl({
    $id: Now.ID['acl-portfolio-read'],
    type: 'record',
    table: 'x_gzi_zscaler_ppm_portfolio',
    operation: 'read',
    securityAttribute: 'user_is_authenticated',
    adminOverrides: true,
    description: 'Allow authenticated read on x_gzi_zscaler_ppm_portfolio',
})

Acl({
    $id: Now.ID['acl-portfolio-create'],
    type: 'record',
    table: 'x_gzi_zscaler_ppm_portfolio',
    operation: 'create',
    securityAttribute: 'user_is_authenticated',
    adminOverrides: true,
    description: 'Allow authenticated create on x_gzi_zscaler_ppm_portfolio',
})

Acl({
    $id: Now.ID['acl-portfolio-write'],
    type: 'record',
    table: 'x_gzi_zscaler_ppm_portfolio',
    operation: 'write',
    securityAttribute: 'user_is_authenticated',
    adminOverrides: true,
    description: 'Allow authenticated write on x_gzi_zscaler_ppm_portfolio',
})

Acl({
    $id: Now.ID['acl-portfolio-delete'],
    type: 'record',
    table: 'x_gzi_zscaler_ppm_portfolio',
    operation: 'delete',
    securityAttribute: 'user_is_authenticated',
    adminOverrides: true,
    description: 'Allow authenticated delete on x_gzi_zscaler_ppm_portfolio',
})

Acl({
    $id: Now.ID['acl-project-read'],
    type: 'record',
    table: 'x_gzi_zscaler_ppm_project',
    operation: 'read',
    securityAttribute: 'user_is_authenticated',
    adminOverrides: true,
    description: 'Allow authenticated read on x_gzi_zscaler_ppm_project',
})

Acl({
    $id: Now.ID['acl-project-create'],
    type: 'record',
    table: 'x_gzi_zscaler_ppm_project',
    operation: 'create',
    securityAttribute: 'user_is_authenticated',
    adminOverrides: true,
    description: 'Allow authenticated create on x_gzi_zscaler_ppm_project',
})

Acl({
    $id: Now.ID['acl-project-write'],
    type: 'record',
    table: 'x_gzi_zscaler_ppm_project',
    operation: 'write',
    securityAttribute: 'user_is_authenticated',
    adminOverrides: true,
    description: 'Allow authenticated write on x_gzi_zscaler_ppm_project',
})

Acl({
    $id: Now.ID['acl-project-delete'],
    type: 'record',
    table: 'x_gzi_zscaler_ppm_project',
    operation: 'delete',
    securityAttribute: 'user_is_authenticated',
    adminOverrides: true,
    description: 'Allow authenticated delete on x_gzi_zscaler_ppm_project',
})

Acl({
    $id: Now.ID['acl-task-read'],
    type: 'record',
    table: 'x_gzi_zscaler_ppm_task',
    operation: 'read',
    securityAttribute: 'user_is_authenticated',
    adminOverrides: true,
    description: 'Allow authenticated read on x_gzi_zscaler_ppm_task',
})

Acl({
    $id: Now.ID['acl-task-create'],
    type: 'record',
    table: 'x_gzi_zscaler_ppm_task',
    operation: 'create',
    securityAttribute: 'user_is_authenticated',
    adminOverrides: true,
    description: 'Allow authenticated create on x_gzi_zscaler_ppm_task',
})

Acl({
    $id: Now.ID['acl-task-write'],
    type: 'record',
    table: 'x_gzi_zscaler_ppm_task',
    operation: 'write',
    securityAttribute: 'user_is_authenticated',
    adminOverrides: true,
    description: 'Allow authenticated write on x_gzi_zscaler_ppm_task',
})

Acl({
    $id: Now.ID['acl-task-delete'],
    type: 'record',
    table: 'x_gzi_zscaler_ppm_task',
    operation: 'delete',
    securityAttribute: 'user_is_authenticated',
    adminOverrides: true,
    description: 'Allow authenticated delete on x_gzi_zscaler_ppm_task',
})

Acl({
    $id: Now.ID['acl-section-read'],
    type: 'record',
    table: 'x_gzi_zscaler_ppm_section',
    operation: 'read',
    securityAttribute: 'user_is_authenticated',
    adminOverrides: true,
    description: 'Allow authenticated read on x_gzi_zscaler_ppm_section',
})

Acl({
    $id: Now.ID['acl-section-create'],
    type: 'record',
    table: 'x_gzi_zscaler_ppm_section',
    operation: 'create',
    securityAttribute: 'user_is_authenticated',
    adminOverrides: true,
    description: 'Allow authenticated create on x_gzi_zscaler_ppm_section',
})

Acl({
    $id: Now.ID['acl-section-write'],
    type: 'record',
    table: 'x_gzi_zscaler_ppm_section',
    operation: 'write',
    securityAttribute: 'user_is_authenticated',
    adminOverrides: true,
    description: 'Allow authenticated write on x_gzi_zscaler_ppm_section',
})

Acl({
    $id: Now.ID['acl-section-delete'],
    type: 'record',
    table: 'x_gzi_zscaler_ppm_section',
    operation: 'delete',
    securityAttribute: 'user_is_authenticated',
    adminOverrides: true,
    description: 'Allow authenticated delete on x_gzi_zscaler_ppm_section',
})

Acl({
    $id: Now.ID['acl-portfolio_project-read'],
    type: 'record',
    table: 'x_gzi_zscaler_ppm_portfolio_project',
    operation: 'read',
    securityAttribute: 'user_is_authenticated',
    adminOverrides: true,
    description: 'Allow authenticated read on x_gzi_zscaler_ppm_portfolio_project',
})

Acl({
    $id: Now.ID['acl-portfolio_project-create'],
    type: 'record',
    table: 'x_gzi_zscaler_ppm_portfolio_project',
    operation: 'create',
    securityAttribute: 'user_is_authenticated',
    adminOverrides: true,
    description: 'Allow authenticated create on x_gzi_zscaler_ppm_portfolio_project',
})

Acl({
    $id: Now.ID['acl-portfolio_project-write'],
    type: 'record',
    table: 'x_gzi_zscaler_ppm_portfolio_project',
    operation: 'write',
    securityAttribute: 'user_is_authenticated',
    adminOverrides: true,
    description: 'Allow authenticated write on x_gzi_zscaler_ppm_portfolio_project',
})

Acl({
    $id: Now.ID['acl-portfolio_project-delete'],
    type: 'record',
    table: 'x_gzi_zscaler_ppm_portfolio_project',
    operation: 'delete',
    securityAttribute: 'user_is_authenticated',
    adminOverrides: true,
    description: 'Allow authenticated delete on x_gzi_zscaler_ppm_portfolio_project',
})

Acl({
    $id: Now.ID['acl-project_task-read'],
    type: 'record',
    table: 'x_gzi_zscaler_ppm_project_task',
    operation: 'read',
    securityAttribute: 'user_is_authenticated',
    adminOverrides: true,
    description: 'Allow authenticated read on x_gzi_zscaler_ppm_project_task',
})

Acl({
    $id: Now.ID['acl-project_task-create'],
    type: 'record',
    table: 'x_gzi_zscaler_ppm_project_task',
    operation: 'create',
    securityAttribute: 'user_is_authenticated',
    adminOverrides: true,
    description: 'Allow authenticated create on x_gzi_zscaler_ppm_project_task',
})

Acl({
    $id: Now.ID['acl-project_task-write'],
    type: 'record',
    table: 'x_gzi_zscaler_ppm_project_task',
    operation: 'write',
    securityAttribute: 'user_is_authenticated',
    adminOverrides: true,
    description: 'Allow authenticated write on x_gzi_zscaler_ppm_project_task',
})

Acl({
    $id: Now.ID['acl-project_task-delete'],
    type: 'record',
    table: 'x_gzi_zscaler_ppm_project_task',
    operation: 'delete',
    securityAttribute: 'user_is_authenticated',
    adminOverrides: true,
    description: 'Allow authenticated delete on x_gzi_zscaler_ppm_project_task',
})

Acl({
    $id: Now.ID['acl-portfolio_member-read'],
    type: 'record',
    table: 'x_gzi_zscaler_ppm_portfolio_member',
    operation: 'read',
    securityAttribute: 'user_is_authenticated',
    adminOverrides: true,
    description: 'Allow authenticated read on x_gzi_zscaler_ppm_portfolio_member',
})

Acl({
    $id: Now.ID['acl-portfolio_member-create'],
    type: 'record',
    table: 'x_gzi_zscaler_ppm_portfolio_member',
    operation: 'create',
    securityAttribute: 'user_is_authenticated',
    adminOverrides: true,
    description: 'Allow authenticated create on x_gzi_zscaler_ppm_portfolio_member',
})

Acl({
    $id: Now.ID['acl-portfolio_member-write'],
    type: 'record',
    table: 'x_gzi_zscaler_ppm_portfolio_member',
    operation: 'write',
    securityAttribute: 'user_is_authenticated',
    adminOverrides: true,
    description: 'Allow authenticated write on x_gzi_zscaler_ppm_portfolio_member',
})

Acl({
    $id: Now.ID['acl-portfolio_member-delete'],
    type: 'record',
    table: 'x_gzi_zscaler_ppm_portfolio_member',
    operation: 'delete',
    securityAttribute: 'user_is_authenticated',
    adminOverrides: true,
    description: 'Allow authenticated delete on x_gzi_zscaler_ppm_portfolio_member',
})

Acl({
    $id: Now.ID['acl-project_member-read'],
    type: 'record',
    table: 'x_gzi_zscaler_ppm_project_member',
    operation: 'read',
    securityAttribute: 'user_is_authenticated',
    adminOverrides: true,
    description: 'Allow authenticated read on x_gzi_zscaler_ppm_project_member',
})

Acl({
    $id: Now.ID['acl-project_member-create'],
    type: 'record',
    table: 'x_gzi_zscaler_ppm_project_member',
    operation: 'create',
    securityAttribute: 'user_is_authenticated',
    adminOverrides: true,
    description: 'Allow authenticated create on x_gzi_zscaler_ppm_project_member',
})

Acl({
    $id: Now.ID['acl-project_member-write'],
    type: 'record',
    table: 'x_gzi_zscaler_ppm_project_member',
    operation: 'write',
    securityAttribute: 'user_is_authenticated',
    adminOverrides: true,
    description: 'Allow authenticated write on x_gzi_zscaler_ppm_project_member',
})

Acl({
    $id: Now.ID['acl-project_member-delete'],
    type: 'record',
    table: 'x_gzi_zscaler_ppm_project_member',
    operation: 'delete',
    securityAttribute: 'user_is_authenticated',
    adminOverrides: true,
    description: 'Allow authenticated delete on x_gzi_zscaler_ppm_project_member',
})

Acl({
    $id: Now.ID['acl-custom_view-read'],
    type: 'record',
    table: 'x_gzi_zscaler_ppm_custom_view',
    operation: 'read',
    securityAttribute: 'user_is_authenticated',
    adminOverrides: true,
    description: 'Allow authenticated read on x_gzi_zscaler_ppm_custom_view',
})

Acl({
    $id: Now.ID['acl-custom_view-create'],
    type: 'record',
    table: 'x_gzi_zscaler_ppm_custom_view',
    operation: 'create',
    securityAttribute: 'user_is_authenticated',
    adminOverrides: true,
    description: 'Allow authenticated create on x_gzi_zscaler_ppm_custom_view',
})

Acl({
    $id: Now.ID['acl-custom_view-write'],
    type: 'record',
    table: 'x_gzi_zscaler_ppm_custom_view',
    operation: 'write',
    securityAttribute: 'user_is_authenticated',
    adminOverrides: true,
    description: 'Allow authenticated write on x_gzi_zscaler_ppm_custom_view',
})

Acl({
    $id: Now.ID['acl-custom_view-delete'],
    type: 'record',
    table: 'x_gzi_zscaler_ppm_custom_view',
    operation: 'delete',
    securityAttribute: 'user_is_authenticated',
    adminOverrides: true,
    description: 'Allow authenticated delete on x_gzi_zscaler_ppm_custom_view',
})

Acl({
    $id: Now.ID['acl-custom_view_column-read'],
    type: 'record',
    table: 'x_gzi_zscaler_ppm_custom_view_column',
    operation: 'read',
    securityAttribute: 'user_is_authenticated',
    adminOverrides: true,
    description: 'Allow authenticated read on x_gzi_zscaler_ppm_custom_view_column',
})

Acl({
    $id: Now.ID['acl-custom_view_column-create'],
    type: 'record',
    table: 'x_gzi_zscaler_ppm_custom_view_column',
    operation: 'create',
    securityAttribute: 'user_is_authenticated',
    adminOverrides: true,
    description: 'Allow authenticated create on x_gzi_zscaler_ppm_custom_view_column',
})

Acl({
    $id: Now.ID['acl-custom_view_column-write'],
    type: 'record',
    table: 'x_gzi_zscaler_ppm_custom_view_column',
    operation: 'write',
    securityAttribute: 'user_is_authenticated',
    adminOverrides: true,
    description: 'Allow authenticated write on x_gzi_zscaler_ppm_custom_view_column',
})

Acl({
    $id: Now.ID['acl-custom_view_column-delete'],
    type: 'record',
    table: 'x_gzi_zscaler_ppm_custom_view_column',
    operation: 'delete',
    securityAttribute: 'user_is_authenticated',
    adminOverrides: true,
    description: 'Allow authenticated delete on x_gzi_zscaler_ppm_custom_view_column',
})

Acl({
    $id: Now.ID['acl-custom_field_def-read'],
    type: 'record',
    table: 'x_gzi_zscaler_ppm_custom_field_def',
    operation: 'read',
    securityAttribute: 'user_is_authenticated',
    adminOverrides: true,
    description: 'Allow authenticated read on x_gzi_zscaler_ppm_custom_field_def',
})

Acl({
    $id: Now.ID['acl-custom_field_def-create'],
    type: 'record',
    table: 'x_gzi_zscaler_ppm_custom_field_def',
    operation: 'create',
    securityAttribute: 'user_is_authenticated',
    adminOverrides: true,
    description: 'Allow authenticated create on x_gzi_zscaler_ppm_custom_field_def',
})

Acl({
    $id: Now.ID['acl-custom_field_def-write'],
    type: 'record',
    table: 'x_gzi_zscaler_ppm_custom_field_def',
    operation: 'write',
    securityAttribute: 'user_is_authenticated',
    adminOverrides: true,
    description: 'Allow authenticated write on x_gzi_zscaler_ppm_custom_field_def',
})

Acl({
    $id: Now.ID['acl-custom_field_def-delete'],
    type: 'record',
    table: 'x_gzi_zscaler_ppm_custom_field_def',
    operation: 'delete',
    securityAttribute: 'user_is_authenticated',
    adminOverrides: true,
    description: 'Allow authenticated delete on x_gzi_zscaler_ppm_custom_field_def',
})

Acl({
    $id: Now.ID['acl-custom_field_setting-read'],
    type: 'record',
    table: 'x_gzi_zscaler_ppm_custom_field_setting',
    operation: 'read',
    securityAttribute: 'user_is_authenticated',
    adminOverrides: true,
    description: 'Allow authenticated read on x_gzi_zscaler_ppm_custom_field_setting',
})

Acl({
    $id: Now.ID['acl-custom_field_setting-create'],
    type: 'record',
    table: 'x_gzi_zscaler_ppm_custom_field_setting',
    operation: 'create',
    securityAttribute: 'user_is_authenticated',
    adminOverrides: true,
    description: 'Allow authenticated create on x_gzi_zscaler_ppm_custom_field_setting',
})

Acl({
    $id: Now.ID['acl-custom_field_setting-write'],
    type: 'record',
    table: 'x_gzi_zscaler_ppm_custom_field_setting',
    operation: 'write',
    securityAttribute: 'user_is_authenticated',
    adminOverrides: true,
    description: 'Allow authenticated write on x_gzi_zscaler_ppm_custom_field_setting',
})

Acl({
    $id: Now.ID['acl-custom_field_setting-delete'],
    type: 'record',
    table: 'x_gzi_zscaler_ppm_custom_field_setting',
    operation: 'delete',
    securityAttribute: 'user_is_authenticated',
    adminOverrides: true,
    description: 'Allow authenticated delete on x_gzi_zscaler_ppm_custom_field_setting',
})

Acl({
    $id: Now.ID['acl-custom_field_value-read'],
    type: 'record',
    table: 'x_gzi_zscaler_ppm_custom_field_value',
    operation: 'read',
    securityAttribute: 'user_is_authenticated',
    adminOverrides: true,
    description: 'Allow authenticated read on x_gzi_zscaler_ppm_custom_field_value',
})

Acl({
    $id: Now.ID['acl-custom_field_value-create'],
    type: 'record',
    table: 'x_gzi_zscaler_ppm_custom_field_value',
    operation: 'create',
    securityAttribute: 'user_is_authenticated',
    adminOverrides: true,
    description: 'Allow authenticated create on x_gzi_zscaler_ppm_custom_field_value',
})

Acl({
    $id: Now.ID['acl-custom_field_value-write'],
    type: 'record',
    table: 'x_gzi_zscaler_ppm_custom_field_value',
    operation: 'write',
    securityAttribute: 'user_is_authenticated',
    adminOverrides: true,
    description: 'Allow authenticated write on x_gzi_zscaler_ppm_custom_field_value',
})

Acl({
    $id: Now.ID['acl-custom_field_value-delete'],
    type: 'record',
    table: 'x_gzi_zscaler_ppm_custom_field_value',
    operation: 'delete',
    securityAttribute: 'user_is_authenticated',
    adminOverrides: true,
    description: 'Allow authenticated delete on x_gzi_zscaler_ppm_custom_field_value',
})

Acl({
    $id: Now.ID['acl-capacity_plan-read'],
    type: 'record',
    table: 'x_gzi_zscaler_ppm_capacity_plan',
    operation: 'read',
    securityAttribute: 'user_is_authenticated',
    adminOverrides: true,
    description: 'Allow authenticated read on x_gzi_zscaler_ppm_capacity_plan',
})

Acl({
    $id: Now.ID['acl-capacity_plan-create'],
    type: 'record',
    table: 'x_gzi_zscaler_ppm_capacity_plan',
    operation: 'create',
    securityAttribute: 'user_is_authenticated',
    adminOverrides: true,
    description: 'Allow authenticated create on x_gzi_zscaler_ppm_capacity_plan',
})

Acl({
    $id: Now.ID['acl-capacity_plan-write'],
    type: 'record',
    table: 'x_gzi_zscaler_ppm_capacity_plan',
    operation: 'write',
    securityAttribute: 'user_is_authenticated',
    adminOverrides: true,
    description: 'Allow authenticated write on x_gzi_zscaler_ppm_capacity_plan',
})

Acl({
    $id: Now.ID['acl-capacity_plan-delete'],
    type: 'record',
    table: 'x_gzi_zscaler_ppm_capacity_plan',
    operation: 'delete',
    securityAttribute: 'user_is_authenticated',
    adminOverrides: true,
    description: 'Allow authenticated delete on x_gzi_zscaler_ppm_capacity_plan',
})

Acl({
    $id: Now.ID['acl-goal-read'],
    type: 'record',
    table: 'x_gzi_zscaler_ppm_goal',
    operation: 'read',
    securityAttribute: 'user_is_authenticated',
    adminOverrides: true,
    description: 'Allow authenticated read on x_gzi_zscaler_ppm_goal',
})

Acl({
    $id: Now.ID['acl-goal-create'],
    type: 'record',
    table: 'x_gzi_zscaler_ppm_goal',
    operation: 'create',
    securityAttribute: 'user_is_authenticated',
    adminOverrides: true,
    description: 'Allow authenticated create on x_gzi_zscaler_ppm_goal',
})

Acl({
    $id: Now.ID['acl-goal-write'],
    type: 'record',
    table: 'x_gzi_zscaler_ppm_goal',
    operation: 'write',
    securityAttribute: 'user_is_authenticated',
    adminOverrides: true,
    description: 'Allow authenticated write on x_gzi_zscaler_ppm_goal',
})

Acl({
    $id: Now.ID['acl-goal-delete'],
    type: 'record',
    table: 'x_gzi_zscaler_ppm_goal',
    operation: 'delete',
    securityAttribute: 'user_is_authenticated',
    adminOverrides: true,
    description: 'Allow authenticated delete on x_gzi_zscaler_ppm_goal',
})

Acl({
    $id: Now.ID['acl-resource_role-read'],
    type: 'record',
    table: 'x_gzi_zscaler_ppm_resource_role',
    operation: 'read',
    securityAttribute: 'user_is_authenticated',
    adminOverrides: true,
    description: 'Allow authenticated read on x_gzi_zscaler_ppm_resource_role',
})

Acl({
    $id: Now.ID['acl-resource_role-create'],
    type: 'record',
    table: 'x_gzi_zscaler_ppm_resource_role',
    operation: 'create',
    securityAttribute: 'user_is_authenticated',
    adminOverrides: true,
    description: 'Allow authenticated create on x_gzi_zscaler_ppm_resource_role',
})

Acl({
    $id: Now.ID['acl-resource_role-write'],
    type: 'record',
    table: 'x_gzi_zscaler_ppm_resource_role',
    operation: 'write',
    securityAttribute: 'user_is_authenticated',
    adminOverrides: true,
    description: 'Allow authenticated write on x_gzi_zscaler_ppm_resource_role',
})

Acl({
    $id: Now.ID['acl-resource_role-delete'],
    type: 'record',
    table: 'x_gzi_zscaler_ppm_resource_role',
    operation: 'delete',
    securityAttribute: 'user_is_authenticated',
    adminOverrides: true,
    description: 'Allow authenticated delete on x_gzi_zscaler_ppm_resource_role',
})

Acl({
    $id: Now.ID['acl-status_update-read'],
    type: 'record',
    table: 'x_gzi_zscaler_ppm_status_update',
    operation: 'read',
    securityAttribute: 'user_is_authenticated',
    adminOverrides: true,
    description: 'Allow authenticated read on x_gzi_zscaler_ppm_status_update',
})

Acl({
    $id: Now.ID['acl-status_update-create'],
    type: 'record',
    table: 'x_gzi_zscaler_ppm_status_update',
    operation: 'create',
    securityAttribute: 'user_is_authenticated',
    adminOverrides: true,
    description: 'Allow authenticated create on x_gzi_zscaler_ppm_status_update',
})

Acl({
    $id: Now.ID['acl-status_update-write'],
    type: 'record',
    table: 'x_gzi_zscaler_ppm_status_update',
    operation: 'write',
    securityAttribute: 'user_is_authenticated',
    adminOverrides: true,
    description: 'Allow authenticated write on x_gzi_zscaler_ppm_status_update',
})

Acl({
    $id: Now.ID['acl-status_update-delete'],
    type: 'record',
    table: 'x_gzi_zscaler_ppm_status_update',
    operation: 'delete',
    securityAttribute: 'user_is_authenticated',
    adminOverrides: true,
    description: 'Allow authenticated delete on x_gzi_zscaler_ppm_status_update',
})

Acl({
    $id: Now.ID['acl-user_capacity-read'],
    type: 'record',
    table: 'x_gzi_zscaler_ppm_user_capacity',
    operation: 'read',
    securityAttribute: 'user_is_authenticated',
    adminOverrides: true,
    description: 'Allow authenticated read on x_gzi_zscaler_ppm_user_capacity',
})

Acl({
    $id: Now.ID['acl-user_capacity-create'],
    type: 'record',
    table: 'x_gzi_zscaler_ppm_user_capacity',
    operation: 'create',
    securityAttribute: 'user_is_authenticated',
    adminOverrides: true,
    description: 'Allow authenticated create on x_gzi_zscaler_ppm_user_capacity',
})

Acl({
    $id: Now.ID['acl-user_capacity-write'],
    type: 'record',
    table: 'x_gzi_zscaler_ppm_user_capacity',
    operation: 'write',
    securityAttribute: 'user_is_authenticated',
    adminOverrides: true,
    description: 'Allow authenticated write on x_gzi_zscaler_ppm_user_capacity',
})

Acl({
    $id: Now.ID['acl-user_capacity-delete'],
    type: 'record',
    table: 'x_gzi_zscaler_ppm_user_capacity',
    operation: 'delete',
    securityAttribute: 'user_is_authenticated',
    adminOverrides: true,
    description: 'Allow authenticated delete on x_gzi_zscaler_ppm_user_capacity',
})

Acl({
    $id: Now.ID['acl-user_resource_profile-read'],
    type: 'record',
    table: 'x_gzi_zscaler_ppm_user_resource_profile',
    operation: 'read',
    securityAttribute: 'user_is_authenticated',
    adminOverrides: true,
    description: 'Allow authenticated read on x_gzi_zscaler_ppm_user_resource_profile',
})

Acl({
    $id: Now.ID['acl-user_resource_profile-create'],
    type: 'record',
    table: 'x_gzi_zscaler_ppm_user_resource_profile',
    operation: 'create',
    securityAttribute: 'user_is_authenticated',
    adminOverrides: true,
    description: 'Allow authenticated create on x_gzi_zscaler_ppm_user_resource_profile',
})

Acl({
    $id: Now.ID['acl-user_resource_profile-write'],
    type: 'record',
    table: 'x_gzi_zscaler_ppm_user_resource_profile',
    operation: 'write',
    securityAttribute: 'user_is_authenticated',
    adminOverrides: true,
    description: 'Allow authenticated write on x_gzi_zscaler_ppm_user_resource_profile',
})

Acl({
    $id: Now.ID['acl-user_resource_profile-delete'],
    type: 'record',
    table: 'x_gzi_zscaler_ppm_user_resource_profile',
    operation: 'delete',
    securityAttribute: 'user_is_authenticated',
    adminOverrides: true,
    description: 'Allow authenticated delete on x_gzi_zscaler_ppm_user_resource_profile',
})

Acl({
    $id: Now.ID['acl-workspace_team-read'],
    type: 'record',
    table: 'x_gzi_zscaler_ppm_workspace_team',
    operation: 'read',
    securityAttribute: 'user_is_authenticated',
    adminOverrides: true,
    description: 'Allow authenticated read on x_gzi_zscaler_ppm_workspace_team',
})

Acl({
    $id: Now.ID['acl-workspace_team-create'],
    type: 'record',
    table: 'x_gzi_zscaler_ppm_workspace_team',
    operation: 'create',
    securityAttribute: 'user_is_authenticated',
    adminOverrides: true,
    description: 'Allow authenticated create on x_gzi_zscaler_ppm_workspace_team',
})

Acl({
    $id: Now.ID['acl-workspace_team-write'],
    type: 'record',
    table: 'x_gzi_zscaler_ppm_workspace_team',
    operation: 'write',
    securityAttribute: 'user_is_authenticated',
    adminOverrides: true,
    description: 'Allow authenticated write on x_gzi_zscaler_ppm_workspace_team',
})

Acl({
    $id: Now.ID['acl-workspace_team-delete'],
    type: 'record',
    table: 'x_gzi_zscaler_ppm_workspace_team',
    operation: 'delete',
    securityAttribute: 'user_is_authenticated',
    adminOverrides: true,
    description: 'Allow authenticated delete on x_gzi_zscaler_ppm_workspace_team',
})

Acl({
    $id: Now.ID['acl-workspace_user-read'],
    type: 'record',
    table: 'x_gzi_zscaler_ppm_workspace_user',
    operation: 'read',
    securityAttribute: 'user_is_authenticated',
    adminOverrides: true,
    description: 'Allow authenticated read on x_gzi_zscaler_ppm_workspace_user',
})

Acl({
    $id: Now.ID['acl-workspace_user-create'],
    type: 'record',
    table: 'x_gzi_zscaler_ppm_workspace_user',
    operation: 'create',
    securityAttribute: 'user_is_authenticated',
    adminOverrides: true,
    description: 'Allow authenticated create on x_gzi_zscaler_ppm_workspace_user',
})

Acl({
    $id: Now.ID['acl-workspace_user-write'],
    type: 'record',
    table: 'x_gzi_zscaler_ppm_workspace_user',
    operation: 'write',
    securityAttribute: 'user_is_authenticated',
    adminOverrides: true,
    description: 'Allow authenticated write on x_gzi_zscaler_ppm_workspace_user',
})

Acl({
    $id: Now.ID['acl-workspace_user-delete'],
    type: 'record',
    table: 'x_gzi_zscaler_ppm_workspace_user',
    operation: 'delete',
    securityAttribute: 'user_is_authenticated',
    adminOverrides: true,
    description: 'Allow authenticated delete on x_gzi_zscaler_ppm_workspace_user',
})

Acl({
    $id: Now.ID['acl-project_resource_allocation-read'],
    type: 'record',
    table: 'x_gzi_zscaler_ppm_project_resource_allocation',
    operation: 'read',
    securityAttribute: 'user_is_authenticated',
    adminOverrides: true,
    description: 'Allow authenticated read on x_gzi_zscaler_ppm_project_resource_allocation',
})

Acl({
    $id: Now.ID['acl-project_resource_allocation-create'],
    type: 'record',
    table: 'x_gzi_zscaler_ppm_project_resource_allocation',
    operation: 'create',
    securityAttribute: 'user_is_authenticated',
    adminOverrides: true,
    description: 'Allow authenticated create on x_gzi_zscaler_ppm_project_resource_allocation',
})

Acl({
    $id: Now.ID['acl-project_resource_allocation-write'],
    type: 'record',
    table: 'x_gzi_zscaler_ppm_project_resource_allocation',
    operation: 'write',
    securityAttribute: 'user_is_authenticated',
    adminOverrides: true,
    description: 'Allow authenticated write on x_gzi_zscaler_ppm_project_resource_allocation',
})

Acl({
    $id: Now.ID['acl-project_resource_allocation-delete'],
    type: 'record',
    table: 'x_gzi_zscaler_ppm_project_resource_allocation',
    operation: 'delete',
    securityAttribute: 'user_is_authenticated',
    adminOverrides: true,
    description: 'Allow authenticated delete on x_gzi_zscaler_ppm_project_resource_allocation',
})

Acl({
    $id: Now.ID['acl-task_dependency-read'],
    type: 'record',
    table: 'x_gzi_zscaler_ppm_task_dependency',
    operation: 'read',
    securityAttribute: 'user_is_authenticated',
    adminOverrides: true,
    description: 'Allow authenticated read on x_gzi_zscaler_ppm_task_dependency',
})

Acl({
    $id: Now.ID['acl-task_dependency-create'],
    type: 'record',
    table: 'x_gzi_zscaler_ppm_task_dependency',
    operation: 'create',
    securityAttribute: 'user_is_authenticated',
    adminOverrides: true,
    description: 'Allow authenticated create on x_gzi_zscaler_ppm_task_dependency',
})

Acl({
    $id: Now.ID['acl-task_dependency-write'],
    type: 'record',
    table: 'x_gzi_zscaler_ppm_task_dependency',
    operation: 'write',
    securityAttribute: 'user_is_authenticated',
    adminOverrides: true,
    description: 'Allow authenticated write on x_gzi_zscaler_ppm_task_dependency',
})

Acl({
    $id: Now.ID['acl-task_dependency-delete'],
    type: 'record',
    table: 'x_gzi_zscaler_ppm_task_dependency',
    operation: 'delete',
    securityAttribute: 'user_is_authenticated',
    adminOverrides: true,
    description: 'Allow authenticated delete on x_gzi_zscaler_ppm_task_dependency',
})

Acl({
    $id: Now.ID['acl-rest-api-execute'],
    type: 'rest_endpoint',
    name: 'Z-Inflow REST API',
    operation: 'execute',
    securityAttribute: 'user_is_authenticated',
    adminOverrides: true,
    description: 'Allow authenticated access to Z-Inflow REST API',
})
