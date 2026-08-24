import '@servicenow/sdk/global'
import {
    Table,
    StringColumn,
    ReferenceColumn,
    ChoiceColumn,
    JsonColumn,
} from '@servicenow/sdk/core'

export const x_gzi_ppm_capacity_plan = Table({
    name: 'x_gzi_ppm_capacity_plan',
    label: 'Capacity Plan',
    display: 'name',
    allowWebServiceAccess: true,
    createAccessControls: true,
    schema: {
        workspace_id: ReferenceColumn({
            label: 'Workspace',
            referenceTable: 'x_gzi_ppm_workspace',
            mandatory: true,
            cascadeRule: 'delete',
        }),
        name: StringColumn({ label: 'Name', mandatory: true, maxLength: 255 }),
        owner_id: ReferenceColumn({
            label: 'Owner',
            referenceTable: 'sys_user',
            cascadeRule: 'none',
        }),
        portfolio_id: ReferenceColumn({
            label: 'Portfolio',
            referenceTable: 'x_gzi_ppm_portfolio',
            cascadeRule: 'none',
        }),
        group_id: ReferenceColumn({
            label: 'Team',
            referenceTable: 'sys_user_group',
            cascadeRule: 'none',
        }),
        time_granularity: ChoiceColumn({
            label: 'Time Granularity',
            default: 'month',
            dropdown: 'dropdown_without_none',
            choices: {
                day: 'Day',
                week: 'Week',
                month: 'Month',
                quarter: 'Quarter',
                year: 'Year',
            },
        }),
        filter_config: JsonColumn({ label: 'Filter Config' }),
    },
})
