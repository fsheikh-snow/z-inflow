import { Table, ChoiceColumn, StringColumn, BooleanColumn, ReferenceColumn } from '@servicenow/sdk/core'

export const x_gzi_ppm_custom_field_def = Table({
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
            element: 'workspace_id',
        },
    ],
    label: 'Custom Field Definition',
    name: 'x_gzi_ppm_custom_field_def',
    schema: {
        type: ChoiceColumn({
            choices: {
                date: {
                    label: 'Date',
                    sequence: 6,
                },
                dropdown: {
                    label: 'Dropdown',
                    sequence: 4,
                },
                number: {
                    label: 'Number',
                    sequence: 2,
                },
                currency: {
                    label: 'Currency',
                    sequence: 3,
                },
                people: {
                    label: 'People',
                    sequence: 7,
                },
                text: {
                    label: 'Text',
                    sequence: 1,
                },
                multi_select: {
                    label: 'Multi Select',
                    sequence: 5,
                },
            },
            mandatory: true,
            maxLength: 40,
        }),
        name: StringColumn({
            mandatory: true,
            maxLength: 40,
        }),
        is_global_library: BooleanColumn({
            maxLength: 40,
        }),
        workspace_id: ReferenceColumn({
            label: 'Workspace',
            mandatory: true,
            maxLength: 32,
            referenceTable: 'x_gzi_ppm_workspace',
        }),
    },
})
