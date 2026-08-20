import '@servicenow/sdk/global'
import { Table, StringColumn, ReferenceColumn, ChoiceColumn, BooleanColumn, JsonColumn } from '@servicenow/sdk/core'

export const x_gzi_zflow_custom_view = Table({
    name: 'x_gzi_zflow_custom_view',
    label: 'Custom View',
    display: 'name',
    allowWebServiceAccess: true,
    createAccessControls: true,
    schema: {
        project_id: ReferenceColumn({
            label: 'Project',
            referenceTable: 'x_gzi_zflow_project',
            cascadeRule: 'delete',
            maxLength: 32,
        }),
        portfolio_id: ReferenceColumn({
            label: 'Portfolio',
            referenceTable: 'x_gzi_zflow_portfolio',
            cascadeRule: 'delete',
            maxLength: 32,
        }),
        user_id: ReferenceColumn({
            label: 'User',
            referenceTable: 'sys_user',
            cascadeRule: 'delete',
            maxLength: 32,
        }),
        view_type: ChoiceColumn({
            label: 'View Type',
            mandatory: true,
            dropdown: 'dropdown_without_none',
            choices: {
                list: {
                    label: 'List',
                    sequence: 1,
                },
                board: {
                    label: 'Board',
                    sequence: 2,
                },
                timeline: {
                    label: 'Timeline',
                    sequence: 3,
                },
                dashboard: {
                    label: 'Dashboard',
                    sequence: 4,
                },
                progress: {
                    label: 'Progress',
                    sequence: 5,
                },
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
            },
            maxLength: 40,
        }),
        name: StringColumn({ label: 'Name', mandatory: true, maxLength: 255 }),
        filter_query: StringColumn({ label: 'Filter Query', maxLength: 4000 }),
        sort_config: JsonColumn({ label: 'Sort Config', maxLength: 4000 }),
        group_by: StringColumn({ label: 'Group By', maxLength: 255 }),
        is_default: BooleanColumn({ label: 'Default View', default: false, maxLength: 40 }),
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
            element: 'user_id',
        },
        {
            name: 'index2',
            unique: false,
            element: 'portfolio_id',
        },
        {
            name: 'index3',
            unique: false,
            element: 'project_id',
        },
    ],
})
