import { ScriptInclude } from '@servicenow/sdk/core'

ScriptInclude({
    $id: Now.ID['28effcf82dfd43e9aaff2d1fd444acaa'],
    name: 'MemberService',
    script: Now.include('./sys_script_include_28effcf82dfd43e9aaff2d1fd444acaa.server.js'),
    description: 'Project/portfolio member CRUD with role sync to owner_id',
    apiName: 'x_gzi_ppm.MemberService',
    clientCallable: false,
    mobileCallable: false,
    sandboxCallable: false,
    active: true,
})
