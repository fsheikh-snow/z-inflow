import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['68d117d64f2c40aabd78a18fa3cc286c'],
    type: 'record',
    securityAttribute: 'user_is_authenticated',
    operation: 'write',
    roles: ['snc_internal'],
    table: 'x_gzi_ppm_portfolio_member',
})
