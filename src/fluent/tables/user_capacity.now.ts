import '@servicenow/sdk/global'
import { Table, ReferenceColumn, IntegerColumn } from '@servicenow/sdk/core'

export const x_gzi_zscaler_ppm_user_capacity = Table({
    name: 'x_gzi_zscaler_ppm_user_capacity',
    label: 'User Capacity',
    allowWebServiceAccess: true,
    createAccessControls: true,
    schema: {
        user_profile_id: ReferenceColumn({
            label: 'User Resource Profile',
            referenceTable: 'x_gzi_zscaler_ppm_user_res_profile',
            mandatory: true,
            unique: true,
            cascadeRule: 'delete',
        }),
        baseline_hours_per_week: IntegerColumn({
            label: 'Baseline Hours Per Week',
            mandatory: true,
            default: 40,
        }),
    },
})
