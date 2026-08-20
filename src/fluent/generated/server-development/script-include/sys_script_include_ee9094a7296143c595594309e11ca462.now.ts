import { ScriptInclude } from '@servicenow/sdk/core'

ScriptInclude({
    $id: Now.ID['ee9094a7296143c595594309e11ca462'],
    name: 'CapacityService',
    script: Now.include('./sys_script_include_ee9094a7296143c595594309e11ca462.server.js'),
    description: 'Capacity plan grid and allocation aggregation',
    apiName: 'x_gzi_zflow.CapacityService',
    clientCallable: false,
    mobileCallable: false,
    sandboxCallable: false,
    active: true,
})
