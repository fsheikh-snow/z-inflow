import '@servicenow/sdk/global'
import { Table, ReferenceColumn, ChoiceColumn } from '@servicenow/sdk/core'

export const x_gzi_zflow_project_member = Table({
    name: 'x_gzi_zflow_project_member',
    label: 'Project Member',
    allowWebServiceAccess: true,
    createAccessControls: true,
    index: [
        {
            name: 'project_member_unique',
            unique: true,
            element: ['project_id', 'user_id'],
        },
        {
            name: 'index',
            unique: false,
            element: 'project_id',
        },
        {
            name: 'index2',
            unique: false,
            element: 'user_id',
        },
    ],
    schema: {
        project_id: ReferenceColumn({
            label: 'Project',
            referenceTable: 'x_gzi_zflow_project',
            mandatory: true,
            cascadeRule: 'delete',
            maxLength: 32,
        }),
        user_id: ReferenceColumn({
            label: 'User',
            referenceTable: 'sys_user',
            mandatory: true,
            cascadeRule: 'delete',
            maxLength: 32,
        }),
        role: ChoiceColumn({
            label: 'Role',
            mandatory: true,
            dropdown: 'dropdown_without_none',
            choices: {
                owner: {
                    label: 'Owner',
                    sequence: 1,
                },
                editor: {
                    label: 'Editor',
                    sequence: 2,
                },
                commenter: {
                    label: 'Commenter',
                    sequence: 3,
                },
                viewer: {
                    label: 'Viewer',
                    sequence: 4,
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
})
