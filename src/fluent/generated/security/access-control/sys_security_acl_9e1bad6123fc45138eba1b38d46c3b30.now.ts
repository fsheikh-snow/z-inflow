import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['9e1bad6123fc45138eba1b38d46c3b30'],
    type: 'record',
    securityAttribute: 'user_is_authenticated',
    operation: 'create',
    roles: ['snc_internal'],
    table: 'x_gzi_ppm_portfolio_project',
})
