import '@servicenow/sdk/global'
import { Table, StringColumn } from '@servicenow/sdk/core'

export const x_gzi_zflow_resource_role = Table({
    name: 'x_gzi_zflow_resource_role',
    label: 'Resource Role',
    display: 'name',
    allowWebServiceAccess: true,
    createAccessControls: true,
    schema: {
        name: StringColumn({ label: 'Name', mandatory: true, maxLength: 100 }),
    },
})
