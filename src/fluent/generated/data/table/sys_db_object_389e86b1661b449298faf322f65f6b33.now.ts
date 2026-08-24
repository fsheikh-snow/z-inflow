import { Table, ReferenceColumn, IntegerColumn } from '@servicenow/sdk/core'

export const x_gzi_ppm_project_task = Table({
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
    index: [
        {
            name: 'index',
            unique: false,
            element: 'section_id',
        },
        {
            name: 'index2',
            unique: false,
            element: 'project_id',
        },
        {
            name: 'index3',
            unique: false,
            element: 'task_id',
        },
    ],
    label: 'Project Task',
    name: 'x_gzi_ppm_project_task',
    schema: {
        project_id: ReferenceColumn({
            label: 'Project',
            mandatory: true,
            maxLength: 32,
            referenceTable: 'x_gzi_ppm_project',
        }),
        order_index: IntegerColumn({
            maxLength: 40,
        }),
        task_id: ReferenceColumn({
            label: 'Task',
            mandatory: true,
            maxLength: 32,
            referenceTable: 'x_gzi_ppm_task',
        }),
        section_id: ReferenceColumn({
            label: 'Section',
            maxLength: 32,
            referenceTable: 'x_gzi_ppm_section',
        }),
    },
})
