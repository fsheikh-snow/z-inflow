import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['6197b062cc684555ba07b44bf5513f6f'],
    type: 'record',
    securityAttribute: 'user_is_authenticated',
    operation: 'create',
    roles: ['snc_internal'],
    table: 'x_gzi_ppm_custom_field_value',
})
