import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['7aef8339def8458895ae82e2f9c43048'],
    type: 'record',
    securityAttribute: 'user_is_authenticated',
    operation: 'delete',
    roles: ['snc_internal'],
    table: 'x_gzi_ppm_custom_field_value',
})
