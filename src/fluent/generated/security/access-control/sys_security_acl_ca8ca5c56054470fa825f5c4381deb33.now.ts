import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['ca8ca5c56054470fa825f5c4381deb33'],
    type: 'record',
    securityAttribute: 'user_is_authenticated',
    operation: 'delete',
    roles: ['snc_internal'],
    table: 'x_gzi_ppm_workspace',
})
