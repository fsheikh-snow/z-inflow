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
        {
            name: 'index',
            unique: false,
            element: 'predecessor_task_id',
        },
        {
            name: 'index2',
            unique: false,
            element: 'successor_task_id',
        },
    ],
    schema: {
        predecessor_task_id: ReferenceColumn({
            label: 'Predecessor Task',
            referenceTable: 'x_gzi_zflow_task',
            mandatory: true,
            cascadeRule: 'delete',
            maxLength: 32,
        }),
        successor_task_id: ReferenceColumn({
            label: 'Successor Task',
            referenceTable: 'x_gzi_zflow_task',
            mandatory: true,
            cascadeRule: 'delete',
            maxLength: 32,
        }),
        dependency_type: ChoiceColumn({
            label: 'Dependency Type',
            mandatory: true,
            default: 'finish_to_start',
            dropdown: 'dropdown_without_none',
            choices: {
                finish_to_start: {
                    label: 'Finish to Start',
                    sequence: 1,
                },
                start_to_start: {
                    label: 'Start to Start',
                    sequence: 2,
                },
                finish_to_finish: {
                    label: 'Finish to Finish',
                    sequence: 3,
                },
                start_to_finish: {
                    label: 'Start to Finish',
                    sequence: 4,
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
})
