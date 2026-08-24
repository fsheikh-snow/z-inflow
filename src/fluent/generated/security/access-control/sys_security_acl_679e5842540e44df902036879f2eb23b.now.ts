import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['679e5842540e44df902036879f2eb23b'],
    type: 'record',
    securityAttribute: 'user_is_authenticated',
    operation: 'delete',
    roles: ['snc_internal'],
    table: 'x_gzi_ppm_proj_res_alloc',
})
