import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['17a671d7f6af4e78add1f167eac2e7b0'],
    type: 'record',
    securityAttribute: 'user_is_authenticated',
    operation: 'write',
    roles: ['snc_internal'],
    table: 'x_gzi_ppm_custom_field_value',
})
