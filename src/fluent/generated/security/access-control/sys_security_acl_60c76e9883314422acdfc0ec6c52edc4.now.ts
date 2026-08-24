import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['60c76e9883314422acdfc0ec6c52edc4'],
    type: 'record',
    securityAttribute: 'user_is_authenticated',
    operation: 'read',
    roles: ['snc_internal'],
    table: 'x_gzi_ppm_project_task',
})
