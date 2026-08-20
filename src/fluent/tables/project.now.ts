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

export const x_gzi_zflow_project = Table({
    name: 'x_gzi_zflow_project',
    label: 'Project',
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
        assignment_group: ReferenceColumn({
            label: 'Team',
            referenceTable: 'sys_user_group',
            mandatory: true,
            cascadeRule: 'none',
            maxLength: 32,
        }),
        name: StringColumn({ label: 'Name', mandatory: true, maxLength: 255 }),
        status: ChoiceColumn({
            label: 'Status',
            dropdown: 'dropdown_with_none',
            choices: {
                on_track: {
                    label: 'On Track',
                    sequence: 1,
                },
                at_risk: {
                    label: 'At Risk',
                    sequence: 2,
                },
                off_track: {
                    label: 'Off Track',
                    sequence: 3,
                },
                complete: {
                    label: 'Complete',
                    sequence: 5,
                },
                on_hold: {
                    label: 'On Hold',
                    sequence: 4,
                },
                planning: {
                    label: 'Planning',
                    sequence: 2,
                },
                backlog: {
                    label: 'Backlog',
                    sequence: 1,
                },
                in_flight: {
                    label: 'In Flight',
                    sequence: 3,
                },
            },
            maxLength: 40,
        }),
        notes: StringColumn({ label: 'Notes', maxLength: 4000 }),
        owner_id: ReferenceColumn({
            label: 'Owner',
            referenceTable: 'sys_user',
            cascadeRule: 'none',
            maxLength: 32,
        }),
        start_date: DateColumn({ label: 'Start Date', maxLength: 40 }),
        due_date: DateColumn({ label: 'Due Date', maxLength: 40 }),
        priority: ChoiceColumn({
            label: 'Priority',
            dropdown: 'dropdown_with_none',
            choices: {
                high: {
                    label: 'High',
                    sequence: 1,
                },
                strategic: {
                    label: 'Strategic',
                    sequence: 2,
                },
                medium: {
                    label: 'Medium',
                    sequence: 3,
                },
                low: {
                    label: 'Low',
                    sequence: 4,
                },
            },
            maxLength: 40,
        }),
        description: HtmlColumn({ label: 'Description', maxLength: 65536 }),
        project_key: StringColumn({ label: 'Project Key', maxLength: 40 }),
        percent_complete: IntegerColumn({ label: 'Percent Complete', default: 0, maxLength: 40 }),
        sync_with_jira: BooleanColumn({ label: 'Sync With Jira', default: false, maxLength: 40 }),
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
            element: 'assignment_group',
        },
        {
            name: 'index2',
            unique: false,
            element: 'workspace_id',
        },
        {
            name: 'index3',
            unique: false,
            element: 'owner_id',
        },
    ],
})
