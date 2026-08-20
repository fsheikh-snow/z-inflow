import { ScriptInclude } from '@servicenow/sdk/core'

ScriptInclude({
    $id: Now.ID['b58cef6ba12f4c49a76a571a609665ba'],
    name: 'UserService',
    script: Now.include('./sys_script_include_b58cef6ba12f4c49a76a571a609665ba.server.js'),
    description: 'Batched sys_user and sys_user_grmember reads',
    apiName: 'x_gzi_zflow.UserService',
    clientCallable: false,
    mobileCallable: false,
    sandboxCallable: false,
    active: true,
})
