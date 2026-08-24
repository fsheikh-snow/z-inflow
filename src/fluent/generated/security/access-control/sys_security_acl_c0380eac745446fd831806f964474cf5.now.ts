import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['c0380eac745446fd831806f964474cf5'],
    type: 'record',
    securityAttribute: 'user_is_authenticated',
    operation: 'read',
    roles: ['snc_internal'],
    table: 'x_gzi_ppm_custom_field_def',
})
