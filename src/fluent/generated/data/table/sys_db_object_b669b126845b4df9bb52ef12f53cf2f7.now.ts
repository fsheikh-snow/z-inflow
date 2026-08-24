import {
    Table,
    ReferenceColumn,
    DateColumn,
    StringColumn,
    ChoiceColumn,
    BooleanColumn,
    HtmlColumn,
    IntegerColumn,
} from '@servicenow/sdk/core'

export const x_gzi_ppm_project = Table({
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
    label: 'Project',
    name: 'x_gzi_ppm_project',
    schema: {
        owner_id: ReferenceColumn({
            label: 'Owner',
            maxLength: 32,
            referenceTable: 'sys_user',
        }),
        start_date: DateColumn({
            maxLength: 40,
        }),
        name: StringColumn({
            mandatory: true,
            maxLength: 40,
        }),
        status: ChoiceColumn({
            choices: {
                planning: {
                    label: 'Planning',
                    sequence: 2,
                },
                complete: {
                    label: 'Complete',
                    sequence: 5,
                },
                backlog: {
                    label: 'Backlog',
                    sequence: 1,
                },
                in_flight: {
                    label: 'In Flight',
                    sequence: 3,
                },
                on_hold: {
                    label: 'On Hold',
                    sequence: 4,
                },
            },
            maxLength: 40,
        }),
        due_date: DateColumn({
            maxLength: 40,
        }),
        sync_with_jira: BooleanColumn({
            label: 'Sync with Jira',
            maxLength: 40,
        }),
        workspace_id: ReferenceColumn({
            label: 'Workspace',
            mandatory: true,
            maxLength: 32,
            referenceTable: 'x_gzi_ppm_workspace',
        }),
        project_key: StringColumn({
            maxLength: 40,
        }),
        description: HtmlColumn({
            maxLength: 65536,
        }),
        assignment_group: ReferenceColumn({
            mandatory: true,
            maxLength: 32,
            referenceTable: 'sys_user_group',
        }),
        notes: StringColumn({
            maxLength: 4000,
        }),
        priority: ChoiceColumn({
            choices: {
                high: {
                    label: 'High',
                    sequence: 1,
                },
                low: {
                    label: 'Low',
                    sequence: 4,
                },
                medium: {
                    label: 'Medium',
                    sequence: 3,
                },
                strategic: {
                    label: 'Strategic',
                    sequence: 2,
                },
            },
            maxLength: 40,
        }),
        percent_complete: IntegerColumn({
            maxLength: 40,
        }),
    },
})
