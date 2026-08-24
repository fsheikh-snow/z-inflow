import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['a1a6af8fa4e440a4a3addb6d65ed279c'],
    type: 'record',
    securityAttribute: 'user_is_authenticated',
    operation: 'write',
    roles: ['snc_internal'],
    table: 'x_gzi_ppm_custom_view_column',
})
