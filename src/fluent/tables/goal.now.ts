import '@servicenow/sdk/global'
import { Table, StringColumn, ReferenceColumn, ChoiceColumn } from '@servicenow/sdk/core'

export const x_gzi_zflow_goal = Table({
    name: 'x_gzi_zflow_goal',
    label: 'Goal',
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
        owner_id: ReferenceColumn({
            label: 'Owner',
            referenceTable: 'sys_user',
            cascadeRule: 'none',
            maxLength: 32,
        }),
        name: StringColumn({ label: 'Name', mandatory: true, maxLength: 255 }),
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
                complete: {
                    label: 'Complete',
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
            element: 'owner_id',
        },
        {
            name: 'index2',
            unique: false,
            element: 'workspace_id',
        },
    ],
})
