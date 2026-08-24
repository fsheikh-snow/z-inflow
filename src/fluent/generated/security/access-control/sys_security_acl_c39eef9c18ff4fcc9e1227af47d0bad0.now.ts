import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['c39eef9c18ff4fcc9e1227af47d0bad0'],
    type: 'record',
    securityAttribute: 'user_is_authenticated',
    operation: 'create',
    roles: ['snc_internal'],
    table: 'x_gzi_ppm_project_member',
})
