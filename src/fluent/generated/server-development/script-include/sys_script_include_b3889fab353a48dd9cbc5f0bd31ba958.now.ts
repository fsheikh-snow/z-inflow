import { ScriptInclude } from '@servicenow/sdk/core'

ScriptInclude({
    $id: Now.ID['b3889fab353a48dd9cbc5f0bd31ba958'],
    name: 'PortfolioService',
    script: Now.include('./sys_script_include_b3889fab353a48dd9cbc5f0bd31ba958.server.js'),
    description: 'Portfolio list, timeline, dashboard, progress, workload, and project linking',
    apiName: 'x_gzi_zflow.PortfolioService',
    clientCallable: false,
    mobileCallable: false,
    sandboxCallable: false,
    active: true,
})
