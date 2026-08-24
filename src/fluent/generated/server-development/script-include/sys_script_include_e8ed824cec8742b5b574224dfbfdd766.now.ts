import { ScriptInclude } from '@servicenow/sdk/core'

ScriptInclude({
    $id: Now.ID['e8ed824cec8742b5b574224dfbfdd766'],
    name: 'AccessService',
    script: Now.include('./sys_script_include_e8ed824cec8742b5b574224dfbfdd766.server.js'),
    description: 'Project/portfolio access checks via membership roles',
    apiName: 'x_gzi_ppm.AccessService',
    clientCallable: false,
    mobileCallable: false,
    sandboxCallable: false,
    active: true,
})
