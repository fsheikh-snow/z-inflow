import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['bc71079598114f3a816d06e97bd8c941'],
    type: 'record',
    securityAttribute: 'user_is_authenticated',
    operation: 'write',
    roles: ['snc_internal'],
    table: 'x_gzi_ppm_project_member',
})
