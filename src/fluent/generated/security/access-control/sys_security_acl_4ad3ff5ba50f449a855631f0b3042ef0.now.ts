import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['4ad3ff5ba50f449a855631f0b3042ef0'],
    type: 'record',
    securityAttribute: 'user_is_authenticated',
    operation: 'read',
    roles: ['snc_internal'],
    table: 'x_gzi_ppm_project_member',
})
