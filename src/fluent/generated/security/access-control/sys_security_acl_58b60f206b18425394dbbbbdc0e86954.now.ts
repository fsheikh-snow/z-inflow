import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['58b60f206b18425394dbbbbdc0e86954'],
    type: 'record',
    securityAttribute: 'user_is_authenticated',
    operation: 'read',
    roles: ['snc_internal'],
    table: 'x_gzi_ppm_custom_view_column',
})
