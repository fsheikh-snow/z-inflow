import { Table, StringColumn } from '@servicenow/sdk/core'

export const x_gzi_ppm_workspace = Table({
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
    label: 'Workspace',
    name: 'x_gzi_ppm_workspace',
    schema: {
        name: StringColumn({
            mandatory: true,
            maxLength: 40,
        }),
    },
})
