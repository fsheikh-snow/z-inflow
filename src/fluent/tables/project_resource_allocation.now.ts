import '@servicenow/sdk/global'
import {
    Table,
    ReferenceColumn,
    DecimalColumn,
    DateColumn,
} from '@servicenow/sdk/core'

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
        }),
        user_id: ReferenceColumn({
            label: 'User',
            referenceTable: 'sys_user',
            mandatory: true,
            cascadeRule: 'delete',
        }),
        role_id: ReferenceColumn({
            label: 'Resource Role',
            referenceTable: 'x_gzi_zflow_resource_role',
            mandatory: true,
            cascadeRule: 'none',
        }),
        allocation_percentage: DecimalColumn({
            label: 'Allocation Percentage',
            mandatory: true,
            default: 0,
        }),
        start_date: DateColumn({ label: 'Start Date' }),
        end_date: DateColumn({ label: 'End Date' }),
    },
})
