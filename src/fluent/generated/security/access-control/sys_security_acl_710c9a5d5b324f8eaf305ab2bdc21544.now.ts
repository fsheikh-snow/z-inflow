import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['710c9a5d5b324f8eaf305ab2bdc21544'],
    type: 'record',
    securityAttribute: 'user_is_authenticated',
    operation: 'delete',
    roles: ['snc_internal'],
    table: 'x_gzi_ppm_resource_role',
})
