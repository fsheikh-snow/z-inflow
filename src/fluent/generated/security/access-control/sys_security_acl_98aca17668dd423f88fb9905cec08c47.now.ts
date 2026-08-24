import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['98aca17668dd423f88fb9905cec08c47'],
    type: 'record',
    securityAttribute: 'user_is_authenticated',
    operation: 'write',
    roles: ['snc_internal'],
    table: 'x_gzi_ppm_portfolio',
})
