import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['3c233a865eaa4c84a6e70f2265a1f35c'],
    type: 'record',
    securityAttribute: 'user_is_authenticated',
    operation: 'read',
    roles: ['snc_internal'],
    table: 'x_gzi_ppm_resource_role',
})
