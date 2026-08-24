import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['63b2066db2f34941be1af990fa996ad5'],
    type: 'record',
    securityAttribute: 'user_is_authenticated',
    operation: 'write',
    roles: ['snc_internal'],
    table: 'x_gzi_ppm_custom_field_def',
})
