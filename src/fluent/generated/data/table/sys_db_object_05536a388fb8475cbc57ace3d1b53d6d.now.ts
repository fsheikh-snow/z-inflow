import { Table, ReferenceColumn, JsonColumn, ChoiceColumn, StringColumn } from '@servicenow/sdk/core'

export const x_gzi_ppm_capacity_plan = Table({
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
    display: 'name',
    index: [
        {
            name: 'index',
            unique: false,
            element: 'group_id',
        },
        {
            name: 'index2',
            unique: false,
            element: 'workspace_id',
        },
        {
            name: 'index3',
            unique: false,
            element: 'portfolio_id',
        },
        {
            name: 'index4',
            unique: false,
            element: 'owner_id',
        },
    ],
    label: 'Capacity Plan',
    name: 'x_gzi_ppm_capacity_plan',
    schema: {
        portfolio_id: ReferenceColumn({
            label: 'Portfolio',
            maxLength: 32,
            referenceTable: 'x_gzi_ppm_portfolio',
        }),
        workspace_id: ReferenceColumn({
            label: 'Workspace',
            mandatory: true,
            maxLength: 32,
            referenceTable: 'x_gzi_ppm_workspace',
        }),
        group_id: ReferenceColumn({
            label: 'Group',
            maxLength: 32,
            referenceTable: 'sys_user_group',
        }),
        filter_config: JsonColumn({
            maxLength: 4000,
        }),
        time_granularity: ChoiceColumn({
            choices: {
                day: {
                    label: 'Day',
                    sequence: 1,
                },
                week: {
                    label: 'Week',
                    sequence: 2,
                },
                year: {
                    label: 'Year',
                    sequence: 5,
                },
                month: {
                    label: 'Month',
                    sequence: 3,
                },
                quarter: {
                    label: 'Quarter',
                    sequence: 4,
                },
            },
            maxLength: 40,
        }),
        owner_id: ReferenceColumn({
            label: 'Owner',
            maxLength: 32,
            referenceTable: 'sys_user',
        }),
        name: StringColumn({
            mandatory: true,
            maxLength: 40,
        }),
    },
})
