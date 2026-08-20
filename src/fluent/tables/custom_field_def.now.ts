import '@servicenow/sdk/global'
import { Table, StringColumn, ReferenceColumn, ChoiceColumn, BooleanColumn } from '@servicenow/sdk/core'

export const x_gzi_zflow_custom_field_def = Table({
    name: 'x_gzi_zflow_custom_field_def',
    label: 'Custom Field Definition',
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
        type: ChoiceColumn({
            label: 'Type',
            mandatory: true,
            dropdown: 'dropdown_without_none',
            choices: {
                text: {
                    label: 'Text',
                    sequence: 1,
                },
                number: {
                    label: 'Number',
                    sequence: 2,
                },
                currency: {
                    label: 'Currency',
                    sequence: 3,
                },
                dropdown: {
                    label: 'Dropdown',
                    sequence: 4,
                },
                multi_select: {
                    label: 'Multi Select',
                    sequence: 5,
                },
                date: {
                    label: 'Date',
                    sequence: 6,
                },
                people: {
                    label: 'People',
                    sequence: 7,
                },
            },
            maxLength: 40,
        }),
        is_global_library: BooleanColumn({
            label: 'Global Library',
            default: false,
            maxLength: 40,
        }),
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
    ],
})
