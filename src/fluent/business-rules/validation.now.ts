import '@servicenow/sdk/global'
import { BusinessRule } from '@servicenow/sdk/core'
import { enforceEavXor } from '../../server/business-rules/enforce-eav-xor'
import { enforceSingleAssignee } from '../../server/business-rules/enforce-single-assignee'

export const EavXorValidation = BusinessRule({
    $id: Now.ID['br-eav-xor-validation'],
    name: 'EAV XOR Validation',
    table: 'x_gzi_zflow_custom_field_value',
    when: 'before',
    action: ['insert', 'update'],
    order: 100,
    script: enforceEavXor,
})

export const TaskSingleAssignee = BusinessRule({
    $id: Now.ID['br-task-single-assignee'],
    name: 'Task Single Assignee',
    table: 'x_gzi_zflow_task',
    when: 'before',
    action: ['insert', 'update'],
    order: 100,
    script: enforceSingleAssignee,
})
