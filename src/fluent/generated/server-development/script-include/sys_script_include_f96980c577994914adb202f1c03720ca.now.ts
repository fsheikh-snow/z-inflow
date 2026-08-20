import { ScriptInclude } from '@servicenow/sdk/core'

ScriptInclude({
    $id: Now.ID['f96980c577994914adb202f1c03720ca'],
    name: 'ProjectTaskService',
    script: Now.include('./sys_script_include_f96980c577994914adb202f1c03720ca.server.js'),
    description: 'Project sections, board, tasks, and multi-home queries',
    apiName: 'x_gzi_zflow.ProjectTaskService',
    clientCallable: false,
    mobileCallable: false,
    sandboxCallable: false,
    active: true,
})
