import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['8353d9b069de4b69aba68679c0014544'],
    type: 'record',
    securityAttribute: 'user_is_authenticated',
    operation: 'write',
    roles: ['snc_internal'],
    table: 'x_gzi_ppm_portfolio_project',
})
