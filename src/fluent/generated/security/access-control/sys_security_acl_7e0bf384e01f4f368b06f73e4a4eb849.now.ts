import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['7e0bf384e01f4f368b06f73e4a4eb849'],
    type: 'record',
    securityAttribute: 'user_is_authenticated',
    operation: 'read',
    roles: ['snc_internal'],
    table: 'x_gzi_ppm_task',
})
