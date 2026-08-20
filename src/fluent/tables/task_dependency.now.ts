import '@servicenow/sdk/global'
import { Table, ReferenceColumn, ChoiceColumn } from '@servicenow/sdk/core'

export const x_gzi_zflow_task_dependency = Table({
    name: 'x_gzi_zflow_task_dependency',
    label: 'Task Dependency',
    allowWebServiceAccess: true,
    createAccessControls: true,
    index: [
        {
            name: 'task_dependency_unique',
            unique: true,
            element: ['predecessor_task_id', 'successor_task_id'],
        },
    ],
    schema: {
        predecessor_task_id: ReferenceColumn({
            label: 'Predecessor Task',
            referenceTable: 'x_gzi_zflow_task',
            mandatory: true,
            cascadeRule: 'delete',
        }),
        successor_task_id: ReferenceColumn({
            label: 'Successor Task',
            referenceTable: 'x_gzi_zflow_task',
            mandatory: true,
            cascadeRule: 'delete',
        }),
        dependency_type: ChoiceColumn({
            label: 'Dependency Type',
            mandatory: true,
            default: 'finish_to_start',
            dropdown: 'dropdown_without_none',
            choices: {
                finish_to_start: 'Finish-to-Start',
                start_to_start: 'Start-to-Start',
                finish_to_finish: 'Finish-to-Finish',
                start_to_finish: 'Start-to-Finish',
            },
        }),
    },
})
