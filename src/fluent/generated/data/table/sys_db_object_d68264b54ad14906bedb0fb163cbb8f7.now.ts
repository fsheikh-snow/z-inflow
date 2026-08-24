import { Table, StringColumn, ReferenceColumn, JsonColumn, BooleanColumn, ChoiceColumn } from '@servicenow/sdk/core'

export const x_gzi_ppm_custom_view = Table({
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
            element: 'project_id',
        },
        {
            name: 'index2',
            unique: false,
            element: 'portfolio_id',
        },
        {
            name: 'index3',
            unique: false,
            element: 'user_id',
        },
    ],
    label: 'Custom View',
    name: 'x_gzi_ppm_custom_view',
    schema: {
        filter_query: StringColumn({
            maxLength: 1000,
        }),
        project_id: ReferenceColumn({
            label: 'Project',
            maxLength: 32,
            referenceTable: 'x_gzi_ppm_project',
        }),
        name: StringColumn({
            mandatory: true,
            maxLength: 40,
        }),
        sort_config: JsonColumn({
            maxLength: 4000,
        }),
        group_by: StringColumn({
            maxLength: 40,
        }),
        is_default: BooleanColumn({
            maxLength: 40,
        }),
        user_id: ReferenceColumn({
            label: 'User',
            maxLength: 32,
            referenceTable: 'sys_user',
        }),
        portfolio_id: ReferenceColumn({
            label: 'Portfolio',
            maxLength: 32,
            referenceTable: 'x_gzi_ppm_portfolio',
        }),
        view_type: ChoiceColumn({
            choices: {
                workload: {
                    label: 'Workload',
                    sequence: 6,
                },
                brief: {
                    label: 'Brief',
                    sequence: 7,
                },
                settings: {
                    label: 'Settings',
                    sequence: 8,
                },
                timeline: {
                    label: 'Timeline',
                    sequence: 3,
                },
                list: {
                    label: 'List',
                    sequence: 1,
                },
                dashboard: {
                    label: 'Dashboard',
                    sequence: 4,
                },
                progress: {
                    label: 'Progress',
                    sequence: 5,
                },
                board: {
                    label: 'Board',
                    sequence: 2,
                },
            },
            mandatory: true,
            maxLength: 40,
        }),
    },
})
