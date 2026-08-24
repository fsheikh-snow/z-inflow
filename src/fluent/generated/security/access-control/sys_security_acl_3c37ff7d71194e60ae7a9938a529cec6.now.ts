import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['3c37ff7d71194e60ae7a9938a529cec6'],
    type: 'record',
    securityAttribute: 'user_is_authenticated',
    operation: 'delete',
    roles: ['snc_internal'],
    table: 'x_gzi_ppm_status_update',
})
