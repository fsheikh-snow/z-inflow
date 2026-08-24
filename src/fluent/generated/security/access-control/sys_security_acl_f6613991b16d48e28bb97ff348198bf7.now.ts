import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['f6613991b16d48e28bb97ff348198bf7'],
    type: 'record',
    securityAttribute: 'user_is_authenticated',
    operation: 'read',
    roles: ['snc_internal'],
    table: 'x_gzi_ppm_status_update',
})
