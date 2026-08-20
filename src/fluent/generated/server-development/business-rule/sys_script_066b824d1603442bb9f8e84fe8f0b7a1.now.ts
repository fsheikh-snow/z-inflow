import { BusinessRule } from '@servicenow/sdk/core'

BusinessRule({
    $id: Now.ID['066b824d1603442bb9f8e84fe8f0b7a1'],
    name: 'Task Single Assignee',
    table: 'x_gzi_zflow_task',
    when: 'before',
    action: ['update', 'insert'],
    script: Now.include('./sys_script_066b824d1603442bb9f8e84fe8f0b7a1.server.js'),
})
