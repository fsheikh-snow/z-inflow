import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['ec94a2d8bee642adaf1ae5a8bf2aff66'],
    type: 'record',
    securityAttribute: 'user_is_authenticated',
    operation: 'delete',
    roles: ['snc_internal'],
    table: 'x_gzi_ppm_section',
})
