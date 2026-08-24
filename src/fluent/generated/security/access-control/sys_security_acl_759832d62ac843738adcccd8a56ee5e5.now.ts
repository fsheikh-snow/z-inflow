import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['759832d62ac843738adcccd8a56ee5e5'],
    type: 'record',
    securityAttribute: 'user_is_authenticated',
    operation: 'delete',
    roles: ['snc_internal'],
    table: 'x_gzi_ppm_project',
})
