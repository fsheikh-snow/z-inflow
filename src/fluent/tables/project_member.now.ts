import '@servicenow/sdk/global'
import { Table, ReferenceColumn, ChoiceColumn } from '@servicenow/sdk/core'

export const x_gzi_zscaler_ppm_project_member = Table({
    name: 'x_gzi_zscaler_ppm_project_member',
    label: 'Project Member',
    allowWebServiceAccess: true,
    createAccessControls: true,
    index: [
        {
            name: 'project_member_unique',
            unique: true,
            element: ['project_id', 'user_id'],
        },
    ],
    schema: {
        project_id: ReferenceColumn({
            label: 'Project',
            referenceTable: 'x_gzi_zscaler_ppm_project',
            mandatory: true,
            cascadeRule: 'delete',
        }),
        user_id: ReferenceColumn({
            label: 'User',
            referenceTable: 'sys_user',
            mandatory: true,
            cascadeRule: 'delete',
        }),
        role: ChoiceColumn({
            label: 'Role',
            mandatory: true,
            dropdown: 'dropdown_without_none',
            choices: {
                owner: 'Owner',
                editor: 'Editor',
                commenter: 'Commenter',
                viewer: 'Viewer',
            },
        }),
    },
})
