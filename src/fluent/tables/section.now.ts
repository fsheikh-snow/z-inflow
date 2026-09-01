import '@servicenow/sdk/global'
import { Table, StringColumn, ReferenceColumn, IntegerColumn } from '@servicenow/sdk/core'

export const x_gzi_zscaler_ppm_section = Table({
    name: 'x_gzi_zscaler_ppm_section',
    label: 'Section',
    display: 'name',
    allowWebServiceAccess: true,
    createAccessControls: true,
    schema: {
        project_id: ReferenceColumn({
            label: 'Project',
            referenceTable: 'x_gzi_zscaler_ppm_project',
            mandatory: true,
            cascadeRule: 'delete',
        }),
        name: StringColumn({ label: 'Name', mandatory: true, maxLength: 255 }),
        order_index: IntegerColumn({ label: 'Order Index', default: 0 }),
    },
})
