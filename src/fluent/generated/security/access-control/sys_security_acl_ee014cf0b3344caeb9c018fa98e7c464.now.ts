import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['ee014cf0b3344caeb9c018fa98e7c464'],
    type: 'record',
    securityAttribute: 'user_is_authenticated',
    operation: 'read',
    roles: ['snc_internal'],
    table: 'x_gzi_ppm_proj_res_alloc',
})
