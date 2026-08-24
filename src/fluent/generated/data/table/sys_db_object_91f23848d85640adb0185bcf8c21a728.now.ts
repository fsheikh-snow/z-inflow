import { Table, ReferenceColumn, DateColumn, DecimalColumn } from '@servicenow/sdk/core'

export const x_gzi_ppm_proj_res_alloc = Table({
    actions: {
        read: true,
        update: false,
        delete: false,
        create: false,
    },
    allowClientScripts: false,
    allowNewFields: false,
    allowUiActions: false,
    allowWebServiceAccess: true,
    index: [
        {
            name: 'index',
            unique: false,
            element: 'user_id',
        },
        {
            name: 'index2',
            unique: false,
            element: 'project_id',
        },
        {
            name: 'index3',
            unique: false,
            element: 'role_id',
        },
    ],
    label: 'Project Resource Allocation',
    name: 'x_gzi_ppm_proj_res_alloc',
    schema: {
        project_id: ReferenceColumn({
            label: 'Project',
            mandatory: true,
            maxLength: 32,
            referenceTable: 'x_gzi_ppm_project',
        }),
        start_date: DateColumn({
            maxLength: 40,
        }),
        user_id: ReferenceColumn({
            label: 'User',
            mandatory: true,
            maxLength: 32,
            referenceTable: 'sys_user',
        }),
        role_id: ReferenceColumn({
            label: 'Resource Role',
            mandatory: true,
            maxLength: 32,
            referenceTable: 'x_gzi_ppm_resource_role',
        }),
        allocation_percentage: DecimalColumn({
            mandatory: true,
            maxLength: 20,
        }),
        end_date: DateColumn({
            maxLength: 40,
        }),
    },
})
