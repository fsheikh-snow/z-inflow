import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['22a761cdd0544ddb812bc3165526742a'],
    type: 'record',
    securityAttribute: 'user_is_authenticated',
    operation: 'create',
    roles: ['snc_internal'],
    table: 'x_gzi_ppm_project',
})
