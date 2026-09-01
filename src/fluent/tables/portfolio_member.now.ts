import '@servicenow/sdk/global'
import { Table, ReferenceColumn, ChoiceColumn } from '@servicenow/sdk/core'

export const x_gzi_zscaler_ppm_portfolio_member = Table({
    name: 'x_gzi_zscaler_ppm_portfolio_member',
    label: 'Portfolio Member',
    allowWebServiceAccess: true,
    createAccessControls: true,
    index: [
        {
            name: 'portfolio_member_unique',
            unique: true,
            element: ['portfolio_id', 'user_id'],
        },
    ],
    schema: {
        portfolio_id: ReferenceColumn({
            label: 'Portfolio',
            referenceTable: 'x_gzi_zscaler_ppm_portfolio',
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
