import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['4cd82d12b7014386b138e27f170c6e4f'],
    type: 'record',
    securityAttribute: 'user_is_authenticated',
    operation: 'create',
    roles: ['snc_internal'],
    table: 'x_gzi_ppm_proj_res_alloc',
})
