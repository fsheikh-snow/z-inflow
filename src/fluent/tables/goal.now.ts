import '@servicenow/sdk/global'
import { Table, StringColumn, ReferenceColumn, ChoiceColumn } from '@servicenow/sdk/core'

export const x_gzi_zscaler_ppm_goal = Table({
    name: 'x_gzi_zscaler_ppm_goal',
    label: 'Goal',
    display: 'name',
    allowWebServiceAccess: true,
    createAccessControls: true,
    schema: {
        workspace_id: ReferenceColumn({
            label: 'Workspace',
            referenceTable: 'x_gzi_zscaler_ppm_workspace',
            mandatory: true,
            cascadeRule: 'delete',
        }),
        owner_id: ReferenceColumn({
            label: 'Owner',
            referenceTable: 'sys_user',
            cascadeRule: 'none',
        }),
        name: StringColumn({ label: 'Name', mandatory: true, maxLength: 255 }),
        status: ChoiceColumn({
            label: 'Status',
            dropdown: 'dropdown_with_none',
            choices: {
                on_track: 'On Track',
                at_risk: 'At Risk',
                off_track: 'Off Track',
                on_hold: 'On Hold',
                complete: 'Complete',
            },
        }),
    },
})
