import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['0de54ae95f6c4a40a9511f3882830b84'],
    type: 'record',
    securityAttribute: 'user_is_authenticated',
    operation: 'create',
    roles: ['snc_internal'],
    table: 'x_gzi_ppm_custom_view',
})
