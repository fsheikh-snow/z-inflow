import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['ad2d0364eb8e420fa7c776ff25288c16'],
    type: 'record',
    securityAttribute: 'user_is_authenticated',
    operation: 'delete',
    roles: ['snc_internal'],
    table: 'x_gzi_ppm_portfolio',
})
