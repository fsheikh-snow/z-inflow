import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['2f362039701d46789366ff27ba4bf555'],
    type: 'record',
    securityAttribute: 'user_is_authenticated',
    operation: 'delete',
    roles: ['snc_internal'],
    table: 'x_gzi_ppm_portfolio_project',
})
