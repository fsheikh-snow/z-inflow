import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['5b8f65c1b4bd4774a2e63c3a7c024b85'],
    type: 'record',
    securityAttribute: 'user_is_authenticated',
    operation: 'create',
    roles: ['snc_internal'],
    table: 'x_gzi_ppm_resource_role',
})
