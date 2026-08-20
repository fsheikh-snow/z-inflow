import '@servicenow/sdk/global'
import { Table, StringColumn, ReferenceColumn, IntegerColumn } from '@servicenow/sdk/core'

export const x_gzi_zflow_section = Table({
    name: 'x_gzi_zflow_section',
    label: 'Section',
    display: 'name',
    allowWebServiceAccess: true,
    createAccessControls: true,
    schema: {
        project_id: ReferenceColumn({
            label: 'Project',
            referenceTable: 'x_gzi_zflow_project',
            mandatory: true,
            cascadeRule: 'delete',
            maxLength: 32,
        }),
        name: StringColumn({ label: 'Name', mandatory: true, maxLength: 255 }),
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
            element: 'project_id',
        },
    ],
})
