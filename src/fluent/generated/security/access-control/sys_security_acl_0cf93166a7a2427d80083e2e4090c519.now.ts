import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['0cf93166a7a2427d80083e2e4090c519'],
    type: 'record',
    securityAttribute: 'user_is_authenticated',
    operation: 'read',
    roles: ['snc_internal'],
    table: 'x_gzi_ppm_portfolio',
})
