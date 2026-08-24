import {
    Table,
    ChoiceColumn,
    ListColumn,
    StringColumn,
    ReferenceColumn,
    DateColumn,
    HtmlColumn,
    BooleanColumn,
} from '@servicenow/sdk/core'

export const x_gzi_ppm_task = Table({
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
            element: 'parent_task_id',
        },
        {
            name: 'index2',
            unique: false,
            element: 'workspace_id',
        },
        {
            name: 'index3',
            unique: false,
            element: 'assignee_id',
        },
    ],
    label: 'Task',
    name: 'x_gzi_ppm_task',
    schema: {
        task_type: ChoiceColumn({
            choices: {
                approval: {
                    label: 'Approval',
                    sequence: 3,
                },
                task: {
                    label: 'Task',
                    sequence: 1,
                },
                milestone: {
                    label: 'Milestone',
                    sequence: 2,
                },
            },
            maxLength: 40,
        }),
        status: ChoiceColumn({
            choices: {
                in_progress: {
                    label: 'In Progress',
                    sequence: 2,
                },
                complete: {
                    label: 'Complete',
                    sequence: 3,
                },
                open: {
                    label: 'Open',
                    sequence: 1,
                },
            },
            maxLength: 40,
        }),
        watch_list: ListColumn({
            maxLength: 4000,
            referenceTable: 'sys_user',
        }),
        name: StringColumn({
            mandatory: true,
            maxLength: 40,
        }),
        work_notes: StringColumn({
            maxLength: 4000,
        }),
        comments: StringColumn({
            maxLength: 4000,
        }),
        workspace_id: ReferenceColumn({
            label: 'Workspace',
            mandatory: true,
            maxLength: 32,
            referenceTable: 'x_gzi_ppm_workspace',
        }),
        start_date: DateColumn({
            maxLength: 40,
        }),
        assignee_id: ReferenceColumn({
            label: 'Assignee',
            maxLength: 32,
            referenceTable: 'sys_user',
        }),
        description: HtmlColumn({
            maxLength: 65536,
        }),
        notes: StringColumn({
            maxLength: 4000,
        }),
        priority: ChoiceColumn({
            choices: {
                medium: {
                    label: 'Medium',
                    sequence: 2,
                },
                low: {
                    label: 'Low',
                    sequence: 3,
                },
                high: {
                    label: 'High',
                    sequence: 1,
                },
            },
            maxLength: 40,
        }),
        due_date: DateColumn({
            maxLength: 40,
        }),
        approval_state: ChoiceColumn({
            choices: {
                request_changes: {
                    label: 'Request Changes',
                    sequence: 3,
                },
                reject: {
                    label: 'Reject',
                    sequence: 2,
                },
                approve: {
                    label: 'Approve',
                    sequence: 1,
                },
            },
            maxLength: 40,
        }),
        completed: BooleanColumn({
            maxLength: 40,
        }),
        parent_task_id: ReferenceColumn({
            label: 'Parent Task',
            maxLength: 32,
            referenceTable: 'x_gzi_ppm_task',
        }),
    },
})
