import { Table, StringColumn, ChoiceColumn, ReferenceColumn, HtmlColumn } from '@servicenow/sdk/core'

export const x_gzi_ppm_status_update = Table({
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
    index: [
        {
            name: 'index',
            unique: false,
            element: 'author_id',
        },
    ],
    label: 'Status Update',
    name: 'x_gzi_ppm_status_update',
    schema: {
        entity_id: StringColumn({
            mandatory: true,
            maxLength: 40,
        }),
        status: ChoiceColumn({
            choices: {
                at_risk: {
                    label: 'At Risk',
                    sequence: 2,
                },
                on_track: {
                    label: 'On Track',
                    sequence: 1,
                },
                on_hold: {
                    label: 'On Hold',
                    sequence: 4,
                },
                no_recent_updates: {
                    label: 'No Recent Updates',
                    sequence: 5,
                },
                off_track: {
                    label: 'Off Track',
                    sequence: 3,
                },
            },
            maxLength: 40,
        }),
        author_id: ReferenceColumn({
            label: 'Author',
            mandatory: true,
            maxLength: 32,
            referenceTable: 'sys_user',
        }),
        entity_type: ChoiceColumn({
            choices: {
                project: {
                    label: 'Project',
                    sequence: 2,
                },
                portfolio: {
                    label: 'Portfolio',
                    sequence: 3,
                },
                goal: {
                    label: 'Goal',
                    sequence: 1,
                },
            },
            mandatory: true,
            maxLength: 40,
        }),
        text: HtmlColumn({
            maxLength: 65536,
        }),
    },
})
