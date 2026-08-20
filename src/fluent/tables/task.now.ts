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
        }),
        assignee_id: ReferenceColumn({
            label: 'Assignee',
            referenceTable: 'sys_user',
            cascadeRule: 'none',
        }),
        watch_list: ListColumn({
            label: 'Collaborators',
            referenceTable: 'sys_user',
        }),
        comments: GenericColumn({
            label: 'Comments',
            columnType: 'journal_input',
        }),
        work_notes: GenericColumn({
            label: 'Work Notes',
            columnType: 'journal_input',
        }),
        name: StringColumn({ label: 'Name', mandatory: true, maxLength: 255 }),
        description: HtmlColumn({ label: 'Description' }),
        notes: StringColumn({ label: 'Notes', maxLength: 4000 }),
        parent_task_id: ReferenceColumn({
            label: 'Parent Task',
            referenceTable: 'x_gzi_zflow_task',
            cascadeRule: 'none',
        }),
        start_date: DateColumn({ label: 'Start Date' }),
        due_date: DateColumn({ label: 'Due Date' }),
        completed: BooleanColumn({ label: 'Completed', default: false }),
        status: ChoiceColumn({
            label: 'Status',
            dropdown: 'dropdown_with_none',
            default: 'open',
            choices: {
                open: 'Open',
                in_progress: 'In Progress',
                complete: 'Complete',
            },
        }),
        priority: ChoiceColumn({
            label: 'Priority',
            dropdown: 'dropdown_with_none',
            choices: {
                high: 'High',
                medium: 'Medium',
                low: 'Low',
            },
        }),
        task_type: ChoiceColumn({
            label: 'Task Type',
            dropdown: 'dropdown_with_none',
            default: 'task',
            choices: {
                task: 'Task',
                milestone: 'Milestone',
                approval: 'Approval',
            },
        }),
        approval_state: ChoiceColumn({
            label: 'Approval State',
            dropdown: 'dropdown_with_none',
            choices: {
                approve: 'Approve',
                reject: 'Reject',
                request_changes: 'Request Changes',
            },
        }),
    },
})
