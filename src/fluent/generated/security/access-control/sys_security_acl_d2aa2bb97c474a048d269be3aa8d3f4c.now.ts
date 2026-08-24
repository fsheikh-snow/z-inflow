import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['d2aa2bb97c474a048d269be3aa8d3f4c'],
    type: 'record',
    securityAttribute: 'user_is_authenticated',
    operation: 'delete',
    roles: ['snc_internal'],
    table: 'x_gzi_ppm_custom_field_def',
})
