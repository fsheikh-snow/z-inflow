import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['e8f22737592c4aa6850b98c492f253c0'],
    type: 'record',
    securityAttribute: 'user_is_authenticated',
    operation: 'read',
    roles: ['snc_internal'],
    table: 'x_gzi_ppm_workspace',
})
