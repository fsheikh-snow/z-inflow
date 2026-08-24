import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['5ea8e1ce129b42d8bc26ea61acaaf362'],
    type: 'record',
    securityAttribute: 'user_is_authenticated',
    operation: 'create',
    roles: ['snc_internal'],
    table: 'x_gzi_ppm_workspace',
})
