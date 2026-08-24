import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['183c5908c3b7445984493597a12ed259'],
    type: 'record',
    securityAttribute: 'user_is_authenticated',
    operation: 'write',
    roles: ['snc_internal'],
    table: 'x_gzi_ppm_proj_res_alloc',
})
