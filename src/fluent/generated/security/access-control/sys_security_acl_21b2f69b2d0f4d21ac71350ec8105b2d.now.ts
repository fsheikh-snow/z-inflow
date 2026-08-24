import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['21b2f69b2d0f4d21ac71350ec8105b2d'],
    type: 'record',
    securityAttribute: 'user_is_authenticated',
    operation: 'write',
    roles: ['snc_internal'],
    table: 'x_gzi_ppm_task',
})
