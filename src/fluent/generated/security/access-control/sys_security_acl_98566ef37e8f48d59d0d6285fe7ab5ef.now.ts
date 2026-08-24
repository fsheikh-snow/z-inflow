import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['98566ef37e8f48d59d0d6285fe7ab5ef'],
    type: 'record',
    securityAttribute: 'user_is_authenticated',
    operation: 'write',
    roles: ['snc_internal'],
    table: 'x_gzi_ppm_custom_view',
})
