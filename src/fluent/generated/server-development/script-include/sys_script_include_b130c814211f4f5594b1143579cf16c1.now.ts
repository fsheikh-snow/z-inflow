import { ScriptInclude } from '@servicenow/sdk/core'

ScriptInclude({
    $id: Now.ID['b130c814211f4f5594b1143579cf16c1'],
    name: 'ViewDataService',
    script: Now.include('./sys_script_include_b130c814211f4f5594b1143579cf16c1.server.js'),
    description: 'Custom view and EAV pivot data for portfolio and project grids',
    apiName: 'x_gzi_zflow.ViewDataService',
    clientCallable: false,
    mobileCallable: false,
    sandboxCallable: false,
    active: true,
})
