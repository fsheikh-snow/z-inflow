import { ScriptInclude } from '@servicenow/sdk/core'

ScriptInclude({
    $id: Now.ID['39aa08c1c05448d3804b63f822537b53'],
    name: 'PortfolioService',
    script: Now.include('./sys_script_include_39aa08c1c05448d3804b63f822537b53.server.js'),
    description: 'Portfolio CRUD, timeline, dashboard, progress, workload, project linking',
    apiName: 'x_gzi_ppm.PortfolioService',
    clientCallable: false,
    mobileCallable: false,
    sandboxCallable: false,
    active: true,
})
