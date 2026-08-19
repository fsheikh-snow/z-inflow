import '@servicenow/sdk/global'
import {
    Table,
    StringColumn,
    ReferenceColumn,
    DateColumn,
    HtmlColumn,
    ChoiceColumn,
    IntegerColumn,
    BooleanColumn,
} from '@servicenow/sdk/core'

export const x_gzi_z_ppm_project = Table({
    name: 'x_gzi_z_ppm_project',
    label: 'Project',
    display: 'name',
    allowWebServiceAccess: true,
    createAccessControls: true,
    schema: {
        workspace_id: ReferenceColumn({
            label: 'Workspace',
            referenceTable: 'x_gzi_z_ppm_workspace',
            mandatory: true,
            cascadeRule: 'delete',
        }),
        assignment_group: ReferenceColumn({
            label: 'Team',
            referenceTable: 'sys_user_group',
            mandatory: true,
            cascadeRule: 'none',
        }),
        name: StringColumn({ label: 'Name', mandatory: true, maxLength: 255 }),
        status: ChoiceColumn({
            label: 'Status',
            dropdown: 'dropdown_with_none',
            choices: {
                backlog: 'Backlog',
                planning: 'Planning',
                in_flight: 'In Flight',
                on_hold: 'On Hold',
                complete: 'Complete',
            },
        }),
        notes: StringColumn({ label: 'Notes', maxLength: 4000 }),
        owner_id: ReferenceColumn({
            label: 'Owner',
            referenceTable: 'sys_user',
            cascadeRule: 'none',
        }),
        start_date: DateColumn({ label: 'Start Date' }),
        due_date: DateColumn({ label: 'Due Date' }),
        priority: ChoiceColumn({
            label: 'Priority',
            dropdown: 'dropdown_with_none',
            choices: {
                high: 'High',
                strategic: 'Strategic',
                medium: 'Medium',
                low: 'Low',
            },
        }),
        description: HtmlColumn({ label: 'Description' }),
        project_key: StringColumn({ label: 'Project Key', maxLength: 40 }),
        percent_complete: IntegerColumn({ label: 'Percent Complete', default: 0 }),
        sync_with_jira: BooleanColumn({ label: 'Sync With Jira', default: false }),
    },
})
