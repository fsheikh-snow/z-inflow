import { Table, ReferenceColumn, IntegerColumn, StringColumn } from '@servicenow/sdk/core'

export const x_gzi_ppm_section = Table({
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
            element: 'project_id',
        },
    ],
    label: 'Section',
    name: 'x_gzi_ppm_section',
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
        name: StringColumn({
            mandatory: true,
            maxLength: 40,
        }),
    },
})
