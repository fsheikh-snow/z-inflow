import { ScriptInclude } from '@servicenow/sdk/core'

ScriptInclude({
    $id: Now.ID['0bb3fbed275a46f5a684f89152673b11'],
    name: 'ProjectTaskService',
    script: Now.include('./sys_script_include_0bb3fbed275a46f5a684f89152673b11.server.js'),
    description: 'Project CRUD, sections, board, tasks, multi-home queries',
    apiName: 'x_gzi_ppm.ProjectTaskService',
    clientCallable: false,
    mobileCallable: false,
    sandboxCallable: false,
    active: true,
})
