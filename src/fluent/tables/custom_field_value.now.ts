import '@servicenow/sdk/global'
import {
    Table,
    ReferenceColumn,
    StringColumn,
    DecimalColumn,
    DateColumn,
} from '@servicenow/sdk/core'

export const x_gzi_z_ppm_custom_field_value = Table({
    name: 'x_gzi_z_ppm_custom_field_value',
    label: 'Custom Field Value',
    allowWebServiceAccess: true,
    createAccessControls: true,
    schema: {
        field_def_id: ReferenceColumn({
            label: 'Field Definition',
            referenceTable: 'x_gzi_z_ppm_custom_field_def',
            mandatory: true,
            cascadeRule: 'delete',
        }),
        value_string: StringColumn({ label: 'Value String', maxLength: 4000 }),
        value_number: DecimalColumn({ label: 'Value Number' }),
        value_date: DateColumn({ label: 'Value Date' }),
        task_id: ReferenceColumn({
            label: 'Task',
            referenceTable: 'x_gzi_z_ppm_task',
            cascadeRule: 'delete',
        }),
        project_id: ReferenceColumn({
            label: 'Project',
            referenceTable: 'x_gzi_z_ppm_project',
            cascadeRule: 'delete',
        }),
        portfolio_id: ReferenceColumn({
            label: 'Portfolio',
            referenceTable: 'x_gzi_z_ppm_portfolio',
            cascadeRule: 'delete',
        }),
    },
})
