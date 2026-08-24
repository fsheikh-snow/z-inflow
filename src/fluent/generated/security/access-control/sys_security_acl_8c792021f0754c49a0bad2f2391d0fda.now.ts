import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['8c792021f0754c49a0bad2f2391d0fda'],
    type: 'record',
    securityAttribute: 'user_is_authenticated',
    operation: 'delete',
    roles: ['snc_internal'],
    table: 'x_gzi_ppm_custom_view',
})
