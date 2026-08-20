import '@servicenow/sdk/global'
import { Table, StringColumn, ReferenceColumn, ChoiceColumn, HtmlColumn } from '@servicenow/sdk/core'

export const x_gzi_zflow_status_update = Table({
    name: 'x_gzi_zflow_status_update',
    label: 'Status Update',
    allowWebServiceAccess: true,
    createAccessControls: true,
    schema: {
        entity_type: ChoiceColumn({
            label: 'Entity Type',
            mandatory: true,
            dropdown: 'dropdown_without_none',
            choices: {
                goal: {
                    label: 'Goal',
                    sequence: 1,
                },
                project: {
                    label: 'Project',
                    sequence: 2,
                },
                portfolio: {
                    label: 'Portfolio',
                    sequence: 3,
                },
            },
            maxLength: 40,
        }),
        entity_id: StringColumn({ label: 'Entity ID', mandatory: true, maxLength: 32 }),
        author_id: ReferenceColumn({
            label: 'Author',
            referenceTable: 'sys_user',
            mandatory: true,
            cascadeRule: 'none',
            maxLength: 32,
        }),
        text: HtmlColumn({ label: 'Text', maxLength: 65536 }),
        status: ChoiceColumn({
            label: 'Status',
            dropdown: 'dropdown_with_none',
            choices: {
                on_track: {
                    label: 'On Track',
                    sequence: 1,
                },
                at_risk: {
                    label: 'At Risk',
                    sequence: 2,
                },
                off_track: {
                    label: 'Off Track',
                    sequence: 3,
                },
                on_hold: {
                    label: 'On Hold',
                    sequence: 4,
                },
                no_recent_updates: {
                    label: 'No Recent Updates',
                    sequence: 5,
                },
            },
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
            element: 'author_id',
        },
    ],
})
