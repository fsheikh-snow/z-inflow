import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['c1911a4d7d9e497589815b64b10e3457'],
    type: 'record',
    securityAttribute: 'user_is_authenticated',
    operation: 'write',
    roles: ['snc_internal'],
    table: 'x_gzi_ppm_workspace',
})
