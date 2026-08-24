import { ScriptInclude } from '@servicenow/sdk/core'

ScriptInclude({
    $id: Now.ID['b5cbd3fee13140219d532dcd1de480b9'],
    name: 'ViewDataService',
    script: Now.include('./sys_script_include_b5cbd3fee13140219d532dcd1de480b9.server.js'),
    description: 'Custom view and EAV pivot data for portfolio/project grids, kanban lanes',
    apiName: 'x_gzi_ppm.ViewDataService',
    clientCallable: false,
    mobileCallable: false,
    sandboxCallable: false,
    active: true,
})
