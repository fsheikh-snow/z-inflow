import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['9550d11c0cce4857b04425210209eb77'],
    type: 'record',
    securityAttribute: 'user_is_authenticated',
    operation: 'delete',
    roles: ['snc_internal'],
    table: 'x_gzi_ppm_project_member',
})
