import { BusinessRule } from '@servicenow/sdk/core'

BusinessRule({
    $id: Now.ID['33bdde8e315c43e58f45f1a188babc76'],
    name: 'Task Single Assignee',
    table: 'x_gzi_ppm_task',
    when: 'before',
    action: ['update', 'insert'],
    script: Now.include('./sys_script_33bdde8e315c43e58f45f1a188babc76.server.js'),
})
