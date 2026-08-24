import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['773b97b9c06d42779db9fda1a183937f'],
    type: 'record',
    securityAttribute: 'user_is_authenticated',
    operation: 'read',
    roles: ['snc_internal'],
    table: 'x_gzi_ppm_custom_field_value',
})
