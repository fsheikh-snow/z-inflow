import '@servicenow/sdk/global'
import {
    Table,
    ReferenceColumn,
    IntegerColumn,
    DateTimeColumn,
} from '@servicenow/sdk/core'

export const x_gzi_ppm_portfolio_project = Table({
    name: 'x_gzi_ppm_portfolio_project',
    label: 'Portfolio Project',
    allowWebServiceAccess: true,
    createAccessControls: true,
    index: [
        {
            name: 'portfolio_project_unique',
            unique: true,
            element: ['portfolio_id', 'project_id'],
        },
    ],
    schema: {
        portfolio_id: ReferenceColumn({
            label: 'Portfolio',
            referenceTable: 'x_gzi_ppm_portfolio',
            mandatory: true,
            primary: true,
            cascadeRule: 'delete',
        }),
        project_id: ReferenceColumn({
            label: 'Project',
            referenceTable: 'x_gzi_ppm_project',
            mandatory: true,
            primary: true,
            cascadeRule: 'delete',
        }),
        order_index: IntegerColumn({ label: 'Order Index', default: 0 }),
        added_by: ReferenceColumn({
            label: 'Added By',
            referenceTable: 'sys_user',
            cascadeRule: 'none',
        }),
        added_at: DateTimeColumn({ label: 'Added At' }),
    },
})
