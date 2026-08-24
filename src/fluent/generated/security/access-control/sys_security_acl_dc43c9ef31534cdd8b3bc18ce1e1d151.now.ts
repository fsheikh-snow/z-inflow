import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['dc43c9ef31534cdd8b3bc18ce1e1d151'],
    type: 'record',
    securityAttribute: 'user_is_authenticated',
    operation: 'write',
    roles: ['snc_internal'],
    table: 'x_gzi_ppm_resource_role',
})
