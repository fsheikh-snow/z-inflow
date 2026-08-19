import '@servicenow/sdk/global'
import { Table, ReferenceColumn } from '@servicenow/sdk/core'

export const x_gzi_z_ppm_workspace_team = Table({
    name: 'x_gzi_z_ppm_workspace_team',
    label: 'Workspace Team',
    allowWebServiceAccess: true,
    createAccessControls: true,
    index: [
        {
            name: 'workspace_team_unique',
            unique: true,
            element: ['workspace_id', 'group_id'],
        },
    ],
    schema: {
        workspace_id: ReferenceColumn({
            label: 'Workspace',
            referenceTable: 'x_gzi_z_ppm_workspace',
            mandatory: true,
            primary: true,
            cascadeRule: 'delete',
        }),
        group_id: ReferenceColumn({
            label: 'Team',
            referenceTable: 'sys_user_group',
            mandatory: true,
            primary: true,
            cascadeRule: 'delete',
        }),
    },
})
