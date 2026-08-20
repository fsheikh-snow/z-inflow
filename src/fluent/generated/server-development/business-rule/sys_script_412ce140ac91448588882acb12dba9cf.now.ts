import { BusinessRule } from '@servicenow/sdk/core'

BusinessRule({
    $id: Now.ID['412ce140ac91448588882acb12dba9cf'],
    name: 'EAV XOR Validation',
    table: 'x_gzi_zflow_custom_field_value',
    when: 'before',
    action: ['update', 'insert'],
    script: Now.include('./sys_script_412ce140ac91448588882acb12dba9cf.server.js'),
})
