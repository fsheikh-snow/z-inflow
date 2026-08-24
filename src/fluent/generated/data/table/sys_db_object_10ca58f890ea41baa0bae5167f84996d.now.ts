import { Table, StringColumn } from '@servicenow/sdk/core'

export const x_gzi_ppm_resource_role = Table({
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
    label: 'Resource Role',
    name: 'x_gzi_ppm_resource_role',
    schema: {
        name: StringColumn({
            mandatory: true,
            maxLength: 40,
        }),
    },
})
