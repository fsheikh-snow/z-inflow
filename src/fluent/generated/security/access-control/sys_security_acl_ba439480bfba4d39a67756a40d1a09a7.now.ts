import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['ba439480bfba4d39a67756a40d1a09a7'],
    type: 'record',
    securityAttribute: 'user_is_authenticated',
    operation: 'create',
    roles: ['snc_internal'],
    table: 'x_gzi_ppm_custom_field_def',
})
