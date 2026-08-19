import '@servicenow/sdk/global'
import { Table, ReferenceColumn } from '@servicenow/sdk/core'

export const x_gzi_z_ppm_user_res_profile = Table({
    name: 'x_gzi_z_ppm_user_res_profile',
    label: 'User Resource Profile',
    allowWebServiceAccess: true,
    createAccessControls: true,
    index: [
        {
            name: 'user_res_profile_unique',
            unique: true,
            element: ['user_id', 'role_id'],
        },
    ],
    schema: {
        user_id: ReferenceColumn({
            label: 'User',
            referenceTable: 'sys_user',
            mandatory: true,
            cascadeRule: 'delete',
        }),
        role_id: ReferenceColumn({
            label: 'Resource Role',
            referenceTable: 'x_gzi_z_ppm_resource_role',
            mandatory: true,
            cascadeRule: 'delete',
        }),
    },
})
