import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['8b76902d00224542a9a802d1a7b15958'],
    type: 'record',
    securityAttribute: 'user_is_authenticated',
    operation: 'delete',
    roles: ['snc_internal'],
    table: 'x_gzi_ppm_custom_view_column',
})
