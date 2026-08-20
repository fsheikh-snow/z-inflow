import { ScriptInclude } from '@servicenow/sdk/core'

ScriptInclude({
    $id: Now.ID['d7cd9154c43a4169bd08acf9b8c51352'],
    name: 'AccessService',
    script: Now.include('./sys_script_include_d7cd9154c43a4169bd08acf9b8c51352.server.js'),
    description: 'Project and portfolio access checks via PROJECT_MEMBER roles',
    apiName: 'x_gzi_zflow.AccessService',
    clientCallable: false,
    mobileCallable: false,
    sandboxCallable: false,
    active: true,
})
