import '@servicenow/sdk/global'
import { Table, StringColumn, ReferenceColumn, ChoiceColumn, JsonColumn } from '@servicenow/sdk/core'

export const x_gzi_zflow_capacity_plan = Table({
    name: 'x_gzi_zflow_capacity_plan',
    label: 'Capacity Plan',
    display: 'name',
    allowWebServiceAccess: true,
    createAccessControls: true,
    schema: {
        workspace_id: ReferenceColumn({
            label: 'Workspace',
            referenceTable: 'x_gzi_zflow_workspace',
            mandatory: true,
            cascadeRule: 'delete',
            maxLength: 32,
        }),
        name: StringColumn({ label: 'Name', mandatory: true, maxLength: 255 }),
        owner_id: ReferenceColumn({
            label: 'Owner',
            referenceTable: 'sys_user',
            cascadeRule: 'none',
            maxLength: 32,
        }),
        portfolio_id: ReferenceColumn({
            label: 'Portfolio',
            referenceTable: 'x_gzi_zflow_portfolio',
            cascadeRule: 'none',
            maxLength: 32,
        }),
        group_id: ReferenceColumn({
            label: 'Team',
            referenceTable: 'sys_user_group',
            cascadeRule: 'none',
            maxLength: 32,
        }),
        time_granularity: ChoiceColumn({
            label: 'Time Granularity',
            default: 'month',
            dropdown: 'dropdown_without_none',
            choices: {
                day: {
                    label: 'Day',
                    sequence: 1,
                },
                week: {
                    label: 'Week',
                    sequence: 2,
                },
                month: {
                    label: 'Month',
                    sequence: 3,
                },
                quarter: {
                    label: 'Quarter',
                    sequence: 4,
                },
                year: {
                    label: 'Year',
                    sequence: 5,
                },
            },
            maxLength: 40,
        }),
        filter_config: JsonColumn({ label: 'Filter Config', maxLength: 4000 }),
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
    index: [
        {
            name: 'index',
            unique: false,
            element: 'workspace_id',
        },
        {
            name: 'index2',
            unique: false,
            element: 'portfolio_id',
        },
        {
            name: 'index3',
            unique: false,
            element: 'owner_id',
        },
        {
            name: 'index4',
            unique: false,
            element: 'group_id',
        },
    ],
})
