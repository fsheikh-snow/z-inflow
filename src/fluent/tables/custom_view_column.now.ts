import '@servicenow/sdk/global'
import { Table, ReferenceColumn, StringColumn, IntegerColumn, BooleanColumn } from '@servicenow/sdk/core'

export const x_gzi_zflow_custom_view_column = Table({
    name: 'x_gzi_zflow_custom_view_column',
    label: 'Custom View Column',
    allowWebServiceAccess: true,
    createAccessControls: true,
    schema: {
        view_id: ReferenceColumn({
            label: 'View',
            referenceTable: 'x_gzi_zflow_custom_view',
            mandatory: true,
            cascadeRule: 'delete',
            maxLength: 32,
        }),
        field_path: StringColumn({ label: 'Field Path', mandatory: true, maxLength: 255 }),
        width: IntegerColumn({ label: 'Width', default: 160, maxLength: 40 }),
        is_visible: BooleanColumn({ label: 'Visible', default: true, maxLength: 40 }),
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
    index: [
        {
            name: 'index',
            unique: false,
            element: 'view_id',
        },
    ],
})
