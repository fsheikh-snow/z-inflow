import '@servicenow/sdk/global'
import { Table, ReferenceColumn, IntegerColumn } from '@servicenow/sdk/core'

export const x_gzi_zflow_project_task = Table({
    name: 'x_gzi_zflow_project_task',
    label: 'Project Task',
    allowWebServiceAccess: true,
    createAccessControls: true,
    index: [
        {
            name: 'project_task_unique',
            unique: true,
            element: ['project_id', 'task_id'],
        },
        {
            name: 'index',
            unique: false,
            element: 'section_id',
        },
    ],
    schema: {
        project_id: ReferenceColumn({
            label: 'Project',
            referenceTable: 'x_gzi_zflow_project',
            mandatory: true,
            primary: true,
            cascadeRule: 'delete',
            maxLength: 32,
        }),
        task_id: ReferenceColumn({
            label: 'Task',
            referenceTable: 'x_gzi_zflow_task',
            mandatory: true,
            primary: true,
            cascadeRule: 'delete',
            maxLength: 32,
        }),
        section_id: ReferenceColumn({
            label: 'Section',
            referenceTable: 'x_gzi_zflow_section',
            cascadeRule: 'clear',
            maxLength: 32,
        }),
        order_index: IntegerColumn({ label: 'Order Index', default: 0, maxLength: 40 }),
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
