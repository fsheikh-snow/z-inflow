import '@servicenow/sdk/global'
import {
    Table,
    ReferenceColumn,
    StringColumn,
    IntegerColumn,
    BooleanColumn,
} from '@servicenow/sdk/core'

export const x_gzi_ppm_custom_view_column = Table({
    name: 'x_gzi_ppm_custom_view_column',
    label: 'Custom View Column',
    allowWebServiceAccess: true,
    createAccessControls: true,
    schema: {
        view_id: ReferenceColumn({
            label: 'View',
            referenceTable: 'x_gzi_ppm_custom_view',
            mandatory: true,
            cascadeRule: 'delete',
        }),
        field_path: StringColumn({ label: 'Field Path', mandatory: true, maxLength: 255 }),
        width: IntegerColumn({ label: 'Width', default: 160 }),
        is_visible: BooleanColumn({ label: 'Visible', default: true }),
        order_index: IntegerColumn({ label: 'Order Index', default: 0 }),
    },
})
