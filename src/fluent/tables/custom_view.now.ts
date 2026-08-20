import '@servicenow/sdk/global'
import {
    Table,
    StringColumn,
    ReferenceColumn,
    ChoiceColumn,
    BooleanColumn,
    JsonColumn,
} from '@servicenow/sdk/core'

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
        }),
        portfolio_id: ReferenceColumn({
            label: 'Portfolio',
            referenceTable: 'x_gzi_zflow_portfolio',
            cascadeRule: 'delete',
        }),
        user_id: ReferenceColumn({
            label: 'User',
            referenceTable: 'sys_user',
            cascadeRule: 'delete',
        }),
        view_type: ChoiceColumn({
            label: 'View Type',
            mandatory: true,
            dropdown: 'dropdown_without_none',
            choices: {
                list: 'List',
                board: 'Board',
                timeline: 'Timeline',
                dashboard: 'Dashboard',
                progress: 'Progress',
                workload: 'Workload',
                brief: 'Brief',
                settings: 'Settings',
            },
        }),
        name: StringColumn({ label: 'Name', mandatory: true, maxLength: 255 }),
        filter_query: StringColumn({ label: 'Filter Query', maxLength: 4000 }),
        sort_config: JsonColumn({ label: 'Sort Config' }),
        group_by: StringColumn({ label: 'Group By', maxLength: 255 }),
        is_default: BooleanColumn({ label: 'Default View', default: false }),
    },
})
