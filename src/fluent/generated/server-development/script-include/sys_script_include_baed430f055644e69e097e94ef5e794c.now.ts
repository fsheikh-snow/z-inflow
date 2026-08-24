import { ScriptInclude } from '@servicenow/sdk/core'

ScriptInclude({
    $id: Now.ID['baed430f055644e69e097e94ef5e794c'],
    name: 'CapacityService',
    script: Now.include('./sys_script_include_baed430f055644e69e097e94ef5e794c.server.js'),
    description: 'Capacity plan grid and allocation aggregation',
    apiName: 'x_gzi_ppm.CapacityService',
    clientCallable: false,
    mobileCallable: false,
    sandboxCallable: false,
    active: true,
})
