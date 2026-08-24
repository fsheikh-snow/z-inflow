import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['3d2e2948da054bd6aded06775edc8451'],
    type: 'record',
    securityAttribute: 'user_is_authenticated',
    operation: 'create',
    roles: ['snc_internal'],
    table: 'x_gzi_ppm_capacity_plan',
})
