import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['5cd0fbd68601432ab206dfd22ae50338'],
    type: 'record',
    securityAttribute: 'user_is_authenticated',
    operation: 'create',
    roles: ['snc_internal'],
    table: 'x_gzi_ppm_custom_view_column',
})
