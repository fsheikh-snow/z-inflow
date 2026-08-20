import '@servicenow/sdk/global'
import { Table, ReferenceColumn, StringColumn, DecimalColumn, DateColumn } from '@servicenow/sdk/core'

export const x_gzi_zflow_custom_field_value = Table({
    name: 'x_gzi_zflow_custom_field_value',
    label: 'Custom Field Value',
    allowWebServiceAccess: true,
    createAccessControls: true,
    schema: {
        field_def_id: ReferenceColumn({
            label: 'Field Definition',
            referenceTable: 'x_gzi_zflow_custom_field_def',
            mandatory: true,
            cascadeRule: 'delete',
            maxLength: 32,
        }),
        value_string: StringColumn({ label: 'Value String', maxLength: 4000 }),
        value_number: DecimalColumn({ label: 'Value Number', maxLength: 20 }),
        value_date: DateColumn({ label: 'Value Date', maxLength: 40 }),
        task_id: ReferenceColumn({
            label: 'Task',
            referenceTable: 'x_gzi_zflow_task',
            cascadeRule: 'delete',
            maxLength: 32,
        }),
        project_id: ReferenceColumn({
            label: 'Project',
            referenceTable: 'x_gzi_zflow_project',
            cascadeRule: 'delete',
            maxLength: 32,
        }),
        portfolio_id: ReferenceColumn({
            label: 'Portfolio',
            referenceTable: 'x_gzi_zflow_portfolio',
            cascadeRule: 'delete',
            maxLength: 32,
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
            element: 'project_id',
        },
        {
            name: 'index2',
            unique: false,
            element: 'task_id',
        },
        {
            name: 'index3',
            unique: false,
            element: 'field_def_id',
        },
        {
            name: 'index4',
            unique: false,
            element: 'portfolio_id',
        },
    ],
})
