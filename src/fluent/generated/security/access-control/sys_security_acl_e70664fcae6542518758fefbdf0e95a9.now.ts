import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['e70664fcae6542518758fefbdf0e95a9'],
    type: 'record',
    securityAttribute: 'user_is_authenticated',
    operation: 'write',
    roles: ['snc_internal'],
    table: 'x_gzi_ppm_project',
})
