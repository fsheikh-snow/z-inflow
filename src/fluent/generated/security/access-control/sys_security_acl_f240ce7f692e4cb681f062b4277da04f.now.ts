import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['f240ce7f692e4cb681f062b4277da04f'],
    type: 'record',
    securityAttribute: 'user_is_authenticated',
    operation: 'delete',
    roles: ['snc_internal'],
    table: 'x_gzi_ppm_capacity_plan',
})
