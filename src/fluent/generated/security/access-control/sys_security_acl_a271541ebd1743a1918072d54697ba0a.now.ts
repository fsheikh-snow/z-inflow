import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['a271541ebd1743a1918072d54697ba0a'],
    type: 'record',
    securityAttribute: 'user_is_authenticated',
    operation: 'write',
    roles: ['snc_internal'],
    table: 'x_gzi_ppm_section',
})
