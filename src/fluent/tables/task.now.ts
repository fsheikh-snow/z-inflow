import '@servicenow/sdk/global'
import {
    Table,
    StringColumn,
    ReferenceColumn,
    ListColumn,
    HtmlColumn,
    GenericColumn,
    DateColumn,
    BooleanColumn,
    ChoiceColumn,
} from '@servicenow/sdk/core'

export const x_gzi_zflow_task = Table({
    name: 'x_gzi_zflow_task',
    label: 'Task',
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
        assignee_id: ReferenceColumn({
            label: 'Assignee',
            referenceTable: 'sys_user',
            cascadeRule: 'none',
            maxLength: 32,
        }),
        watch_list: ListColumn({
            label: 'Collaborators',
            referenceTable: 'sys_user',
            maxLength: 4000,
        }),
        comments: GenericColumn({
            label: 'Comments',
            columnType: 'journal_input',
            maxLength: 40,
        }),
        work_notes: GenericColumn({
            label: 'Work Notes',
            columnType: 'journal_input',
            maxLength: 40,
        }),
        name: StringColumn({ label: 'Name', mandatory: true, maxLength: 255 }),
        description: HtmlColumn({ label: 'Description', maxLength: 65536 }),
        notes: StringColumn({ label: 'Notes', maxLength: 4000 }),
        parent_task_id: ReferenceColumn({
            label: 'Parent Task',
            referenceTable: 'x_gzi_zflow_task',
            cascadeRule: 'none',
            maxLength: 32,
        }),
        start_date: DateColumn({ label: 'Start Date', maxLength: 40 }),
        due_date: DateColumn({ label: 'Due Date', maxLength: 40 }),
        completed: BooleanColumn({ label: 'Completed', default: false, maxLength: 40 }),
        status: ChoiceColumn({
            label: 'Status',
            dropdown: 'dropdown_with_none',
            default: 'open',
            choices: {
                open: {
                    label: 'Open',
                    sequence: 1,
                },
                in_progress: {
                    label: 'In Progress',
                    sequence: 2,
                },
                complete: {
                    label: 'Complete',
                    sequence: 3,
                },
            },
        }),
        priority: ChoiceColumn({
            label: 'Priority',
            dropdown: 'dropdown_with_none',
            choices: {
                high: {
                    label: 'High',
                    sequence: 1,
                },
                medium: {
                    label: 'Medium',
                    sequence: 2,
                },
                low: {
                    label: 'Low',
                    sequence: 3,
                },
            },
        }),
        task_type: ChoiceColumn({
            label: 'Task Type',
            dropdown: 'dropdown_with_none',
            default: 'task',
            choices: {
                task: {
                    label: 'Task',
                    sequence: 1,
                },
                milestone: {
                    label: 'Milestone',
                    sequence: 2,
                },
                approval: {
                    label: 'Approval',
                    sequence: 3,
                },
            },
            maxLength: 40,
        }),
        approval_state: ChoiceColumn({
            label: 'Approval State',
            dropdown: 'dropdown_with_none',
            choices: {
                approve: {
                    label: 'Approve',
                    sequence: 1,
                },
                reject: {
                    label: 'Reject',
                    sequence: 2,
                },
                request_changes: {
                    label: 'Request Changes',
                    sequence: 3,
                },
            },
            maxLength: 40,
        }),
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
            element: 'assignee_id',
        },
        {
            name: 'index3',
            unique: false,
            element: 'parent_task_id',
        },
    ],
})
