import '@servicenow/sdk/global'
import { Table, ReferenceColumn } from '@servicenow/sdk/core'

export const x_gzi_zflow_workspace_user = Table({
    name: 'x_gzi_zflow_workspace_user',
    label: 'Workspace User',
    allowWebServiceAccess: true,
    createAccessControls: true,
    index: [
        {
            name: 'workspace_user_unique',
            unique: true,
            element: ['workspace_id', 'user_id'],
        },
    ],
    schema: {
        workspace_id: ReferenceColumn({
            label: 'Workspace',
            referenceTable: 'x_gzi_zflow_workspace',
            mandatory: true,
            primary: true,
            cascadeRule: 'delete',
        }),
        user_id: ReferenceColumn({
            label: 'User',
            referenceTable: 'sys_user',
            mandatory: true,
            primary: true,
            cascadeRule: 'delete',
        }),
    },
})
