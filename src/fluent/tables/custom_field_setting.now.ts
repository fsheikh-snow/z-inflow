import '@servicenow/sdk/global'
import { Table, ReferenceColumn } from '@servicenow/sdk/core'

export const x_gzi_zflow_cust_field_setting = Table({
    name: 'x_gzi_zflow_cust_field_setting',
    label: 'Custom Field Setting',
    allowWebServiceAccess: true,
    createAccessControls: true,
    schema: {
        field_def_id: ReferenceColumn({
            label: 'Field Definition',
            referenceTable: 'x_gzi_zflow_custom_field_def',
            mandatory: true,
            cascadeRule: 'delete',
        }),
        project_id: ReferenceColumn({
            label: 'Project',
            referenceTable: 'x_gzi_zflow_project',
            cascadeRule: 'delete',
        }),
        portfolio_id: ReferenceColumn({
            label: 'Portfolio',
            referenceTable: 'x_gzi_zflow_portfolio',
            cascadeRule: 'delete',
        }),
    },
})
