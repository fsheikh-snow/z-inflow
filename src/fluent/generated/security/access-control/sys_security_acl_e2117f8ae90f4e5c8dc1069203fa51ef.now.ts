import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['e2117f8ae90f4e5c8dc1069203fa51ef'],
    type: 'record',
    securityAttribute: 'user_is_authenticated',
    operation: 'write',
    roles: ['snc_internal'],
    table: 'x_gzi_ppm_capacity_plan',
})
