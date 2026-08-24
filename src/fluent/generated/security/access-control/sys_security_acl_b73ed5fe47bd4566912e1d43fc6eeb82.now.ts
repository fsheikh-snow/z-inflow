import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['b73ed5fe47bd4566912e1d43fc6eeb82'],
    type: 'record',
    securityAttribute: 'user_is_authenticated',
    operation: 'read',
    roles: ['snc_internal'],
    table: 'x_gzi_ppm_portfolio_member',
})
