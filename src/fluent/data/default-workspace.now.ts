import '@servicenow/sdk/global'
import { Record } from '@servicenow/sdk/core'

/** Seed workspace so fresh installs have a target for portfolio/project creates. */
export const defaultWorkspace = Record({
    $id: Now.ID['default-workspace'],
    table: 'x_gzi_zscaler_ppm_workspace',
    data: {
        name: 'Default Workspace',
    },
})
