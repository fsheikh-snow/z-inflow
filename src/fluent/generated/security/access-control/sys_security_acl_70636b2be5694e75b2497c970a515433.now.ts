import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['70636b2be5694e75b2497c970a515433'],
    type: 'record',
    securityAttribute: 'user_is_authenticated',
    operation: 'read',
    roles: ['snc_internal'],
    table: 'x_gzi_ppm_custom_view',
})
