import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['e639e5febaa242e0b1307a9bc2ebdfc9'],
    type: 'record',
    securityAttribute: 'user_is_authenticated',
    operation: 'read',
    roles: ['snc_internal'],
    table: 'x_gzi_ppm_project',
})
