import '@servicenow/sdk/global'
import { Table, ReferenceColumn, IntegerColumn, DateTimeColumn } from '@servicenow/sdk/core'

export const x_gzi_zflow_portfolio_project = Table({
    name: 'x_gzi_zflow_portfolio_project',
    label: 'Portfolio Project',
    allowWebServiceAccess: true,
    createAccessControls: true,
    index: [
        {
            name: 'portfolio_project_unique',
            unique: true,
            element: ['portfolio_id', 'project_id'],
        },
        {
            name: 'index',
            unique: false,
            element: 'added_by',
        },
    ],
    schema: {
        portfolio_id: ReferenceColumn({
            label: 'Portfolio',
            referenceTable: 'x_gzi_zflow_portfolio',
            mandatory: true,
            primary: true,
            cascadeRule: 'delete',
            maxLength: 32,
        }),
        project_id: ReferenceColumn({
            label: 'Project',
            referenceTable: 'x_gzi_zflow_project',
            mandatory: true,
            primary: true,
            cascadeRule: 'delete',
            maxLength: 32,
        }),
        order_index: IntegerColumn({ label: 'Order Index', default: 0, maxLength: 40 }),
        added_by: ReferenceColumn({
            label: 'Added By',
            referenceTable: 'sys_user',
            cascadeRule: 'none',
            maxLength: 32,
        }),
        added_at: DateTimeColumn({ label: 'Added At', maxLength: 40 }),
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
})
