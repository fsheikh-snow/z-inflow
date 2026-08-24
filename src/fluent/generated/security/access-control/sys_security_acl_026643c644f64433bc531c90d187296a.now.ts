import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['026643c644f64433bc531c90d187296a'],
    type: 'record',
    securityAttribute: 'user_is_authenticated',
    operation: 'delete',
    roles: ['snc_internal'],
    table: 'x_gzi_ppm_project_task',
})
