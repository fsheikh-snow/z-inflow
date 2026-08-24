import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['30ebd9d37de54623a6cb1016fc926d86'],
    type: 'record',
    securityAttribute: 'user_is_authenticated',
    operation: 'delete',
    roles: ['snc_internal'],
    table: 'x_gzi_ppm_task',
})
