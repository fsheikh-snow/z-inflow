import { Table, ChoiceColumn, ReferenceColumn } from '@servicenow/sdk/core'

export const x_gzi_ppm_portfolio_member = Table({
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
            element: 'portfolio_id',
        },
        {
            name: 'index2',
            unique: false,
            element: 'user_id',
        },
    ],
    label: 'Portfolio Member',
    name: 'x_gzi_ppm_portfolio_member',
    schema: {
        role: ChoiceColumn({
            choices: {
                viewer: {
                    label: 'Viewer',
                    sequence: 4,
                },
                owner: {
                    label: 'Owner',
                    sequence: 1,
                },
                editor: {
                    label: 'Editor',
                    sequence: 2,
                },
                commenter: {
                    label: 'Commenter',
                    sequence: 3,
                },
            },
            mandatory: true,
            maxLength: 40,
        }),
        user_id: ReferenceColumn({
            label: 'User',
            mandatory: true,
            maxLength: 32,
            referenceTable: 'sys_user',
        }),
        portfolio_id: ReferenceColumn({
            label: 'Portfolio',
            mandatory: true,
            maxLength: 32,
            referenceTable: 'x_gzi_ppm_portfolio',
        }),
    },
})
