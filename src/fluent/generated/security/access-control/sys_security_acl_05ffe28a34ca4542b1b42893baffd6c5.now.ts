import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['05ffe28a34ca4542b1b42893baffd6c5'],
    type: 'record',
    securityAttribute: 'user_is_authenticated',
    operation: 'create',
    roles: ['snc_internal'],
    table: 'x_gzi_ppm_section',
})
