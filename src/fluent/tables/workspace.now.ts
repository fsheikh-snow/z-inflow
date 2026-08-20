import '@servicenow/sdk/global'
import { Table, StringColumn } from '@servicenow/sdk/core'

export const x_gzi_zflow_workspace = Table({
    name: 'x_gzi_zflow_workspace',
    label: 'Workspace',
    display: 'name',
    allowWebServiceAccess: true,
    createAccessControls: true,
    schema: {
        name: StringColumn({ label: 'Name', mandatory: true, maxLength: 255 }),
    },
})
