import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['bd56218badfb46928483caf8536606b8'],
    type: 'record',
    securityAttribute: 'user_is_authenticated',
    operation: 'read',
    roles: ['snc_internal'],
    table: 'x_gzi_ppm_section',
})
