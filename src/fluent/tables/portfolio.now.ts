import '@servicenow/sdk/global'
import {
    Table,
    StringColumn,
    ReferenceColumn,
    DateColumn,
    HtmlColumn,
} from '@servicenow/sdk/core'

export const x_gzi_z_ppm_portfolio = Table({
    name: 'x_gzi_z_ppm_portfolio',
    label: 'Portfolio',
    display: 'name',
    allowWebServiceAccess: true,
    createAccessControls: true,
    schema: {
        workspace_id: ReferenceColumn({
            label: 'Workspace',
            referenceTable: 'x_gzi_z_ppm_workspace',
            mandatory: true,
            cascadeRule: 'delete',
        }),
        name: StringColumn({ label: 'Name', mandatory: true, maxLength: 255 }),
        owner_id: ReferenceColumn({
            label: 'Owner',
            referenceTable: 'sys_user',
            cascadeRule: 'none',
        }),
        due_date: DateColumn({ label: 'Due Date' }),
        description: HtmlColumn({ label: 'Description' }),
        color: StringColumn({ label: 'Color', maxLength: 40 }),
    },
})
