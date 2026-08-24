import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['f082eddd81684a0887c0ffb531f48f36'],
    type: 'record',
    securityAttribute: 'user_is_authenticated',
    operation: 'create',
    roles: ['snc_internal'],
    table: 'x_gzi_ppm_status_update',
})
