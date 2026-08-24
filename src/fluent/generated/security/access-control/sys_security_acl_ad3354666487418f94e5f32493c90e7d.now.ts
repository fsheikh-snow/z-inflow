import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['ad3354666487418f94e5f32493c90e7d'],
    type: 'record',
    securityAttribute: 'user_is_authenticated',
    operation: 'create',
    roles: ['snc_internal'],
    table: 'x_gzi_ppm_task',
})
