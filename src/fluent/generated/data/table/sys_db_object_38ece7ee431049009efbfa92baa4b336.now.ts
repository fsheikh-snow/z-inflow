import { Table, IntegerColumn, BooleanColumn, StringColumn, ReferenceColumn } from '@servicenow/sdk/core'

export const x_gzi_ppm_custom_view_column = Table({
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
            element: 'view_id',
        },
    ],
    label: 'Custom View Column',
    name: 'x_gzi_ppm_custom_view_column',
    schema: {
        width: IntegerColumn({
            maxLength: 40,
        }),
        is_visible: BooleanColumn({
            maxLength: 40,
        }),
        order_index: IntegerColumn({
            maxLength: 40,
        }),
        field_path: StringColumn({
            mandatory: true,
            maxLength: 200,
        }),
        view_id: ReferenceColumn({
            label: 'View',
            mandatory: true,
            maxLength: 32,
            referenceTable: 'x_gzi_ppm_custom_view',
        }),
    },
})
