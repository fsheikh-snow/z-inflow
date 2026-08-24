import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['e1ffb9b246e94a798b1906de326f6905'],
    type: 'record',
    securityAttribute: 'user_is_authenticated',
    operation: 'write',
    roles: ['snc_internal'],
    table: 'x_gzi_ppm_status_update',
})
