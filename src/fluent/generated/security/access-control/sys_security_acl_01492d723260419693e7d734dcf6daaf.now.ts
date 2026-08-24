import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['01492d723260419693e7d734dcf6daaf'],
    type: 'record',
    securityAttribute: 'user_is_authenticated',
    operation: 'read',
    roles: ['snc_internal'],
    table: 'x_gzi_ppm_portfolio_project',
})
