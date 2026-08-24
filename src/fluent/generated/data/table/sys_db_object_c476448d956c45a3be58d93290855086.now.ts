import { Table, ReferenceColumn, DecimalColumn, StringColumn, DateColumn } from '@servicenow/sdk/core'

export const x_gzi_ppm_custom_field_value = Table({
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
            element: 'portfolio_id',
        },
        {
            name: 'index2',
            unique: false,
            element: 'project_id',
        },
        {
            name: 'index3',
            unique: false,
            element: 'field_def_id',
        },
        {
            name: 'index4',
            unique: false,
            element: 'task_id',
        },
    ],
    label: 'Custom Field Value',
    name: 'x_gzi_ppm_custom_field_value',
    schema: {
        portfolio_id: ReferenceColumn({
            label: 'Portfolio',
            maxLength: 32,
            referenceTable: 'x_gzi_ppm_portfolio',
        }),
        project_id: ReferenceColumn({
            label: 'Project',
            maxLength: 32,
            referenceTable: 'x_gzi_ppm_project',
        }),
        value_number: DecimalColumn({
            maxLength: 20,
        }),
        field_def_id: ReferenceColumn({
            label: 'Field Definition',
            mandatory: true,
            maxLength: 32,
            referenceTable: 'x_gzi_ppm_custom_field_def',
        }),
        value_string: StringColumn({
            maxLength: 4000,
        }),
        value_date: DateColumn({
            maxLength: 40,
        }),
        task_id: ReferenceColumn({
            label: 'Task',
            maxLength: 32,
            referenceTable: 'x_gzi_ppm_task',
        }),
    },
})
