import { BusinessRule } from '@servicenow/sdk/core'

BusinessRule({
    $id: Now.ID['d51bb83157b74f1f88461bb9f883f90b'],
    name: 'EAV XOR Validation',
    table: 'x_gzi_ppm_custom_field_value',
    when: 'before',
    action: ['update', 'insert'],
    script: Now.include('./sys_script_d51bb83157b74f1f88461bb9f883f90b.server.js'),
})
