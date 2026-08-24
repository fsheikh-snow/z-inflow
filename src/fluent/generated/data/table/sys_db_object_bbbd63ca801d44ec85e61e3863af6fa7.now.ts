import { Table, IntegerColumn, ReferenceColumn, DateTimeColumn } from '@servicenow/sdk/core'

export const x_gzi_ppm_portfolio_project = Table({
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
            element: 'project_id',
        },
        {
            name: 'index2',
            unique: false,
            element: 'added_by',
        },
        {
            name: 'index3',
            unique: false,
            element: 'portfolio_id',
        },
    ],
    label: 'Portfolio Project',
    name: 'x_gzi_ppm_portfolio_project',
    schema: {
        order_index: IntegerColumn({
            maxLength: 40,
        }),
        added_by: ReferenceColumn({
            maxLength: 32,
            referenceTable: 'sys_user',
        }),
        project_id: ReferenceColumn({
            label: 'Project',
            mandatory: true,
            maxLength: 32,
            referenceTable: 'x_gzi_ppm_project',
        }),
        portfolio_id: ReferenceColumn({
            label: 'Portfolio',
            mandatory: true,
            maxLength: 32,
            referenceTable: 'x_gzi_ppm_portfolio',
        }),
        added_at: DateTimeColumn({
            maxLength: 40,
        }),
    },
})
