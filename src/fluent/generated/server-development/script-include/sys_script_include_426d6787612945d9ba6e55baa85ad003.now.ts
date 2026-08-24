import { ScriptInclude } from '@servicenow/sdk/core'

ScriptInclude({
    $id: Now.ID['426d6787612945d9ba6e55baa85ad003'],
    name: 'UserService',
    script: Now.include('./sys_script_include_426d6787612945d9ba6e55baa85ad003.server.js'),
    description: 'Batched sys_user and sys_user_grmember reads, user/group search',
    apiName: 'x_gzi_ppm.UserService',
    clientCallable: false,
    mobileCallable: false,
    sandboxCallable: false,
    active: true,
})
