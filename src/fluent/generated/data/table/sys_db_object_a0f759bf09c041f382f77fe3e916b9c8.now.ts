import { Table, ReferenceColumn, ChoiceColumn } from '@servicenow/sdk/core'

export const x_gzi_ppm_project_member = Table({
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
            element: 'project_id',
        },
        {
            name: 'index2',
            unique: false,
            element: 'user_id',
        },
    ],
    label: 'Project Member',
    name: 'x_gzi_ppm_project_member',
    schema: {
        project_id: ReferenceColumn({
            label: 'Project',
            mandatory: true,
            maxLength: 32,
            referenceTable: 'x_gzi_ppm_project',
        }),
        role: ChoiceColumn({
            choices: {
                commenter: {
                    label: 'Commenter',
                    sequence: 3,
                },
                viewer: {
                    label: 'Viewer',
                    sequence: 4,
                },
                owner: {
                    label: 'Owner',
                    sequence: 1,
                },
                editor: {
                    label: 'Editor',
                    sequence: 2,
                },
            },
            mandatory: true,
            maxLength: 40,
        }),
        user_id: ReferenceColumn({
            label: 'User',
            mandatory: true,
            maxLength: 32,
            referenceTable: 'sys_user',
        }),
    },
})
