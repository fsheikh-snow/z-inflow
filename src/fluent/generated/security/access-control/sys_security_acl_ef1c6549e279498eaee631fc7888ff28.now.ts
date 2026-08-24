import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['ef1c6549e279498eaee631fc7888ff28'],
    type: 'record',
    securityAttribute: 'user_is_authenticated',
    operation: 'read',
    roles: ['snc_internal'],
    table: 'x_gzi_ppm_capacity_plan',
})
