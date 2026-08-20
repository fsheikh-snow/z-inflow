import '@servicenow/sdk/global'
import { Table, ReferenceColumn, DecimalColumn, DateColumn } from '@servicenow/sdk/core'

export const x_gzi_zflow_proj_res_alloc = Table({
    name: 'x_gzi_zflow_proj_res_alloc',
    label: 'Project Resource Allocation',
    allowWebServiceAccess: true,
    createAccessControls: true,
    schema: {
        project_id: ReferenceColumn({
            label: 'Project',
            referenceTable: 'x_gzi_zflow_project',
            mandatory: true,
            cascadeRule: 'delete',
            maxLength: 32,
        }),
        user_id: ReferenceColumn({
            label: 'User',
            referenceTable: 'sys_user',
            mandatory: true,
            cascadeRule: 'delete',
            maxLength: 32,
        }),
        role_id: ReferenceColumn({
            label: 'Resource Role',
            referenceTable: 'x_gzi_zflow_resource_role',
            mandatory: true,
            cascadeRule: 'none',
            maxLength: 32,
        }),
        allocation_percentage: DecimalColumn({
            label: 'Allocation Percentage',
            mandatory: true,
            default: 0,
            maxLength: 20,
        }),
        start_date: DateColumn({ label: 'Start Date', maxLength: 40 }),
        end_date: DateColumn({ label: 'End Date', maxLength: 40 }),
    },
    actions: {
        read: true,
        update: false,
        delete: false,
        create: false,
    },
    allowClientScripts: false,
    allowNewFields: false,
    allowUiActions: false,
    index: [
        {
            name: 'index',
            unique: false,
            element: 'role_id',
        },
        {
            name: 'index2',
            unique: false,
            element: 'user_id',
        },
        {
            name: 'index3',
            unique: false,
            element: 'project_id',
        },
    ],
})
