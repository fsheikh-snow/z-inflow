import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['70d0a03557114c8aab132ab05329cdbc'],
    type: 'record',
    securityAttribute: 'user_is_authenticated',
    operation: 'create',
    roles: ['snc_internal'],
    table: 'x_gzi_ppm_portfolio',
})
