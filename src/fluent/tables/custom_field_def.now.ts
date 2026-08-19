import '@servicenow/sdk/global'
import {
    Table,
    StringColumn,
    ReferenceColumn,
    ChoiceColumn,
    BooleanColumn,
} from '@servicenow/sdk/core'

export const x_gzi_z_ppm_custom_field_def = Table({
    name: 'x_gzi_z_ppm_custom_field_def',
    label: 'Custom Field Definition',
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
        type: ChoiceColumn({
            label: 'Type',
            mandatory: true,
            dropdown: 'dropdown_without_none',
            choices: {
                text: 'Text',
                number: 'Number',
                currency: 'Currency',
                dropdown: 'Dropdown',
                multi_select: 'Multi Select',
                date: 'Date',
                people: 'People',
            },
        }),
        is_global_library: BooleanColumn({
            label: 'Global Library',
            default: false,
        }),
    },
})
