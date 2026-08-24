import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['90a8832c5d5b44d88736f65d134065df'],
    type: 'record',
    securityAttribute: 'user_is_authenticated',
    operation: 'create',
    roles: ['snc_internal'],
    table: 'x_gzi_ppm_project_task',
})
