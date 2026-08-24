import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['989613c058214fffb4f71b9b3d4ca39c'],
    type: 'record',
    securityAttribute: 'user_is_authenticated',
    operation: 'delete',
    roles: ['snc_internal'],
    table: 'x_gzi_ppm_portfolio_member',
})
