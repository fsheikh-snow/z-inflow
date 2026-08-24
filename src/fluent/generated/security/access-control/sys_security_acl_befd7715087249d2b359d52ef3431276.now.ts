import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['befd7715087249d2b359d52ef3431276'],
    type: 'record',
    securityAttribute: 'user_is_authenticated',
    operation: 'create',
    roles: ['snc_internal'],
    table: 'x_gzi_ppm_portfolio_member',
})
