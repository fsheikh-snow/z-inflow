import '@servicenow/sdk/global'
import { Table, StringColumn, ReferenceColumn, DateColumn, HtmlColumn } from '@servicenow/sdk/core'

export const x_gzi_zflow_portfolio = Table({
    name: 'x_gzi_zflow_portfolio',
    label: 'Portfolio',
    display: 'name',
    allowWebServiceAccess: true,
    createAccessControls: true,
    schema: {
        workspace_id: ReferenceColumn({
            label: 'Workspace',
            referenceTable: 'x_gzi_zflow_workspace',
            mandatory: true,
            cascadeRule: 'delete',
            maxLength: 32,
        }),
        name: StringColumn({ label: 'Name', mandatory: true, maxLength: 255 }),
        owner_id: ReferenceColumn({
            label: 'Owner',
            referenceTable: 'sys_user',
            cascadeRule: 'none',
            maxLength: 32,
        }),
        due_date: DateColumn({ label: 'Due Date', maxLength: 40 }),
        description: HtmlColumn({ label: 'Description', maxLength: 65536 }),
        color: StringColumn({ label: 'Color', maxLength: 40 }),
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
            element: 'workspace_id',
        },
        {
            name: 'index2',
            unique: false,
            element: 'owner_id',
        },
    ],
})
