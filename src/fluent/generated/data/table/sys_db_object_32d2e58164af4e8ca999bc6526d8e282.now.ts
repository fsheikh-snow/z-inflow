import { Table, ReferenceColumn, HtmlColumn, StringColumn, DateColumn } from '@servicenow/sdk/core'

export const x_gzi_ppm_portfolio = Table({
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
            element: 'owner_id',
        },
        {
            name: 'index2',
            unique: false,
            element: 'workspace_id',
        },
    ],
    label: 'Portfolio',
    name: 'x_gzi_ppm_portfolio',
    schema: {
        workspace_id: ReferenceColumn({
            label: 'Workspace',
            mandatory: true,
            maxLength: 32,
            referenceTable: 'x_gzi_ppm_workspace',
        }),
        description: HtmlColumn({
            maxLength: 65536,
        }),
        owner_id: ReferenceColumn({
            label: 'Owner',
            maxLength: 32,
            referenceTable: 'sys_user',
        }),
        name: StringColumn({
            mandatory: true,
            maxLength: 40,
        }),
        color: StringColumn({
            maxLength: 20,
        }),
        due_date: DateColumn({
            maxLength: 40,
        }),
    },
})
