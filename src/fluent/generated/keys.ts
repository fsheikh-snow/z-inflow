import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                    'access-service': {
                        table: 'sys_script_include'
                        id: '10530086c6b3039560ffa53b821a4342'
                    }
                    'acl-capacity_plan-create': {
                        table: 'sys_security_acl'
                        id: '73b467e8d54e470f9b8e30e8c81f0d56'
                    }
                    'acl-capacity_plan-delete': {
                        table: 'sys_security_acl'
                        id: 'd567737f4d6a4247a3af0b2a4d27aed6'
                    }
                    'acl-capacity_plan-read': {
                        table: 'sys_security_acl'
                        id: '69329d70e5b7436082caf91fbf082c8a'
                    }
                    'acl-capacity_plan-write': {
                        table: 'sys_security_acl'
                        id: 'a8eeff1c45784981a0abcf48fd8c13f1'
                    }
                    'acl-custom_field_def-create': {
                        table: 'sys_security_acl'
                        id: '136cc98b353a4c3aba36b7cad0cfc154'
                    }
                    'acl-custom_field_def-delete': {
                        table: 'sys_security_acl'
                        id: '28fefea7d88544888d41f4e73007c6b7'
                    }
                    'acl-custom_field_def-read': {
                        table: 'sys_security_acl'
                        id: 'e4c2dacbb11941ce9845d917b3851011'
                    }
                    'acl-custom_field_def-write': {
                        table: 'sys_security_acl'
                        id: '28abed8987db4198b0db604a4e2911bc'
                    }
                    'acl-custom_field_setting-create': {
                        table: 'sys_security_acl'
                        id: '56f0a7b2692a4315bd536254ce2ad455'
                    }
                    'acl-custom_field_setting-delete': {
                        table: 'sys_security_acl'
                        id: 'ac684a292bc94ee7b4f4803bf1ca91c9'
                    }
                    'acl-custom_field_setting-read': {
                        table: 'sys_security_acl'
                        id: 'e27e14f8d05e4610807f2b5a8c64a852'
                    }
                    'acl-custom_field_setting-write': {
                        table: 'sys_security_acl'
                        id: 'bb9b233e644042e484e5948fddaab552'
                    }
                    'acl-custom_field_value-create': {
                        table: 'sys_security_acl'
                        id: '19b956ae13044510a80fb845a62a9d28'
                    }
                    'acl-custom_field_value-delete': {
                        table: 'sys_security_acl'
                        id: '89d2849feb8746a3a0418a0e6dddd4c9'
                    }
                    'acl-custom_field_value-read': {
                        table: 'sys_security_acl'
                        id: 'c8c59dfed7bb4eaab77295bd6d9dfa2e'
                    }
                    'acl-custom_field_value-write': {
                        table: 'sys_security_acl'
                        id: '717eca5281de4c828cb7949c44279441'
                    }
                    'acl-custom_view_column-create': {
                        table: 'sys_security_acl'
                        id: 'c8bb503c93fa4b85930cac5b1cab3611'
                    }
                    'acl-custom_view_column-delete': {
                        table: 'sys_security_acl'
                        id: 'c5c08bd6d7674d4eab6e3bba148172d0'
                    }
                    'acl-custom_view_column-read': {
                        table: 'sys_security_acl'
                        id: '8d8ad53fdd25472ea96873fd50e751f8'
                    }
                    'acl-custom_view_column-write': {
                        table: 'sys_security_acl'
                        id: '4bdb43c54c7e47e59152d5e9e70597a9'
                    }
                    'acl-custom_view-create': {
                        table: 'sys_security_acl'
                        id: 'c510984554af4508b791cecd37f63ab7'
                    }
                    'acl-custom_view-delete': {
                        table: 'sys_security_acl'
                        id: '157516f3a2a94ab0a2e93a24b0903086'
                    }
                    'acl-custom_view-read': {
                        table: 'sys_security_acl'
                        id: '7ca55cedc7c240acac78d5db32d4a363'
                    }
                    'acl-custom_view-write': {
                        table: 'sys_security_acl'
                        id: 'ef904786de2f4398a48a862b4285fab1'
                    }
                    'acl-goal-create': {
                        table: 'sys_security_acl'
                        id: '0764f2837e8846ccb21bec627d836bdd'
                    }
                    'acl-goal-delete': {
                        table: 'sys_security_acl'
                        id: 'd9d2f3e43cd749ff9896b42c38b3702a'
                    }
                    'acl-goal-read': {
                        table: 'sys_security_acl'
                        id: '12c6129a819a4822b81a1cc83304debf'
                    }
                    'acl-goal-write': {
                        table: 'sys_security_acl'
                        id: '1261c1826e5d47a0a963732afd58e954'
                    }
                    'acl-portfolio_member-create': {
                        table: 'sys_security_acl'
                        id: '88da84cbe2a84022bee9f0a9c6e437e7'
                    }
                    'acl-portfolio_member-delete': {
                        table: 'sys_security_acl'
                        id: '2598579aa48c4fc581647d80ac113779'
                    }
                    'acl-portfolio_member-read': {
                        table: 'sys_security_acl'
                        id: '1a488d67371541d193ed0c8f853cbfdd'
                    }
                    'acl-portfolio_member-write': {
                        table: 'sys_security_acl'
                        id: 'bbfefaf459d745e59e617a0222c69793'
                    }
                    'acl-portfolio_project-create': {
                        table: 'sys_security_acl'
                        id: '7f40f35184204fc9bd4a129721ce1605'
                    }
                    'acl-portfolio_project-delete': {
                        table: 'sys_security_acl'
                        id: 'f0832c0807d9418ebae47a0a946fa827'
                    }
                    'acl-portfolio_project-read': {
                        table: 'sys_security_acl'
                        id: '502457d9c3b04ad4a15b37da3abedb1d'
                    }
                    'acl-portfolio_project-write': {
                        table: 'sys_security_acl'
                        id: 'b073a6487235430f9b0b00f5893b4c05'
                    }
                    'acl-portfolio-create': {
                        table: 'sys_security_acl'
                        id: '23483f0fae5c47b1aa7949a7382d5676'
                    }
                    'acl-portfolio-delete': {
                        table: 'sys_security_acl'
                        id: 'c70c98937e4b46a2acef75757d4a7d6a'
                    }
                    'acl-portfolio-read': {
                        table: 'sys_security_acl'
                        id: '7cf88512d14246319406759bd62703c3'
                    }
                    'acl-portfolio-write': {
                        table: 'sys_security_acl'
                        id: 'b3d4f78786414d0e9ae945fb52c31fc6'
                    }
                    'acl-project_member-create': {
                        table: 'sys_security_acl'
                        id: '684dbbf23c744f0ea03e953f10c9c057'
                    }
                    'acl-project_member-delete': {
                        table: 'sys_security_acl'
                        id: 'b4bbc84446b64608bfc35560b898a649'
                    }
                    'acl-project_member-read': {
                        table: 'sys_security_acl'
                        id: '0d934aaf4c0a4f24afc0c25c3782a38b'
                    }
                    'acl-project_member-write': {
                        table: 'sys_security_acl'
                        id: '060adb2ba6ba4a50a269a77e0a665932'
                    }
                    'acl-project_resource_allocation-create': {
                        table: 'sys_security_acl'
                        id: 'dd88d3558a434184b964ac10b267c73a'
                    }
                    'acl-project_resource_allocation-delete': {
                        table: 'sys_security_acl'
                        id: 'df41ba0d3b9a4ee893be7be6137901a5'
                    }
                    'acl-project_resource_allocation-read': {
                        table: 'sys_security_acl'
                        id: 'fee0dd16e87a4ef19398818a0a685a5f'
                    }
                    'acl-project_resource_allocation-write': {
                        table: 'sys_security_acl'
                        id: 'da49f28099a74cb4b2a14b56a6fe0c3f'
                    }
                    'acl-project_task-create': {
                        table: 'sys_security_acl'
                        id: '4d6b4452ef344e3596c84da1e452b2d4'
                    }
                    'acl-project_task-delete': {
                        table: 'sys_security_acl'
                        id: '2a49e5f7172548dab56f5ca8fae31636'
                    }
                    'acl-project_task-read': {
                        table: 'sys_security_acl'
                        id: '2280f4c934ae4933b3ed4aed11cb7e98'
                    }
                    'acl-project_task-write': {
                        table: 'sys_security_acl'
                        id: '1b57d45b5c99463eae7694595628640f'
                    }
                    'acl-project-create': {
                        table: 'sys_security_acl'
                        id: '0bf8e062cd1d492fb855a5713203c228'
                    }
                    'acl-project-delete': {
                        table: 'sys_security_acl'
                        id: '1b2b7c91330e459982e7b067de6d882a'
                    }
                    'acl-project-read': {
                        table: 'sys_security_acl'
                        id: '07f7b22f8bcb484b89b2838f02344d51'
                    }
                    'acl-project-write': {
                        table: 'sys_security_acl'
                        id: 'd10d6df6f1814cf9accacb2be6654f3e'
                    }
                    'acl-resource_role-create': {
                        table: 'sys_security_acl'
                        id: '257d3bb4ebdb4559930b09da8d094773'
                    }
                    'acl-resource_role-delete': {
                        table: 'sys_security_acl'
                        id: '9646e81dab6e424d8d0f2450b5e79841'
                    }
                    'acl-resource_role-read': {
                        table: 'sys_security_acl'
                        id: '528cce346f5d438dad0a016a3b6822ef'
                    }
                    'acl-resource_role-write': {
                        table: 'sys_security_acl'
                        id: '754b482f10cf412cac03bdbb3e806650'
                    }
                    'acl-rest-api-execute': {
                        table: 'sys_security_acl'
                        id: '394476b417334d878204409689b50624'
                    }
                    'acl-section-create': {
                        table: 'sys_security_acl'
                        id: 'af1635a2477d4f3996282293586a7afb'
                    }
                    'acl-section-delete': {
                        table: 'sys_security_acl'
                        id: '821220e6860d42d4b1586b9aa75a6e1f'
                    }
                    'acl-section-read': {
                        table: 'sys_security_acl'
                        id: 'bbdf1271e1264237accb782157c2d2f9'
                    }
                    'acl-section-write': {
                        table: 'sys_security_acl'
                        id: 'cd7b390bf5764ce6a18325ed49ee28c5'
                    }
                    'acl-status_update-create': {
                        table: 'sys_security_acl'
                        id: 'bec4c6622735483ebef9d24077c90ff6'
                    }
                    'acl-status_update-delete': {
                        table: 'sys_security_acl'
                        id: 'da8c7cd413114280a11503937819e496'
                    }
                    'acl-status_update-read': {
                        table: 'sys_security_acl'
                        id: 'c7d81370707e4f91abf9c607fcf858f2'
                    }
                    'acl-status_update-write': {
                        table: 'sys_security_acl'
                        id: 'ee4a6f0a2024425dbbf7d59e15c89822'
                    }
                    'acl-task_dependency-create': {
                        table: 'sys_security_acl'
                        id: '4b29767ecdc444d495ebd00988726fd2'
                    }
                    'acl-task_dependency-delete': {
                        table: 'sys_security_acl'
                        id: '57b741beb3c0471fbbc137bfad113221'
                    }
                    'acl-task_dependency-read': {
                        table: 'sys_security_acl'
                        id: '3b91effc6d5d4685bd9e3a852959d7e4'
                    }
                    'acl-task_dependency-write': {
                        table: 'sys_security_acl'
                        id: '89c75b4c80424f51a37abe07d7dfea8c'
                    }
                    'acl-task-create': {
                        table: 'sys_security_acl'
                        id: 'cd65dbc086d345138f38ceaed40cfd21'
                    }
                    'acl-task-delete': {
                        table: 'sys_security_acl'
                        id: '8e8c98f96fb3464381bebad70a1e407d'
                    }
                    'acl-task-read': {
                        table: 'sys_security_acl'
                        id: '13342f54b1484a57936bc9faca8dc75e'
                    }
                    'acl-task-write': {
                        table: 'sys_security_acl'
                        id: 'ffd421cf42dd433ab2e3c2f13622c016'
                    }
                    'acl-user_capacity-create': {
                        table: 'sys_security_acl'
                        id: 'd155fb3c487e46e8be2db6526ac4c519'
                    }
                    'acl-user_capacity-delete': {
                        table: 'sys_security_acl'
                        id: 'c62842461f074fad969f6f42cccce841'
                    }
                    'acl-user_capacity-read': {
                        table: 'sys_security_acl'
                        id: 'e5f5cdb24757494ca88812fcf8031466'
                    }
                    'acl-user_capacity-write': {
                        table: 'sys_security_acl'
                        id: '3e672ac479c644a59a5609f0939ae994'
                    }
                    'acl-user_resource_profile-create': {
                        table: 'sys_security_acl'
                        id: '9dfe20371e8548c9bf6401082a084cd9'
                    }
                    'acl-user_resource_profile-delete': {
                        table: 'sys_security_acl'
                        id: 'e3d898f3501848d6bce8d34c0a7986bd'
                    }
                    'acl-user_resource_profile-read': {
                        table: 'sys_security_acl'
                        id: '05c7a5c5d5ac45b08230865cdf1832c0'
                    }
                    'acl-user_resource_profile-write': {
                        table: 'sys_security_acl'
                        id: 'cd7ad140672f45fbb501945b81bc784e'
                    }
                    'acl-workspace_team-create': {
                        table: 'sys_security_acl'
                        id: 'cedd39571d134b0d80a27a4ce3d41e74'
                    }
                    'acl-workspace_team-delete': {
                        table: 'sys_security_acl'
                        id: 'cbea80d485eb49e98de64cd4f68a6eb8'
                    }
                    'acl-workspace_team-read': {
                        table: 'sys_security_acl'
                        id: 'd54135add8f743e199fe12e8bfb117e0'
                    }
                    'acl-workspace_team-write': {
                        table: 'sys_security_acl'
                        id: '193446031f8349cc86ce9129fb40de41'
                    }
                    'acl-workspace_user-create': {
                        table: 'sys_security_acl'
                        id: '439b18e6a89e4b73ac0e6f8910c430b5'
                    }
                    'acl-workspace_user-delete': {
                        table: 'sys_security_acl'
                        id: 'd9bc3ab51095402eade3b5238d879a8c'
                    }
                    'acl-workspace_user-read': {
                        table: 'sys_security_acl'
                        id: 'a1be0a7cfbd442d7b0078c2ed61738a9'
                    }
                    'acl-workspace_user-write': {
                        table: 'sys_security_acl'
                        id: '2ffae2a065b7470a84cd1c82c3600f86'
                    }
                    'acl-workspace-create': {
                        table: 'sys_security_acl'
                        id: 'b44003bf6d4847e1854c86acf2d612a0'
                    }
                    'acl-workspace-delete': {
                        table: 'sys_security_acl'
                        id: '04b9b2060d104519ab424bdfe7880bb4'
                    }
                    'acl-workspace-read': {
                        table: 'sys_security_acl'
                        id: '37c03e0eec50418882255ff961655304'
                    }
                    'acl-workspace-write': {
                        table: 'sys_security_acl'
                        id: 'c828281e1d1c4f5281b473abf56c39b2'
                    }
                    bom_json: {
                        table: 'sys_module'
                        id: '33ab2012bf9f43c19e799fada2128c63'
                    }
                    'br-eav-xor-validation': {
                        table: 'sys_script'
                        id: '04b4a3fa5b140d042fb5a0da309c89d4'
                    }
                    'br-task-single-assignee': {
                        table: 'sys_script'
                        id: 'cb550c14e22ef818f33c0cbf132472f7'
                    }
                    'capacity-service': {
                        table: 'sys_script_include'
                        id: '4b64599a376433db319910d94095e91d'
                    }
                    'default-workspace': {
                        table: 'x_gzi_zscaler_ppm_workspace'
                        id: '48755ffd29e84b0da3cf355f554608ef'
                    }
                    'member-service': {
                        table: 'sys_script_include'
                        id: '059490787fe46f27e6b17a53ea752b28'
                    }
                    package_json: {
                        table: 'sys_module'
                        id: '368389212d8b41958e54b3bbfd7e9d14'
                    }
                    'portfolio-service': {
                        table: 'sys_script_include'
                        id: 'e25b79d83b0ff260c3ff576e1f9e0311'
                    }
                    'project-task-service': {
                        table: 'sys_script_include'
                        id: '96a8d09a4bd299afbe0c23105360859e'
                    }
                    'route-automations-get': {
                        table: 'sys_ws_operation'
                        id: '51fceeae66607affdfc8b19f6e135a4e'
                    }
                    'route-capacity-plan-allocation-patch': {
                        table: 'sys_ws_operation'
                        id: '34d686e8b7da971f9a5566a1628e071c'
                    }
                    'route-capacity-plan-allocations-get': {
                        table: 'sys_ws_operation'
                        id: 'ba9844284a3bea933dd3612ed8b1788d'
                    }
                    'route-capacity-plan-get': {
                        table: 'sys_ws_operation'
                        id: 'f4b2b17a1185d2ae85d55c99c75e0159'
                    }
                    'route-capacity-plan-grid-get': {
                        table: 'sys_ws_operation'
                        id: '6979eb2ed75fc4b963f8931c8771d41c'
                    }
                    'route-capacity-plans-get': {
                        table: 'sys_ws_operation'
                        id: 'db56de0f4afb18e8ef5719abc39cecc0'
                    }
                    'route-custom-field-values-get': {
                        table: 'sys_ws_operation'
                        id: '0b71c5cbce45b1b2f27b619ee1f5ffc2'
                    }
                    'route-custom-field-values-post': {
                        table: 'sys_ws_operation'
                        id: '31b65c57e0ca123a2cf6a582cf432139'
                    }
                    'route-custom-fields-get': {
                        table: 'sys_ws_operation'
                        id: 'd458d9d671b892b9d1cf62bd1eede0c4'
                    }
                    'route-groups-search-get': {
                        table: 'sys_ws_operation'
                        id: 'c5de6c5f2f6f36c32b4aea3e3235f802'
                    }
                    'route-intake-forms-get': {
                        table: 'sys_ws_operation'
                        id: 'c1cb9b7207de4e9951064d8f9017bd42'
                    }
                    'route-portfolio-dashboard-get': {
                        table: 'sys_ws_operation'
                        id: 'f6e113d516061f8614a0f8556efdb9a7'
                    }
                    'route-portfolio-get': {
                        table: 'sys_ws_operation'
                        id: 'dcfc64b48653cc815eac22cce72e0038'
                    }
                    'route-portfolio-member-delete': {
                        table: 'sys_ws_operation'
                        id: '31e1b6e7e7c33d41dbaafa505c24fa69'
                    }
                    'route-portfolio-member-patch': {
                        table: 'sys_ws_operation'
                        id: 'b7342da899f6267486cb0fa65d06546a'
                    }
                    'route-portfolio-members-get': {
                        table: 'sys_ws_operation'
                        id: '9bd150c1cd469e3cc8ff83175d56e1b6'
                    }
                    'route-portfolio-members-post': {
                        table: 'sys_ws_operation'
                        id: '68f7f554d2d38ed1c52d97c16f5f4883'
                    }
                    'route-portfolio-patch': {
                        table: 'sys_ws_operation'
                        id: 'b8a77a697557679828ca145cd4b3c380'
                    }
                    'route-portfolio-progress-get': {
                        table: 'sys_ws_operation'
                        id: '5a5cd91c0a1d109937606e7a04e782db'
                    }
                    'route-portfolio-projects-delete': {
                        table: 'sys_ws_operation'
                        id: 'e9875ec36dba18b7c9be7844f12c2c39'
                    }
                    'route-portfolio-projects-post': {
                        table: 'sys_ws_operation'
                        id: '2f0c0c0b9b44d193c7bea9417beaa8d4'
                    }
                    'route-portfolio-timeline-get': {
                        table: 'sys_ws_operation'
                        id: 'e96cc825dfffa9b4784c5d5a7e75fd37'
                    }
                    'route-portfolio-view-data-get': {
                        table: 'sys_ws_operation'
                        id: 'fc54200f142967595c751d2d47efce17'
                    }
                    'route-portfolio-views-get': {
                        table: 'sys_ws_operation'
                        id: '8fb40508232aea25f8e4c110c5e89b35'
                    }
                    'route-portfolio-workload-get': {
                        table: 'sys_ws_operation'
                        id: '9b9ba5f13a9e000d246c292a193b7e4a'
                    }
                    'route-portfolios-get': {
                        table: 'sys_ws_operation'
                        id: 'b720d573b3e7c90c6395f896cff36f1d'
                    }
                    'route-portfolios-post': {
                        table: 'sys_ws_operation'
                        id: 'dbe69c89e750be77a57a4387c129bdf2'
                    }
                    'route-project-board-get': {
                        table: 'sys_ws_operation'
                        id: '5417f5d9ed6896e8b058ef7a18341cae'
                    }
                    'route-project-board-patch': {
                        table: 'sys_ws_operation'
                        id: 'e8f8ee78715bf37e67c1e2cb177d514c'
                    }
                    'route-project-get': {
                        table: 'sys_ws_operation'
                        id: '170eb71d7bb502c40d8e776eac40f1c1'
                    }
                    'route-project-member-delete': {
                        table: 'sys_ws_operation'
                        id: 'fe12511a3a566f92b68032301f16e4cc'
                    }
                    'route-project-member-patch': {
                        table: 'sys_ws_operation'
                        id: '5efde3a0ef48bd74070c86f02b8cf258'
                    }
                    'route-project-members-get': {
                        table: 'sys_ws_operation'
                        id: 'c9e9be3f123b87ea9f1a5ece7a7a03a3'
                    }
                    'route-project-members-post': {
                        table: 'sys_ws_operation'
                        id: '5c369744306ccff521bcbfa1094b6b29'
                    }
                    'route-project-patch': {
                        table: 'sys_ws_operation'
                        id: '5a194090e9664b4a6ab23e848c3ea9fa'
                    }
                    'route-project-portfolios-get': {
                        table: 'sys_ws_operation'
                        id: 'f74b6c713c6019fe5a725e9ff31ff3a7'
                    }
                    'route-project-section-delete': {
                        table: 'sys_ws_operation'
                        id: 'c7a4bf38c143446682d8e388038de02b'
                    }
                    'route-project-section-patch': {
                        table: 'sys_ws_operation'
                        id: '8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e'
                    }
                    'route-project-section-post': {
                        table: 'sys_ws_operation'
                        id: '980e83efe52140068f650e03fad7f3da'
                    }
                    'route-project-sections-get': {
                        table: 'sys_ws_operation'
                        id: 'fd91e902b3044b3965875b630745705a'
                    }
                    'route-project-sections-post': {
                        table: 'sys_ws_operation'
                        id: '7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d'
                    }
                    'route-project-sections-reorder-patch': {
                        table: 'sys_ws_operation'
                        id: '9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f'
                    }
                    'route-project-task-list-patch': {
                        table: 'sys_ws_operation'
                        id: '1d2e3f4a5b6c7d8e9f0a1b2c3d4e5f6a'
                    }
                    'route-project-tasks-get': {
                        table: 'sys_ws_operation'
                        id: 'a051b06c9aa15fb46c56282aa8cec08a'
                    }
                    'route-project-tasks-post': {
                        table: 'sys_ws_operation'
                        id: 'bebd76de5dc1fd60ea61f5026c9dbaf7'
                    }
                    'route-projects-get': {
                        table: 'sys_ws_operation'
                        id: '311c17c8c94aa390cef65fa111083dba'
                    }
                    'route-projects-post': {
                        table: 'sys_ws_operation'
                        id: 'a20e4097cba31d056e45db8ec4fb3b9b'
                    }
                    'route-task-get': {
                        table: 'sys_ws_operation'
                        id: 'cbe51aae66b056923276fa91e7526d96'
                    }
                    'route-task-patch': {
                        table: 'sys_ws_operation'
                        id: 'bc61b07fe83dc68a9d7888e408a3edec'
                    }
                    'route-task-projects-get': {
                        table: 'sys_ws_operation'
                        id: 'd04d5c1fe5e0f38346c42ceffbae8b01'
                    }
                    'route-team-members-get': {
                        table: 'sys_ws_operation'
                        id: '113038c544cb42f4683d2c4eb748156a'
                    }
                    'route-users-search-get': {
                        table: 'sys_ws_operation'
                        id: 'eb1e9da4845f158b4a88c1c951d92917'
                    }
                    'route-view-get': {
                        table: 'sys_ws_operation'
                        id: 'bd14d839115a3935552e76009f6cd7c5'
                    }
                    'route-view-patch': {
                        table: 'sys_ws_operation'
                        id: 'cd369eaacf7d50de91000fe63e6285e4'
                    }
                    'src_server_business-rules_enforce-eav-xor_ts': {
                        table: 'sys_module'
                        id: 'a079119e4b4a4f2682dcad6421488215'
                    }
                    'src_server_business-rules_enforce-single-assignee_ts': {
                        table: 'sys_module'
                        id: '84ebde4fbb124283a76de210545dd49a'
                    }
                    'src_server_rest_capacity-routes_ts': {
                        table: 'sys_module'
                        id: '3cd932643bf549b8aabb7278009290d7'
                    }
                    'src_server_rest_config-routes_ts': {
                        table: 'sys_module'
                        id: 'f33d53b9f79346d98c0c92d19fef5fcd'
                    }
                    src_server_rest_helpers_ts: {
                        table: 'sys_module'
                        id: 'fbb56351c07148c8b0ecd9b73cba2dbd'
                    }
                    'src_server_rest_member-routes_ts': {
                        table: 'sys_module'
                        id: '103e762845c74655a6f846322e4fdf7e'
                    }
                    'src_server_rest_portfolio-routes_ts': {
                        table: 'sys_module'
                        id: '41e5447c62bb4e39b4fc4000488d73b7'
                    }
                    'src_server_rest_project-routes_ts': {
                        table: 'sys_module'
                        id: '3846763683204d5988e9dc65f4d54f85'
                    }
                    'src_server_rest_view-routes_ts': {
                        table: 'sys_module'
                        id: '3a9c35fe21db4bec9abd22a5964cb9ef'
                    }
                    'src_server_script-includes_AccessService_server_js': {
                        table: 'sys_module'
                        id: '5c8ad6e4f4b34fc6a8165dc94049dbe0'
                    }
                    'src_server_script-includes_CapacityService_server_js': {
                        table: 'sys_module'
                        id: 'bc47624edede4d4faaaf5b1cc9944f75'
                    }
                    'src_server_script-includes_MemberService_server_js': {
                        table: 'sys_module'
                        id: 'be98b5030d60494496ca900f611412b2'
                    }
                    'src_server_script-includes_PortfolioService_server_js': {
                        table: 'sys_module'
                        id: 'd761cc151cf241428dfeb357b2e5dcb4'
                    }
                    'src_server_script-includes_ProjectTaskService_server_js': {
                        table: 'sys_module'
                        id: '19dd7f9de69c43c58e31ba3253553b0e'
                    }
                    'src_server_script-includes_UserService_server_js': {
                        table: 'sys_module'
                        id: '444b4e808e334f25967d0ef2cc43ebdd'
                    }
                    'src_server_script-includes_ViewDataService_server_js': {
                        table: 'sys_module'
                        id: 'e751004fb3fe49ec908bb328697837ef'
                    }
                    'user-service': {
                        table: 'sys_script_include'
                        id: '56f0297711b7633f6acd168eca01a955'
                    }
                    'view-data-service': {
                        table: 'sys_script_include'
                        id: 'a2f5860e11ce00722835985d97b3f747'
                    }
                    'z-inflow-rest-api': {
                        table: 'sys_ws_definition'
                        id: 'ea866f2d081d748f4dcd6ade45500e7d'
                    }
                }
                composite: [
                    {
                        table: 'sys_documentation'
                        id: '001723abdcd846d18a7babb0fadba413'
                        key: {
                            name: 'x_gzi_zscaler_ppm_portfolio_member'
                            element: 'user_id'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '002a3f8d452c4641a8e6cc02fd96fcdf'
                        key: {
                            name: 'x_gzi_zscaler_ppm_status_update'
                            element: 'status'
                            value: 'no_recent_updates'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '014fc8d4aa5c437da4269561b265fcad'
                        key: {
                            name: 'x_gzi_zscaler_ppm_capacity_plan'
                            element: 'time_granularity'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '018be35ebbfe4499a58c0f3d12c0b0cb'
                        key: {
                            name: 'x_gzi_zscaler_ppm_task'
                            element: 'task_type'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '026e29eb4b6641579e760120bbe27884'
                        key: {
                            name: 'x_gzi_zscaler_ppm_cust_field_setting'
                            element: 'project_id'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '0300b4e8d1da4734a326d5284811f6dc'
                        key: {
                            name: 'x_gzi_zscaler_ppm_task'
                            element: 'approval_state'
                            value: 'reject'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sn_glider_source_artifact_m2m'
                        id: '03bfe121cb074162a97bdeaf2b40855c'
                        key: {
                            application_file: 'f4a7d551b68745afb3c6f7473cc04760'
                            source_artifact: '3fb176d7543f4b1cbac9d047cf854d49'
                        }
                    },
                    {
                        table: 'sys_index'
                        id: '03eecdd1eb6647dab8e63bfc8bf0ba40'
                        key: {
                            logical_table_name: 'x_gzi_zscaler_ppm_user_res_profile'
                            col_name_string: 'user_id,role_id'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '06537988515a470a996453c72943f85d'
                        key: {
                            name: 'x_gzi_zscaler_ppm_status_update'
                            element: 'entity_type'
                            value: 'project'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '06c737620c2843c8ad6f84030a7578a0'
                        key: {
                            name: 'x_gzi_zscaler_ppm_custom_view_column'
                            element: 'field_path'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '0914f882eb9a49f2bd66aa7fc4c80c21'
                        key: {
                            name: 'x_gzi_zscaler_ppm_project'
                            element: 'name'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '091cf3a60ee94d228bc5f82d6143f432'
                        key: {
                            name: 'x_gzi_zscaler_ppm_workspace_user'
                            element: 'workspace_id'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '09354fc92ae6442f91add76b881ba6bf'
                        key: {
                            name: 'x_gzi_zscaler_ppm_task'
                            element: 'status'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '09cdafc34c324040a3897c33cb3fd1e8'
                        key: {
                            name: 'x_gzi_zscaler_ppm_user_res_profile'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '0ac639c04bc04f7a868e3516d0bc8e0c'
                        key: {
                            name: 'x_gzi_zscaler_ppm_task'
                            element: 'status'
                            value: 'in_progress'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '0ae890a3b97c4d089493a069968e371d'
                        key: {
                            name: 'x_gzi_zscaler_ppm_capacity_plan'
                            element: 'portfolio_id'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '0af979c593af4ec29476ce485b94f063'
                        key: {
                            name: 'x_gzi_zscaler_ppm_task_dependency'
                            element: 'predecessor_task_id'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '0b7d662fdb6d4925a5ec50e4dc7ff57d'
                        key: {
                            name: 'x_gzi_zscaler_ppm_portfolio'
                            element: 'owner_id'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '0c04b5805baf44419409fa2d645cd5ad'
                        key: {
                            name: 'x_gzi_zscaler_ppm_capacity_plan'
                            element: 'name'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '0c47f7a389e1426f951b0883849d631b'
                        key: {
                            name: 'x_gzi_zscaler_ppm_task_dependency'
                            element: 'predecessor_task_id'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '0c65fedeca19486ba2e229ec82871074'
                        key: {
                            name: 'x_gzi_zscaler_ppm_project'
                            element: 'priority'
                            value: 'low'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '0c74f49977414dc396e5bb5fdcddf4f7'
                        key: {
                            name: 'x_gzi_zscaler_ppm_cust_field_setting'
                            element: 'field_def_id'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '0cbae148a9f74859a6cd18bceb6aadcf'
                        key: {
                            name: 'x_gzi_zscaler_ppm_cust_field_setting'
                            element: 'project_id'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '0cecfcaee85b4457a813e181ddf3e12c'
                        key: {
                            name: 'x_gzi_zscaler_ppm_proj_res_alloc'
                            element: 'start_date'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '0d99b5d6b98f40858340ff2ac6968596'
                        key: {
                            name: 'x_gzi_zscaler_ppm_project'
                            element: 'status'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '0db9509476834b5da6d4d8ece08ea1aa'
                        key: {
                            name: 'x_gzi_zscaler_ppm_custom_field_value'
                            element: 'project_id'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '0e4fc4647a3f42e188a6434ff6e2f2c4'
                        key: {
                            name: 'x_gzi_zscaler_ppm_project'
                            element: 'sync_with_jira'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '0e9d1a3650cc491aa396e78d315ee78b'
                        key: {
                            name: 'x_gzi_zscaler_ppm_custom_field_value'
                            element: 'value_number'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '1073d9fe259d48c58b1605a626d26ddb'
                        key: {
                            name: 'x_gzi_zscaler_ppm_workspace'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '111d8c3af66b4d099d2c1551254c9f5c'
                        key: {
                            name: 'x_gzi_zscaler_ppm_portfolio_project'
                            element: 'added_by'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '1152423a0f56438babd805f6719b3410'
                        key: {
                            name: 'x_gzi_zscaler_ppm_task'
                            element: 'start_date'
                            language: 'en'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '115afa080da0487d833c5df8584ec74c'
                        key: {
                            name: 'x_gzi_zscaler_ppm_portfolio_project'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '119b952cae16437f874ecd335e241eb3'
                        key: {
                            name: 'x_gzi_zscaler_ppm_project'
                            element: 'status'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '11e62b5a4b7a4e82adf44455f5e93715'
                        key: {
                            name: 'x_gzi_zscaler_ppm_project_task'
                            element: 'task_id'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '1248552e6acf4cc7ad53f565915cc713'
                        key: {
                            name: 'x_gzi_zscaler_ppm_task'
                            element: 'due_date'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '12cd3fd13f46443881045445d621a3ae'
                        key: {
                            name: 'x_gzi_zscaler_ppm_status_update'
                            element: 'status'
                            value: 'on_track'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '13f11e34c1664aa98529c3298c58dca3'
                        key: {
                            name: 'x_gzi_zscaler_ppm_project_member'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '15764f73b70643f7a0c2290d36a6241f'
                        key: {
                            name: 'x_gzi_zscaler_ppm_custom_view'
                            element: 'group_by'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '1617c7701e1b45beb4b2f05c4e059084'
                        key: {
                            name: 'x_gzi_zscaler_ppm_task'
                            element: 'approval_state'
                            value: 'approve'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '166380d0dc84433381364193ba5ee579'
                        key: {
                            name: 'x_gzi_zscaler_ppm_portfolio_member'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '166f4731d42544028e4650dd954150f1'
                        key: {
                            name: 'x_gzi_zscaler_ppm_project'
                            element: 'start_date'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '168c16e53f084fd38967ef3574ac5de4'
                        key: {
                            name: 'x_gzi_zscaler_ppm_portfolio_member'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '1695ec85193e44a9aea4465c9aa78bb2'
                        key: {
                            name: 'x_gzi_zscaler_ppm_section'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '16e357d4255047c39416b6ec0360d04f'
                        key: {
                            name: 'x_gzi_zscaler_ppm_custom_view'
                            element: 'filter_query'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '172d6f7f7f5a48bdb9b3f16308e5c917'
                        key: {
                            name: 'x_gzi_zscaler_ppm_user_capacity'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '1894428aeb72467fb1437c135849df7c'
                        key: {
                            name: 'x_gzi_zscaler_ppm_task'
                            element: 'status'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_index'
                        id: '190dd691cfd14932b6ebd65d7f9c0aa1'
                        key: {
                            logical_table_name: 'x_gzi_zscaler_ppm_workspace_user'
                            col_name_string: 'workspace_id,user_id'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '19a5b0fdb8fb4b5b8bdbd4ec779b27be'
                        key: {
                            name: 'x_gzi_zscaler_ppm_portfolio_member'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '1a0c6681e9e440e4a2c5922e48c1a0a2'
                        key: {
                            name: 'x_gzi_zscaler_ppm_cust_field_setting'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '1a4acfd4c218499fa5a52f3adf9b3652'
                        key: {
                            name: 'x_gzi_zscaler_ppm_portfolio_member'
                            element: 'role'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '1a4ca5327fa24b6692fdb488921ac7d3'
                        key: {
                            name: 'x_gzi_zscaler_ppm_task_dependency'
                            element: 'dependency_type'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '1a6ff1e684454ca0b7f9e80fa2f2bd9f'
                        key: {
                            name: 'x_gzi_zscaler_ppm_user_capacity'
                            element: 'user_profile_id'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '1aaf4a2955074590a2e2de857727acb3'
                        key: {
                            name: 'x_gzi_zscaler_ppm_task'
                            element: 'work_notes'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '1ad3cd2264eb432a8e718eb760a7b79a'
                        key: {
                            name: 'x_gzi_zscaler_ppm_task'
                            element: 'work_notes'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '1bfcf54021354aada432d5e6d672cce1'
                        key: {
                            name: 'x_gzi_zscaler_ppm_project'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '1cb8dcf013f0434ca2f19e6c7d467b4a'
                        key: {
                            name: 'x_gzi_zscaler_ppm_custom_view'
                            element: 'sort_config'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '1d940bc75da348499c76039bce70c0ea'
                        key: {
                            name: 'x_gzi_zscaler_ppm_project'
                            element: 'workspace_id'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '1db4aca0a73b4819b6bf65335ce3fb8c'
                        key: {
                            name: 'x_gzi_zscaler_ppm_project_member'
                            element: 'role'
                            value: 'editor'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '1dcfad95a7844bb69d82c79736511175'
                        key: {
                            name: 'x_gzi_zscaler_ppm_cust_field_setting'
                            element: 'portfolio_id'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '20cb1e00b43e434eb4f746a189c95101'
                        key: {
                            name: 'x_gzi_zscaler_ppm_goal'
                            element: 'workspace_id'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '2134fcbf10074811b84ab112e8eaf8a3'
                        key: {
                            name: 'x_gzi_zscaler_ppm_capacity_plan'
                            element: 'owner_id'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '214be7e6718c4efda1d4ff8c318d455a'
                        key: {
                            name: 'x_gzi_zscaler_ppm_task'
                            element: 'approval_state'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '24265bead2214f6290b916b61198f1e9'
                        key: {
                            name: 'x_gzi_zscaler_ppm_user_capacity'
                            element: 'baseline_hours_per_week'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '2544cc269b6549d7bb31811e8915e2e5'
                        key: {
                            name: 'x_gzi_zscaler_ppm_custom_view_column'
                            element: 'is_visible'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '2609d616fb834be09b9465009ad72649'
                        key: {
                            name: 'x_gzi_zscaler_ppm_custom_field_def'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '27cb13306f924e66bd6f65a722318b5d'
                        key: {
                            name: 'x_gzi_zscaler_ppm_proj_res_alloc'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '27def55eee8047ae84b0adca37d47f3a'
                        key: {
                            name: 'x_gzi_zscaler_ppm_project'
                            element: 'priority'
                            value: 'strategic'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '282dcda9939f4012813cf764be204fdf'
                        key: {
                            name: 'x_gzi_zscaler_ppm_project'
                            element: 'status'
                            value: 'on_hold'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '282f3d36e6bc4bb382560497e4a17981'
                        key: {
                            name: 'x_gzi_zscaler_ppm_custom_view'
                            element: 'is_default'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '2858c1a300294166bb7d89ddbf8cc5f2'
                        key: {
                            name: 'x_gzi_zscaler_ppm_portfolio'
                            element: 'description'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '29d5ac501cd44938a7cd4657919719ec'
                        key: {
                            name: 'x_gzi_zscaler_ppm_capacity_plan'
                            element: 'filter_config'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '2a20255b019845d582f294f22165e016'
                        key: {
                            name: 'x_gzi_zscaler_ppm_portfolio'
                            element: 'due_date'
                        }
                    },
                    {
                        table: 'sn_glider_source_artifact_m2m'
                        id: '2b3aac8fee374f11a38ad32651fb1a8f'
                        key: {
                            application_file: '7e165175d3963cf698f74a0e0042d7e4'
                            source_artifact: '3fb176d7543f4b1cbac9d047cf854d49'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '2b460f6ffb484296a9869d749ab8855e'
                        key: {
                            name: 'x_gzi_zscaler_ppm_custom_field_value'
                            element: 'value_string'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '2bf3ad03481a4cc6a2c51fa072617d5f'
                        key: {
                            name: 'x_gzi_zscaler_ppm_task'
                            element: 'task_type'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '2de4bb397d04455f9919d1c046cccbb1'
                        key: {
                            name: 'x_gzi_zscaler_ppm_status_update'
                            element: 'text'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '2e567ddc214e469da73933e9dab3d912'
                        key: {
                            name: 'x_gzi_zscaler_ppm_capacity_plan'
                            element: 'owner_id'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '2f59616afa7344a1a9f9c01a5413f1a6'
                        key: {
                            name: 'x_gzi_zscaler_ppm_custom_field_def'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '2feae0a8c0d643ef89a074ed3b9a6270'
                        key: {
                            name: 'x_gzi_zscaler_ppm_project'
                            element: 'name'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '30648851df7e4c1dba834bde548fd77f'
                        key: {
                            name: 'x_gzi_zscaler_ppm_resource_role'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '311e9b5ad0104b49a6a7be60becc50bc'
                        key: {
                            name: 'x_gzi_zscaler_ppm_project'
                            element: 'owner_id'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '337990075eca4e2b96fdc8b6ed34ca3f'
                        key: {
                            name: 'x_gzi_zscaler_ppm_workspace'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '33c9a1c721fd4de8bd09cf897e2a80e0'
                        key: {
                            name: 'x_gzi_zscaler_ppm_project'
                            element: 'assignment_group'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '34a06315e94d4d4898a879b8160aeac6'
                        key: {
                            name: 'x_gzi_zscaler_ppm_capacity_plan'
                            element: 'time_granularity'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '3508cf763db64b1889577b05aa8e4472'
                        key: {
                            name: 'x_gzi_zscaler_ppm_user_res_profile'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '35988894c73044d6b7e05f17eca138cd'
                        key: {
                            name: 'x_gzi_zscaler_ppm_section'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '36029a1e183142a9afbab216e8f8e1e9'
                        key: {
                            name: 'x_gzi_zscaler_ppm_task'
                            element: 'comments'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '361da7d429274e1e96091304a149231a'
                        key: {
                            name: 'x_gzi_zscaler_ppm_workspace'
                            element: 'name'
                        }
                    },
                    {
                        table: 'sn_glider_source_artifact_m2m'
                        id: '36cc17317d334af7b14f88a4fdb0e1b0'
                        key: {
                            application_file: '5ce97744a7d34256ac37f14a739e1377'
                            source_artifact: '3fb176d7543f4b1cbac9d047cf854d49'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '36daef2761774a049a8a5c2bbacd7998'
                        key: {
                            name: 'x_gzi_zscaler_ppm_status_update'
                            element: 'entity_type'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '373a4c39f73a45a6990bc06a8f5ce41b'
                        key: {
                            name: 'x_gzi_zscaler_ppm_status_update'
                            element: 'status'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '3770136967864e3aad5df178d41d6c0a'
                        key: {
                            name: 'x_gzi_zscaler_ppm_portfolio'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '380f2a41349e42ecac0d3e25a18580ac'
                        key: {
                            name: 'x_gzi_zscaler_ppm_project_task'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '388ca40b1bc8444e939ff7e9fc54b2e1'
                        key: {
                            name: 'x_gzi_zscaler_ppm_workspace_team'
                            element: 'group_id'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '3895a6a8949c453abe65da13762f6d9c'
                        key: {
                            name: 'x_gzi_zscaler_ppm_task'
                            element: 'description'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '38d24d056b514678ae461861853d93af'
                        key: {
                            name: 'x_gzi_zscaler_ppm_workspace_team'
                            element: 'group_id'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '3953d6d0c1ce458aadcce69ef157066c'
                        key: {
                            name: 'x_gzi_zscaler_ppm_project_member'
                            element: 'user_id'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '3a02747ea4cd445b82729abdc8fc1125'
                        key: {
                            name: 'x_gzi_zscaler_ppm_workspace_user'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '3a310e19e4564150b578c2284b4bc8a2'
                        key: {
                            name: 'x_gzi_zscaler_ppm_goal'
                            element: 'status'
                            value: 'on_track'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '3a487daf116b407dad7b5b42441fb853'
                        key: {
                            name: 'x_gzi_zscaler_ppm_custom_view'
                            element: 'group_by'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '3a4a4a7c1c6448bda72181c0c2a59d8d'
                        key: {
                            name: 'x_gzi_zscaler_ppm_status_update'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '3b09a723fbf745d1bfa4db2e79027f47'
                        key: {
                            name: 'x_gzi_zscaler_ppm_project'
                            element: 'due_date'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '3b2dca4f826f4655821578ff141e3370'
                        key: {
                            name: 'x_gzi_zscaler_ppm_project_task'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '3b6ccb1323344839ae7f7cc830f0b2d4'
                        key: {
                            name: 'x_gzi_zscaler_ppm_custom_field_def'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '3caa3210758a47979d448a1f7f2fcc77'
                        key: {
                            name: 'x_gzi_zscaler_ppm_portfolio_member'
                            element: 'portfolio_id'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '3ee0456c775e433e8714c808b5e8a955'
                        key: {
                            name: 'x_gzi_zscaler_ppm_status_update'
                            element: 'entity_type'
                            value: 'goal'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '3f1a6e3a38554dd5b435ecbab7f675c0'
                        key: {
                            name: 'x_gzi_zscaler_ppm_task'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sn_glider_source_artifact'
                        id: '3fb176d7543f4b1cbac9d047cf854d49'
                        key: {
                            name: 'x_gzi_zscaler_ppm_app.do - BYOUI Files'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '3fd3382d917342109fe367fb0f567ad7'
                        key: {
                            name: 'x_gzi_zscaler_ppm_task'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '4007151323a348f0a3a0a6b6873eae38'
                        key: {
                            name: 'x_gzi_zscaler_ppm_custom_field_def'
                            element: 'type'
                            value: 'text'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '4015369f0cbf404297cdcffc57628751'
                        key: {
                            name: 'x_gzi_zscaler_ppm_task'
                            element: 'priority'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '413240bd8ee8473eb24c788ec033b2d1'
                        key: {
                            name: 'x_gzi_zscaler_ppm_project_member'
                            element: 'project_id'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '41fa57c7229d49798c091a873aba4344'
                        key: {
                            name: 'x_gzi_zscaler_ppm_capacity_plan'
                            element: 'workspace_id'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '443b24bb681c40fdaf54a3ad90357d79'
                        key: {
                            name: 'x_gzi_zscaler_ppm_custom_view_column'
                            element: 'width'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ux_lib_asset'
                        id: '4456e0f1ef7e4ca786270cabd7d00cf5'
                        key: {
                            name: 'x_gzi_zscaler_ppm/vendor-react-dom--d9c8d218'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '44c4237af32d48bcb9538a3a256a2bce'
                        key: {
                            name: 'x_gzi_zscaler_ppm_user_res_profile'
                            element: 'user_id'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '450fb4184fa44ad6a8f925e2204dcafc'
                        key: {
                            name: 'x_gzi_zscaler_ppm_portfolio_project'
                            element: 'portfolio_id'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '452111d30e354cee800f3a0a79f82e0e'
                        key: {
                            name: 'x_gzi_zscaler_ppm_custom_view'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '4627e71c7515481485fe0e198199d81a'
                        key: {
                            name: 'x_gzi_zscaler_ppm_project_member'
                            element: 'role'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '464ee7d22f5b41ba8a039e4ad4247aff'
                        key: {
                            name: 'x_gzi_zscaler_ppm_capacity_plan'
                            element: 'time_granularity'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '4798ffdaebc445729553d05f70c26d29'
                        key: {
                            name: 'x_gzi_zscaler_ppm_goal'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '47adb7db42a34c768efb3f8569ba5b01'
                        key: {
                            name: 'x_gzi_zscaler_ppm_task'
                            element: 'assignee_id'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '484db06e687148af9a74a0f63de17523'
                        key: {
                            name: 'x_gzi_zscaler_ppm_workspace_user'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '4a20eda050f94d4aac8b6c5e245ae60b'
                        key: {
                            name: 'x_gzi_zscaler_ppm_custom_view_column'
                            element: 'view_id'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '4a89b1aa908c41128af848b8dc31d840'
                        key: {
                            name: 'x_gzi_zscaler_ppm_task'
                            element: 'task_type'
                            value: 'milestone'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '4b98b0edf97c43e28b569c7ea11d553b'
                        key: {
                            name: 'x_gzi_zscaler_ppm_resource_role'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '4bdb9699009642f9868549c6473efb0c'
                        key: {
                            name: 'x_gzi_zscaler_ppm_project'
                            element: 'start_date'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '4c044216397e4be5bd71aaef44bab9a5'
                        key: {
                            name: 'x_gzi_zscaler_ppm_project'
                            element: 'status'
                            value: 'at_risk'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '4c3a7b0a11d6432387791888852863f0'
                        key: {
                            name: 'x_gzi_zscaler_ppm_goal'
                            element: 'status'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '4c795508256b481fb85626d883ebd3df'
                        key: {
                            name: 'x_gzi_zscaler_ppm_project_member'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '4c94b515f000413ab0e00dda85f5481b'
                        key: {
                            name: 'x_gzi_zscaler_ppm_task'
                            element: 'completed'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '4d727b868ff54bf298dbd02e86f5fefe'
                        key: {
                            name: 'x_gzi_zscaler_ppm_project_member'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '4da490d86dd44f04bf715db156c5489c'
                        key: {
                            name: 'x_gzi_zscaler_ppm_task_dependency'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '4db3b92d3cf5458692086586b4344aaa'
                        key: {
                            name: 'x_gzi_zscaler_ppm_user_res_profile'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '4e1add440eab47528560557b2585c776'
                        key: {
                            name: 'x_gzi_zscaler_ppm_custom_field_def'
                            element: 'name'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '4f3469bb24314fdb8e4c536d8b6416f2'
                        key: {
                            name: 'x_gzi_zscaler_ppm_project_member'
                            element: 'role'
                            value: 'viewer'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '4fe0e328eea24baa97dda4f5f7bd2d97'
                        key: {
                            name: 'x_gzi_zscaler_ppm_portfolio_member'
                            element: 'role'
                            value: 'owner'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '5009132923b64c079c603fdc91605806'
                        key: {
                            name: 'x_gzi_zscaler_ppm_portfolio_member'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '500fb2c4bdc5406d98cb5893603d4863'
                        key: {
                            name: 'x_gzi_zscaler_ppm_status_update'
                            element: 'entity_type'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '50d8e0444e174203852a8ec3f73c0364'
                        key: {
                            name: 'x_gzi_zscaler_ppm_custom_view'
                            element: 'view_type'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '50ffc0cf9b8a41f6b4eb3cbace426a65'
                        key: {
                            name: 'x_gzi_zscaler_ppm_project'
                            element: 'priority'
                            value: 'high'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '5229fcb9fa3040f5b6ab6f6ae81784c4'
                        key: {
                            name: 'x_gzi_zscaler_ppm_custom_view'
                            element: 'user_id'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '5295f29f1ff9405693bc85e1343ebe3c'
                        key: {
                            name: 'x_gzi_zscaler_ppm_custom_field_value'
                            element: 'value_number'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '53c9aff72cbf4c60b2e11d7d7edb500a'
                        key: {
                            name: 'x_gzi_zscaler_ppm_project_task'
                            element: 'order_index'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '53d64f4869a544358a5750cb8df39f32'
                        key: {
                            name: 'x_gzi_zscaler_ppm_workspace'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '5430cb0bf186404889ce572e9ccac820'
                        key: {
                            name: 'x_gzi_zscaler_ppm_status_update'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '54375f51bc58469aa36e6b082856306e'
                        key: {
                            name: 'x_gzi_zscaler_ppm_custom_field_value'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '55d29cd8f46b46d292979ff59d3ca6cc'
                        key: {
                            name: 'x_gzi_zscaler_ppm_project_task'
                            element: 'section_id'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '56457d82cf6c4ab8a55f645ae1cc5932'
                        key: {
                            name: 'x_gzi_zscaler_ppm_project'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '56d4a29f4d2e401aaba93f185beaee8a'
                        key: {
                            name: 'x_gzi_zscaler_ppm_project'
                            element: 'priority'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '577990626a9442f1bcc9708fd4b4f31b'
                        key: {
                            name: 'x_gzi_zscaler_ppm_goal'
                            element: 'name'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '5841edf8c93240c3b01ae239a3561e1a'
                        key: {
                            name: 'x_gzi_zscaler_ppm_status_update'
                            element: 'status'
                            value: 'off_track'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '589a5d42b9774d1e93973128fde38e90'
                        key: {
                            name: 'x_gzi_zscaler_ppm_custom_field_def'
                            element: 'is_global_library'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '58eee188c35541c685b0d4a8e5267d19'
                        key: {
                            name: 'x_gzi_zscaler_ppm_project'
                            element: 'owner_id'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '5933d8ad33234939b29fdcfdae21d967'
                        key: {
                            name: 'x_gzi_zscaler_ppm_task'
                            element: 'due_date'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_index'
                        id: '595e98ffb18b43a685ab209137c96df8'
                        key: {
                            logical_table_name: 'x_gzi_zscaler_ppm_project_member'
                            col_name_string: 'project_id,user_id'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '59747b59b90e47a685063a80c6a79315'
                        key: {
                            name: 'x_gzi_zscaler_ppm_custom_field_value'
                            element: 'value_date'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '59b5c50aedd04a6b8cf225839d47791b'
                        key: {
                            name: 'x_gzi_zscaler_ppm_task'
                            element: 'name'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '5ab896be182644e987d837b149c33a7c'
                        key: {
                            name: 'x_gzi_zscaler_ppm_custom_view'
                            element: 'sort_config'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '5b490320d5e342c183b0a877c954fd83'
                        key: {
                            name: 'x_gzi_zscaler_ppm_section'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '5b5b6a5bca5c4c61aaa433bba10116f3'
                        key: {
                            name: 'x_gzi_zscaler_ppm_goal'
                            element: 'name'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '5b5f27011afd45f38147478a29be083f'
                        key: {
                            name: 'x_gzi_zscaler_ppm_user_capacity'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '5b75c64c7df04a21abc2874eb6b2c173'
                        key: {
                            name: 'x_gzi_zscaler_ppm_status_update'
                            element: 'status'
                            value: 'on_hold'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '5b8b90aca2884b158ab385cdf6a92bd3'
                        key: {
                            name: 'x_gzi_zscaler_ppm_task'
                            element: 'parent_task_id'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '5c98e72af176462db71772c913a72954'
                        key: {
                            name: 'x_gzi_zscaler_ppm_custom_view'
                            element: 'view_type'
                        }
                    },
                    {
                        table: 'sys_ux_lib_asset'
                        id: '5ce97744a7d34256ac37f14a739e1377'
                        key: {
                            name: 'x_gzi_zscaler_ppm/vendor-react-router--b9021bf5'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '5e8c93a6d654483eb47627b597957a2c'
                        key: {
                            name: 'x_gzi_zscaler_ppm_custom_view'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '5e8cd2f92b3041f9824884b26f3c4104'
                        key: {
                            name: 'x_gzi_zscaler_ppm_user_res_profile'
                            element: 'user_id'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '5f752f0e0d404bd5a421ea619dfce173'
                        key: {
                            name: 'x_gzi_zscaler_ppm_custom_field_value'
                            element: 'field_def_id'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '60ff72321db444e3b5e9dd6aa432959a'
                        key: {
                            name: 'x_gzi_zscaler_ppm_task'
                            element: 'status'
                            value: 'complete'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '616564479802412ca1e822ef60263868'
                        key: {
                            name: 'x_gzi_zscaler_ppm_task'
                            element: 'approval_state'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '619d68af30d34e65821a5f96886622a5'
                        key: {
                            name: 'x_gzi_zscaler_ppm_section'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '61ae38ce51ce4cf29e8c87efb46d272a'
                        key: {
                            name: 'x_gzi_zscaler_ppm_portfolio_member'
                            element: 'role'
                            value: 'commenter'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '621d15b509764e1d844bfa21849fc7b0'
                        key: {
                            name: 'x_gzi_zscaler_ppm_proj_res_alloc'
                            element: 'allocation_percentage'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '63ce3d00982844cba5f84bbba499cd6f'
                        key: {
                            name: 'x_gzi_zscaler_ppm_custom_view'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '660601c8cb82454dbccf04e0de3ec52f'
                        key: {
                            name: 'x_gzi_zscaler_ppm_portfolio_project'
                            element: 'order_index'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '66087e190b8044648abaaa837ebbeab5'
                        key: {
                            name: 'x_gzi_zscaler_ppm_status_update'
                            element: 'entity_id'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '66b7a4a831cc461c88e819b544e1f80e'
                        key: {
                            name: 'x_gzi_zscaler_ppm_user_res_profile'
                            element: 'role_id'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '681faf18d1134539ae95e1678e154f91'
                        key: {
                            name: 'x_gzi_zscaler_ppm_custom_view_column'
                            element: 'field_path'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '687c1edeee99467f8f63451142f0e019'
                        key: {
                            name: 'x_gzi_zscaler_ppm_capacity_plan'
                            element: 'group_id'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '68f7f040566a4cbd8b27ce3baaaa39f7'
                        key: {
                            name: 'x_gzi_zscaler_ppm_project'
                            element: 'status'
                            value: 'off_track'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '692822ddb8804601b7b8bc2a9e7e8ce2'
                        key: {
                            name: 'x_gzi_zscaler_ppm_capacity_plan'
                            element: 'filter_config'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '6af0093d38bf44e8a9c33213505d95e9'
                        key: {
                            name: 'x_gzi_zscaler_ppm_proj_res_alloc'
                            element: 'role_id'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '6b8aa44543394e75b37a6f7829aea6c6'
                        key: {
                            name: 'x_gzi_zscaler_ppm_custom_view'
                            element: 'name'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '6d082f791d464edfb12c1d876eeade60'
                        key: {
                            name: 'x_gzi_zscaler_ppm_status_update'
                            element: 'entity_type'
                            value: 'portfolio'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '6d7a5d9f57f444c9a1212a9a72a4528e'
                        key: {
                            name: 'x_gzi_zscaler_ppm_task_dependency'
                            element: 'dependency_type'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '6e378bc33ef94d1396a8fbddb70f6412'
                        key: {
                            name: 'x_gzi_zscaler_ppm_project_task'
                            element: 'order_index'
                        }
                    },
                    {
                        table: 'sys_user_role'
                        id: '6ec56a8879414fcab5bfc5505ce8eb70'
                        key: {
                            name: 'x_gzi_zscaler_ppm.admin'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '6ef4eb0bef814923a34e0ee32874bb7b'
                        key: {
                            name: 'x_gzi_zscaler_ppm_custom_field_def'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '6fd85d16d8c749d6b04528425982ef1a'
                        key: {
                            name: 'x_gzi_zscaler_ppm_project_task'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '701cf19b943e49df93fedca9c8b8159c'
                        key: {
                            name: 'x_gzi_zscaler_ppm_goal'
                            element: 'status'
                            value: 'on_hold'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '70ab640ca8814993b5888670276d9f70'
                        key: {
                            name: 'x_gzi_zscaler_ppm_portfolio_member'
                            element: 'role'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '7235ebd94a8343f99cc52735965abeac'
                        key: {
                            name: 'x_gzi_zscaler_ppm_portfolio_member'
                            element: 'user_id'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '7268a677113c440991c35fa4293e86be'
                        key: {
                            name: 'x_gzi_zscaler_ppm_custom_view_column'
                            element: 'order_index'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '72b987da019e44c9a28bca0e10b3745b'
                        key: {
                            name: 'x_gzi_zscaler_ppm_custom_view_column'
                            element: 'order_index'
                            language: 'en'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '73c488b7e3e942a1a94c8405787e2b8f'
                        key: {
                            name: 'x_gzi_zscaler_ppm_task'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '756fdbc357034ee8987daa140a0c54fb'
                        key: {
                            name: 'x_gzi_zscaler_ppm_task'
                            element: 'task_type'
                            value: 'approval'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '7595244ac7a64f5db5199220787d24ec'
                        key: {
                            name: 'x_gzi_zscaler_ppm_portfolio_member'
                            element: 'role'
                            value: 'viewer'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '7648ee33325c4daab0fd4a48a2929944'
                        key: {
                            name: 'x_gzi_zscaler_ppm_proj_res_alloc'
                            element: 'user_id'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '77136e6a30614662ad976787e04b3e05'
                        key: {
                            name: 'x_gzi_zscaler_ppm_status_update'
                            element: 'text'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '7741fe69332b4b34b4532a6a70de0dfb'
                        key: {
                            name: 'x_gzi_zscaler_ppm_workspace_user'
                            element: 'workspace_id'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '776e8c4c4d5c423bb6ec16295cde0e15'
                        key: {
                            name: 'x_gzi_zscaler_ppm_resource_role'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '784a265811aa47ec9ef10d0887e1be2e'
                        key: {
                            name: 'x_gzi_zscaler_ppm_portfolio'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '78c6e1a38e7544629ccb01481ed2caa8'
                        key: {
                            name: 'x_gzi_zscaler_ppm_portfolio_member'
                            element: 'role'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '791715fafa8e4a18be1aa06796660695'
                        key: {
                            name: 'x_gzi_zscaler_ppm_project_member'
                            element: 'role'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '7a075cb8856749daacdc45adbe9e7082'
                        key: {
                            name: 'x_gzi_zscaler_ppm_portfolio_project'
                            element: 'project_id'
                            language: 'en'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '7a096e959fa84d6aaeeeea825232846d'
                        key: {
                            name: 'x_gzi_zscaler_ppm_workspace'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '7a357df121fc4f16b94b42e5eee226ff'
                        key: {
                            name: 'x_gzi_zscaler_ppm_capacity_plan'
                            element: 'workspace_id'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '7b1d0c022b7d40658a5350eede61562f'
                        key: {
                            name: 'x_gzi_zscaler_ppm_portfolio'
                            element: 'workspace_id'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '7bc81fb26b464dd6877dbe74216dedcf'
                        key: {
                            name: 'x_gzi_zscaler_ppm_capacity_plan'
                            element: 'group_id'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '7bf25f9c619f479681b11f4647b93655'
                        key: {
                            name: 'x_gzi_zscaler_ppm_task'
                            element: 'notes'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '7d8f05b99b7546cb83af1e526d122ade'
                        key: {
                            name: 'x_gzi_zscaler_ppm_goal'
                            element: 'owner_id'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_page'
                        id: '7e165175d3963cf698f74a0e0042d7e4'
                        key: {
                            endpoint: 'x_gzi_zscaler_ppm_app.do'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '7e3ea618eeff4766bb5d2d5d24f74f1a'
                        key: {
                            name: 'x_gzi_zscaler_ppm_goal'
                            element: 'status'
                            value: 'complete'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '7f724ec502f841cd912d1f5655672867'
                        key: {
                            name: 'x_gzi_zscaler_ppm_status_update'
                            element: 'author_id'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '7f731cbce56a4660ab4ad6a8e5370132'
                        key: {
                            name: 'x_gzi_zscaler_ppm_custom_view'
                            element: 'portfolio_id'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '802b626b6cdc45cf9702a63199f73143'
                        key: {
                            name: 'x_gzi_zscaler_ppm_task'
                            element: 'workspace_id'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '8106d8aa175a4d15b06a9dc824e08b10'
                        key: {
                            name: 'x_gzi_zscaler_ppm_custom_view_column'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '811111000a3241acb204eef2e04063e4'
                        key: {
                            name: 'x_gzi_zscaler_ppm_workspace_team'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '814c36e331c744c6a2a8292ce2490330'
                        key: {
                            name: 'x_gzi_zscaler_ppm_custom_field_value'
                            element: 'value_string'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '81738dcfa1ad4be38451a186cc7eb637'
                        key: {
                            name: 'x_gzi_zscaler_ppm_task'
                            element: 'parent_task_id'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '81ce212e26cb48b39031706e966eb3c6'
                        key: {
                            name: 'x_gzi_zscaler_ppm_goal'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '820167d21a6740e4bda5440347d59ed1'
                        key: {
                            name: 'x_gzi_zscaler_ppm_proj_res_alloc'
                            element: 'user_id'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '83835ccd5a114204a5be6b34e97c536e'
                        key: {
                            name: 'x_gzi_zscaler_ppm_task_dependency'
                            element: 'dependency_type'
                            value: 'start_to_finish'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '83b2c35457ff4b7996cf878deafd8f0d'
                        key: {
                            name: 'x_gzi_zscaler_ppm_task_dependency'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '842b932b554847aea2f463768aa54453'
                        key: {
                            name: 'x_gzi_zscaler_ppm_custom_view_column'
                            element: 'width'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '847f972035424901afd657e2332bb6ab'
                        key: {
                            name: 'x_gzi_zscaler_ppm_goal'
                            element: 'owner_id'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '856b3d561d3f406896c8049c25eb9caa'
                        key: {
                            name: 'x_gzi_zscaler_ppm_project'
                            element: 'priority'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '86694fe5f8764378b6ec68e7a9430889'
                        key: {
                            name: 'x_gzi_zscaler_ppm_task'
                            element: 'notes'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_user_role'
                        id: '8766f6c380794f248c59f86af096f28c'
                        key: {
                            name: 'x_gzi_zscaler_ppm.user'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '88438b41f89044d78d20276f9a125e05'
                        key: {
                            name: 'x_gzi_zscaler_ppm_proj_res_alloc'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '8868c2e6e7464e999cbfcc107bfb40cb'
                        key: {
                            name: 'x_gzi_zscaler_ppm_capacity_plan'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '8887c9fe679d45079b4b2acafdd7ebe6'
                        key: {
                            name: 'x_gzi_zscaler_ppm_proj_res_alloc'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '89a1afaab72745fa8d0f737b0a4a4a9a'
                        key: {
                            name: 'x_gzi_zscaler_ppm_goal'
                            element: 'status'
                            value: 'off_track'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '8a70f284823449d989094b884033d4a4'
                        key: {
                            name: 'x_gzi_zscaler_ppm_project'
                            element: 'due_date'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '8ad8f68ba15342ee9c8bf2825a9e261f'
                        key: {
                            name: 'x_gzi_zscaler_ppm_goal'
                            element: 'status'
                            value: 'at_risk'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '8b873e1ef30049628f3136663de1bdc5'
                        key: {
                            name: 'x_gzi_zscaler_ppm_proj_res_alloc'
                            element: 'end_date'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '8cbb933ccb094bf681dec0eea5cf59d3'
                        key: {
                            name: 'x_gzi_zscaler_ppm_workspace_team'
                            element: 'workspace_id'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '8ce19548d1de4ea0a002428779325fb6'
                        key: {
                            name: 'x_gzi_zscaler_ppm_cust_field_setting'
                            element: 'portfolio_id'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '8d92e909165e437c8b4c3dde4c97412b'
                        key: {
                            name: 'x_gzi_zscaler_ppm_custom_view'
                            element: 'view_type'
                            value: 'board'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '8ec0897661fa47d5901bcf1983dd95d3'
                        key: {
                            name: 'x_gzi_zscaler_ppm_custom_field_value'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '8f33d1bc4d8f42dfabaa71b5b4b1f0aa'
                        key: {
                            name: 'x_gzi_zscaler_ppm_proj_res_alloc'
                            element: 'allocation_percentage'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '904a16e1e33b473781a6e852460b2f64'
                        key: {
                            name: 'x_gzi_zscaler_ppm_section'
                            element: 'project_id'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '9082b99832ab48f7bf1379c7e04f73c3'
                        key: {
                            name: 'x_gzi_zscaler_ppm_task_dependency'
                            element: 'successor_task_id'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '90ade66d909d4507a71d6565bb76f9a3'
                        key: {
                            name: 'x_gzi_zscaler_ppm_status_update'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '9289bd1565d14097b6a4b02cbcb44a0f'
                        key: {
                            name: 'x_gzi_zscaler_ppm_project'
                            element: 'status'
                            value: 'on_track'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '93505961c5a64056b701291e93cb0411'
                        key: {
                            name: 'x_gzi_zscaler_ppm_section'
                            element: 'project_id'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '93c7d235813b423bb55b3e220f3e9c48'
                        key: {
                            name: 'x_gzi_zscaler_ppm_project_task'
                            element: 'section_id'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '945d33f02fd24537b8b1e6cb07c44478'
                        key: {
                            name: 'x_gzi_zscaler_ppm_task'
                            element: 'approval_state'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '9663a3c866e24e38a3afb800addc27af'
                        key: {
                            name: 'x_gzi_zscaler_ppm_task'
                            element: 'priority'
                            value: 'low'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '970ceef4e8b54f3c8ce447d343e38512'
                        key: {
                            name: 'x_gzi_zscaler_ppm_task'
                            element: 'completed'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '9767ebbbee1d420f9c6d6b047b1fc0b4'
                        key: {
                            name: 'x_gzi_zscaler_ppm_custom_field_def'
                            element: 'type'
                            value: 'number'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '989237745a0448cdaba1253ab0bdb1f9'
                        key: {
                            name: 'x_gzi_zscaler_ppm_status_update'
                            element: 'status'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '9900e9e78b5c40c7b966eb92457ded2e'
                        key: {
                            name: 'x_gzi_zscaler_ppm_user_capacity'
                            element: 'baseline_hours_per_week'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '993e17f06b2e4bccb06f36c3601e0468'
                        key: {
                            name: 'x_gzi_zscaler_ppm_workspace_user'
                            element: 'user_id'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '9a30ccbae6a748d9a32d664e2edb9403'
                        key: {
                            name: 'x_gzi_zscaler_ppm_portfolio_project'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '9aff6afbd249413286dad6e7d3f9c3d9'
                        key: {
                            name: 'x_gzi_zscaler_ppm_project'
                            element: 'notes'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '9b3be6783194471b832437534c3538ee'
                        key: {
                            name: 'x_gzi_zscaler_ppm_status_update'
                            element: 'status'
                            value: 'at_risk'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '9b53843cc6b345c5973be6d940ab17bf'
                        key: {
                            name: 'x_gzi_zscaler_ppm_custom_field_value'
                            element: 'project_id'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '9bb07a5e4be5499ca7f9672d90ddd6fd'
                        key: {
                            name: 'x_gzi_zscaler_ppm_proj_res_alloc'
                            element: 'end_date'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '9d859e9d7726437495b0447c6d41f895'
                        key: {
                            name: 'x_gzi_zscaler_ppm_portfolio_member'
                            element: 'portfolio_id'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: 'a04317edcfdf491e89368b766c087999'
                        key: {
                            name: 'x_gzi_zscaler_ppm_portfolio_project'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'a0549e1b15974f5395f3cbd4f9f802e9'
                        key: {
                            name: 'x_gzi_zscaler_ppm_portfolio_project'
                            element: 'portfolio_id'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'a08d8322e2d647369e24cba5a1e3efa0'
                        key: {
                            name: 'x_gzi_zscaler_ppm_task'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'a0aef513345e444d9b85195b42b44275'
                        key: {
                            name: 'x_gzi_zscaler_ppm_cust_field_setting'
                            element: 'field_def_id'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'a100047145d14b92ad51ba90d7425547'
                        key: {
                            name: 'x_gzi_zscaler_ppm_goal'
                            element: 'workspace_id'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'a339c10065cc425dacabf18e4ee9872e'
                        key: {
                            name: 'x_gzi_zscaler_ppm_proj_res_alloc'
                            element: 'project_id'
                        }
                    },
                    {
                        table: 'sys_index'
                        id: 'a360cefe16f547be809fbef61b1252e3'
                        key: {
                            logical_table_name: 'x_gzi_zscaler_ppm_portfolio_project'
                            col_name_string: 'portfolio_id,project_id'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'a3a5fd4cb67949ba8cc7932e428fc4da'
                        key: {
                            name: 'x_gzi_zscaler_ppm_custom_field_value'
                            element: 'value_date'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_index'
                        id: 'a3e2c6fde9f9430f96bcf644a2a00f69'
                        key: {
                            logical_table_name: 'x_gzi_zscaler_ppm_task_dependency'
                            col_name_string: 'predecessor_task_id,successor_task_id'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'a4331860172f438d8a7ce3eb11832dbe'
                        key: {
                            name: 'x_gzi_zscaler_ppm_section'
                            element: 'name'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'a45269d6efce457bb21939844c08124d'
                        key: {
                            name: 'x_gzi_zscaler_ppm_task'
                            element: 'workspace_id'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'a48fab48ab854e48b4e20552cf6907f0'
                        key: {
                            name: 'x_gzi_zscaler_ppm_custom_field_def'
                            element: 'workspace_id'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'a49e4a06af704423a630422811dbda57'
                        key: {
                            name: 'x_gzi_zscaler_ppm_status_update'
                            element: 'author_id'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a54de9fa8d074d2ba896c9467604b995'
                        key: {
                            name: 'x_gzi_zscaler_ppm_task_dependency'
                            element: 'dependency_type'
                            value: 'finish_to_start'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'a5ef482ff0074e8a93e60cda286d50f5'
                        key: {
                            name: 'x_gzi_zscaler_ppm_task'
                            element: 'watch_list'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'a68b86c8efbb4e3fb704ec7a4a17de07'
                        key: {
                            name: 'x_gzi_zscaler_ppm_capacity_plan'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a766f33c95b24b5cbecd984f60577274'
                        key: {
                            name: 'x_gzi_zscaler_ppm_task'
                            element: 'status'
                            value: 'open'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a79636e02fe84f00909ca092eabd7c38'
                        key: {
                            name: 'x_gzi_zscaler_ppm_task'
                            element: 'task_type'
                            value: 'task'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'a796aca0753c4e6db5da13334895d0e5'
                        key: {
                            name: 'x_gzi_zscaler_ppm_custom_field_def'
                            element: 'type'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: 'a7acff33830143918ee7eea5629c1878'
                        key: {
                            name: 'x_gzi_zscaler_ppm_custom_view'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'a83c6f16b2ca40958230c23a44f797dd'
                        key: {
                            name: 'x_gzi_zscaler_ppm_custom_field_value'
                            element: 'field_def_id'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'a87e24de77f241c9b7b6b1000e37eb48'
                        key: {
                            name: 'x_gzi_zscaler_ppm_portfolio'
                            element: 'owner_id'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'a9dfb1fa427c4ae88001a0f2b0039912'
                        key: {
                            name: 'x_gzi_zscaler_ppm_custom_view_column'
                            element: 'view_id'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: 'ab21080153384d2b9018c589173726da'
                        key: {
                            name: 'x_gzi_zscaler_ppm_goal'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'aba1454c76a34acf9ec2406c99ab484e'
                        key: {
                            name: 'x_gzi_zscaler_ppm_custom_view'
                            element: 'user_id'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'ac8dc5f325024262a5fdd1be426ca49a'
                        key: {
                            name: 'x_gzi_zscaler_ppm_resource_role'
                            element: 'name'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: 'ac987b763c8c4dc28e219acd95877b15'
                        key: {
                            name: 'x_gzi_zscaler_ppm_workspace_team'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'ad9bce8596f947cf91acea64d43fa5e6'
                        key: {
                            name: 'x_gzi_zscaler_ppm_custom_view'
                            element: 'view_type'
                            value: 'timeline'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'ae43bdd097804479807faac5f217564c'
                        key: {
                            name: 'x_gzi_zscaler_ppm_portfolio'
                            element: 'name'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'ae96f84834054fc6af166f9375863f4d'
                        key: {
                            name: 'x_gzi_zscaler_ppm_proj_res_alloc'
                            element: 'role_id'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'af529b7a81e34bc58d046fef74de039a'
                        key: {
                            name: 'x_gzi_zscaler_ppm_portfolio_project'
                            element: 'added_by'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'b1fe3d36b033426fb4702cabe282a981'
                        key: {
                            name: 'x_gzi_zscaler_ppm_proj_res_alloc'
                            element: 'start_date'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'b225e88d64fe498798dbbf40c5d2a59d'
                        key: {
                            name: 'x_gzi_zscaler_ppm_custom_field_def'
                            element: 'type'
                            value: 'multi_select'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'b2c3dbbce40149a293597ca5ceef4339'
                        key: {
                            name: 'x_gzi_zscaler_ppm_project_member'
                            element: 'role'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: 'b3d1e44e1ca14a01bb2d8fe351d6114f'
                        key: {
                            name: 'x_gzi_zscaler_ppm_cust_field_setting'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'b4d2435e276c445c815653bb2e7946ed'
                        key: {
                            name: 'x_gzi_zscaler_ppm_portfolio'
                            element: 'color'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'b508ce827fc44fddb9c4e6236ffa79fc'
                        key: {
                            name: 'x_gzi_zscaler_ppm_task'
                            element: 'watch_list'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: 'b5fe885b53bc4f15a7ec3d03154c46ec'
                        key: {
                            name: 'x_gzi_zscaler_ppm_project'
                            element: 'priority'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'b64b58b8fdbf48b2a81aae0a63469eca'
                        key: {
                            name: 'x_gzi_zscaler_ppm_proj_res_alloc'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: 'b746bc65ddeb416c94f5243ed96ede05'
                        key: {
                            name: 'x_gzi_zscaler_ppm_workspace_user'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'b8246a1a0c034e0990e0bafdc601ea90'
                        key: {
                            name: 'x_gzi_zscaler_ppm_goal'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'b827712669754a13b0a389da6e9208e8'
                        key: {
                            name: 'x_gzi_zscaler_ppm_task'
                            element: 'priority'
                            value: 'high'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: 'b8c4633ebc9e4186b78f2a6a9391dfd7'
                        key: {
                            name: 'x_gzi_zscaler_ppm_custom_field_def'
                            element: 'type'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: 'b97e0c76bb704b6b9542e7645a7b1385'
                        key: {
                            name: 'x_gzi_zscaler_ppm_workspace_team'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'bb0987681e0b4cc88f9597491e05c738'
                        key: {
                            name: 'x_gzi_zscaler_ppm_workspace_user'
                            element: 'user_id'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'bb5845d24ba2457284c00ef2d025a97f'
                        key: {
                            name: 'x_gzi_zscaler_ppm_project'
                            element: 'percent_complete'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'bb90729b85c84b61ad5263ffa9f210f5'
                        key: {
                            name: 'x_gzi_zscaler_ppm_capacity_plan'
                            element: 'time_granularity'
                            value: 'year'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: 'bc37226cd0f94822bddfc5e16d23acb1'
                        key: {
                            name: 'x_gzi_zscaler_ppm_capacity_plan'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'bcdbf96ce267484cb38ed4aad1b7d165'
                        key: {
                            name: 'x_gzi_zscaler_ppm_task'
                            element: 'priority'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'bd3f1f559876400bb3ad177f4a06f5ea'
                        key: {
                            name: 'x_gzi_zscaler_ppm_custom_view'
                            element: 'view_type'
                            value: 'list'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: 'bdade693b0f74b8cbe982e80bde79ce9'
                        key: {
                            name: 'x_gzi_zscaler_ppm_custom_view_column'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'bdb8d5052f0246919d32ac27cae77371'
                        key: {
                            name: 'x_gzi_zscaler_ppm_task'
                            element: 'name'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'bdc7a5c75b3a488f9eb6b5da7c6c6231'
                        key: {
                            name: 'x_gzi_zscaler_ppm_cust_field_setting'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'beec7c8738434affbc2bdcc75aca62c1'
                        key: {
                            name: 'x_gzi_zscaler_ppm_task_dependency'
                            element: 'successor_task_id'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'bf38beacca884d52b72a0d9ad61c4de6'
                        key: {
                            name: 'x_gzi_zscaler_ppm_custom_view'
                            element: 'view_type'
                            value: 'dashboard'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: 'bf989e38b69b4e97aee958edf61177f2'
                        key: {
                            name: 'x_gzi_zscaler_ppm_user_capacity'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'c020becc153845f2940f6166d801f30b'
                        key: {
                            name: 'x_gzi_zscaler_ppm_project'
                            element: 'project_key'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'c078fb5b70b84ec6990761788a17b150'
                        key: {
                            name: 'x_gzi_zscaler_ppm_section'
                            element: 'order_index'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'c1d9355165be48829a22bd1dce459ed9'
                        key: {
                            name: 'x_gzi_zscaler_ppm_custom_view'
                            element: 'project_id'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'c39d31db20784cd8bde50b1da8669d88'
                        key: {
                            name: 'x_gzi_zscaler_ppm_portfolio_project'
                            element: 'project_id'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'c3f7258b454042d69d9bdaa24bfee1e0'
                        key: {
                            name: 'x_gzi_zscaler_ppm_custom_field_def'
                            element: 'type'
                            value: 'currency'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_index'
                        id: 'c46059a0633f4147813fa24cd29c2f85'
                        key: {
                            logical_table_name: 'x_gzi_zscaler_ppm_portfolio_member'
                            col_name_string: 'portfolio_id,user_id'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'c4e5d9b3b32b46eb8ffab367ad37e123'
                        key: {
                            name: 'x_gzi_zscaler_ppm_custom_field_value'
                            element: 'task_id'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'c53a91b27edb41c2add418a64ef78dc0'
                        key: {
                            name: 'x_gzi_zscaler_ppm_project'
                            element: 'percent_complete'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'c5fb76fb83ff46fab0dcbb7a1f12a9b9'
                        key: {
                            name: 'x_gzi_zscaler_ppm_user_res_profile'
                            element: 'role_id'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'c781ef2b4dbc48768beb659dc4cdf1cd'
                        key: {
                            name: 'x_gzi_zscaler_ppm_custom_field_value'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'c9e724f2e88147f4b1a5e18755285830'
                        key: {
                            name: 'x_gzi_zscaler_ppm_project'
                            element: 'workspace_id'
                            language: 'en'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: 'ca04edbd30c344c687704ad0ebe1ea8b'
                        key: {
                            name: 'x_gzi_zscaler_ppm_project_member'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: 'cb10a36392924ccabf701b4960ec6fc4'
                        key: {
                            name: 'x_gzi_zscaler_ppm_cust_field_setting'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: 'cb7ab39d407f4766981d9394b2868b99'
                        key: {
                            name: 'x_gzi_zscaler_ppm_custom_view_column'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'cb942f59843b42f5bf4cf3dff60a8cb6'
                        key: {
                            name: 'x_gzi_zscaler_ppm_task_dependency'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: 'cbe540a4dd1f41d7bfc0d9b0cbd1d474'
                        key: {
                            name: 'x_gzi_zscaler_ppm_status_update'
                            element: 'entity_type'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'cc14a035c5934493bcab3f4bf649eb98'
                        key: {
                            name: 'x_gzi_zscaler_ppm_custom_view'
                            element: 'is_default'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'cc2f7bf8f248441790d2c52f5f933a1c'
                        key: {
                            name: 'x_gzi_zscaler_ppm_section'
                            element: 'name'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'cc660e4c307442bb974a8f760ccd3fac'
                        key: {
                            name: 'x_gzi_zscaler_ppm_project_task'
                            element: 'task_id'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'cc99a39011fe4afca654c1da8c30ac78'
                        key: {
                            name: 'x_gzi_zscaler_ppm_status_update'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'ccec9c8a619c4593aaa389054d423db0'
                        key: {
                            name: 'x_gzi_zscaler_ppm_custom_view_column'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'cdd233d0076e4c82898a3f635d72f184'
                        key: {
                            name: 'x_gzi_zscaler_ppm_project_task'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'ce35ece08c5a47fabd1b10a9a910e90e'
                        key: {
                            name: 'x_gzi_zscaler_ppm_portfolio'
                            element: 'due_date'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: 'cfb09129540d43358ebf4c7e50f51363'
                        key: {
                            name: 'x_gzi_zscaler_ppm_status_update'
                            element: 'status'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'd03f1a2b62104018b1faba64fc7c8db4'
                        key: {
                            name: 'x_gzi_zscaler_ppm_custom_view'
                            element: 'name'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'd0fe15609a7942baa04303e950527b77'
                        key: {
                            name: 'x_gzi_zscaler_ppm_portfolio_project'
                            element: 'order_index'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'd12d62a9c39b45689d774bbcc859c9d1'
                        key: {
                            name: 'x_gzi_zscaler_ppm_custom_view_column'
                            element: 'is_visible'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'd17dad8f36f64dbc8043c4d6df30a2d8'
                        key: {
                            name: 'x_gzi_zscaler_ppm_capacity_plan'
                            element: 'time_granularity'
                            value: 'day'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sn_glider_source_artifact_m2m'
                        id: 'd220347c3aff4fe6afc2b2b6a0502fdf'
                        key: {
                            application_file: '4456e0f1ef7e4ca786270cabd7d00cf5'
                            source_artifact: '3fb176d7543f4b1cbac9d047cf854d49'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'd2dccab2639c4cceb18d584f15e4ba5f'
                        key: {
                            name: 'x_gzi_zscaler_ppm_task_dependency'
                            element: 'dependency_type'
                            value: 'start_to_start'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'd3d08cf891614a968d03e6440c7cce3c'
                        key: {
                            name: 'x_gzi_zscaler_ppm_section'
                            element: 'order_index'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'd475034d4be1473381dca49f8c7a4611'
                        key: {
                            name: 'x_gzi_zscaler_ppm_task'
                            element: 'approval_state'
                            value: 'request_changes'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: 'd575c2b4155e4961bc6f4a01ede325c8'
                        key: {
                            name: 'x_gzi_zscaler_ppm_workspace_user'
                        }
                    },
                    {
                        table: 'sys_index'
                        id: 'd6368a7ee5ee40228d0e0b75d937660b'
                        key: {
                            logical_table_name: 'x_gzi_zscaler_ppm_project_task'
                            col_name_string: 'project_id,task_id'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'd678d906437d43beb8ab7e5e88433ad3'
                        key: {
                            name: 'x_gzi_zscaler_ppm_custom_view'
                            element: 'view_type'
                            value: 'progress'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: 'd7acb30b073c488e9a68c6473b68a88a'
                        key: {
                            name: 'x_gzi_zscaler_ppm_task'
                            element: 'priority'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'd9b06e12fc5f4de696dd67cc489d542d'
                        key: {
                            name: 'x_gzi_zscaler_ppm_project_member'
                            element: 'role'
                            value: 'owner'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: 'd9c9931aad4441be848164e4a1dd11a2'
                        key: {
                            name: 'x_gzi_zscaler_ppm_resource_role'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'd9e0d440a44e4a1cb025cdfb60e57c32'
                        key: {
                            name: 'x_gzi_zscaler_ppm_capacity_plan'
                            element: 'name'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'da54bf07b1154f8d85e292ce7243bddb'
                        key: {
                            name: 'x_gzi_zscaler_ppm_capacity_plan'
                            element: 'time_granularity'
                            value: 'quarter'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'da6d7b05a9e54e2c9633cc96eb640528'
                        key: {
                            name: 'x_gzi_zscaler_ppm_custom_field_def'
                            element: 'type'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'daf1f4b3c65b4c60962a83bb5358e81f'
                        key: {
                            name: 'x_gzi_zscaler_ppm_custom_field_def'
                            element: 'type'
                            value: 'dropdown'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ux_lib_asset'
                        id: 'db41968a588f4678b4cbea7d289c29f8'
                        key: {
                            name: 'x_gzi_zscaler_ppm/index'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'dc5ec84fc2f443579c0aa1cf8f768cc7'
                        key: {
                            name: 'x_gzi_zscaler_ppm_capacity_plan'
                            element: 'time_granularity'
                            value: 'week'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: 'dc72403af54842be8874f6bd244953f5'
                        key: {
                            name: 'x_gzi_zscaler_ppm_project'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: 'dc7520c535b24032b077e03d9a069035'
                        key: {
                            name: 'x_gzi_zscaler_ppm_project'
                            element: 'status'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'dc9c1b836ad94b088b9ea3897b83a229'
                        key: {
                            name: 'x_gzi_zscaler_ppm_task'
                            element: 'priority'
                            value: 'medium'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'dccaf9d6fc024335b838adcebd2128bb'
                        key: {
                            name: 'x_gzi_zscaler_ppm_capacity_plan'
                            element: 'portfolio_id'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'dcfa34e2576e4a23928630686a495b37'
                        key: {
                            name: 'x_gzi_zscaler_ppm_custom_field_def'
                            element: 'type'
                            value: 'date'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'dcfd09c6e3284c7b8a278d5e5bd6f318'
                        key: {
                            name: 'x_gzi_zscaler_ppm_portfolio_member'
                            element: 'role'
                            value: 'editor'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: 'dd0ddba398e14a8bb1670b80a51d5574'
                        key: {
                            name: 'x_gzi_zscaler_ppm_custom_field_value'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'dd68af9bd1ea4bd1b9234904054787b7'
                        key: {
                            name: 'x_gzi_zscaler_ppm_user_capacity'
                            element: 'user_profile_id'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'dda0d3a515e141ad99570df95e92ae98'
                        key: {
                            name: 'x_gzi_zscaler_ppm_custom_field_def'
                            element: 'name'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'def02a964300467cbdba49c65cce260f'
                        key: {
                            name: 'x_gzi_zscaler_ppm_project'
                            element: 'notes'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'dfb36e16917e4a2099c437bf13a5c4d2'
                        key: {
                            name: 'x_gzi_zscaler_ppm_task_dependency'
                            element: 'dependency_type'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'e00d2323bf744fc2a5b767ab91cd4b22'
                        key: {
                            name: 'x_gzi_zscaler_ppm_workspace_team'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'e0ca69f681be451a8380792f7ba736ac'
                        key: {
                            name: 'x_gzi_zscaler_ppm_user_capacity'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'e1817daa0d584d0a821bf0324cedbd90'
                        key: {
                            name: 'x_gzi_zscaler_ppm_resource_role'
                            element: 'name'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'e27e91e97296411d930209a7b2da15dc'
                        key: {
                            name: 'x_gzi_zscaler_ppm_project'
                            element: 'project_key'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'e287702da374458b9f7148f05ee22c12'
                        key: {
                            name: 'x_gzi_zscaler_ppm_custom_field_def'
                            element: 'is_global_library'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'e2e2955fb96747a1ade085e041ef1791'
                        key: {
                            name: 'x_gzi_zscaler_ppm_custom_field_value'
                            element: 'task_id'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'e3d1b8440a404ed39cfba514b761dccd'
                        key: {
                            name: 'x_gzi_zscaler_ppm_task_dependency'
                            element: 'dependency_type'
                            value: 'finish_to_finish'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'e561640baccb43159cdde91866074950'
                        key: {
                            name: 'x_gzi_zscaler_ppm_project'
                            element: 'description'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'e5e2ed2d1d3643dc992e3da9451fad81'
                        key: {
                            name: 'x_gzi_zscaler_ppm_custom_view'
                            element: 'view_type'
                            value: 'workload'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'e5f132d1bb714130a52054f4da9b08a7'
                        key: {
                            name: 'x_gzi_zscaler_ppm_portfolio_project'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'e896e0030b2e401f80184f59bb830357'
                        key: {
                            name: 'x_gzi_zscaler_ppm_project'
                            element: 'priority'
                            value: 'medium'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'e942252c1c764a38b417dea7c70df812'
                        key: {
                            name: 'x_gzi_zscaler_ppm_custom_view'
                            element: 'project_id'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'ea0df20ef98b43548945df643aee1d2c'
                        key: {
                            name: 'x_gzi_zscaler_ppm_portfolio'
                            element: 'color'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'ea1da450f5b54fb6a00a6444c65a9574'
                        key: {
                            name: 'x_gzi_zscaler_ppm_workspace'
                            element: 'name'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'eb6ceb7ce7454ad7b8d30407c0e45eec'
                        key: {
                            name: 'x_gzi_zscaler_ppm_custom_view'
                            element: 'view_type'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'eb96acc5e91148f18470378bde68c628'
                        key: {
                            name: 'x_gzi_zscaler_ppm_portfolio'
                            element: 'workspace_id'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'ec2c1da4c083425f92ba3a22f545c388'
                        key: {
                            name: 'x_gzi_zscaler_ppm_status_update'
                            element: 'entity_id'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'ed6931f0c41144d1a78afbef455e6212'
                        key: {
                            name: 'x_gzi_zscaler_ppm_proj_res_alloc'
                            element: 'project_id'
                            language: 'en'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: 'edc0ebc565eb4b799e73219a2774bea1'
                        key: {
                            name: 'x_gzi_zscaler_ppm_capacity_plan'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'ee17dcd816d7400ba8a626bfa8a58e0a'
                        key: {
                            name: 'x_gzi_zscaler_ppm_project_member'
                            element: 'project_id'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'eeffce1ab6844b83911daa541d3a4711'
                        key: {
                            name: 'x_gzi_zscaler_ppm_custom_field_value'
                            element: 'portfolio_id'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'efae6894150644c4bf3354a3d55b1702'
                        key: {
                            name: 'x_gzi_zscaler_ppm_project'
                            element: 'description'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'efe8cbd8ab454d4bb723242d8ecd9f74'
                        key: {
                            name: 'x_gzi_zscaler_ppm_task'
                            element: 'description'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'f00da96eedcb44eab665030f95e6fd99'
                        key: {
                            name: 'x_gzi_zscaler_ppm_portfolio'
                            element: 'name'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'f085b59812b1499f873a4659401131a4'
                        key: {
                            name: 'x_gzi_zscaler_ppm_custom_view'
                            element: 'view_type'
                            value: 'settings'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'f1826af3213f4d4f9a5fd2a664a5599a'
                        key: {
                            name: 'x_gzi_zscaler_ppm_custom_field_def'
                            element: 'workspace_id'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'f1959bbf856e4462b9029ef89c5e8353'
                        key: {
                            name: 'x_gzi_zscaler_ppm_portfolio'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'f1a97d8c530b4b70852f841f3bb40831'
                        key: {
                            name: 'x_gzi_zscaler_ppm_portfolio'
                            element: 'description'
                            language: 'en'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: 'f1d9467bb6b349d1a1bf8c750ccf6a2c'
                        key: {
                            name: 'x_gzi_zscaler_ppm_project'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'f1fa82cf8c3049dcbb29cf338683a635'
                        key: {
                            name: 'x_gzi_zscaler_ppm_custom_field_value'
                            element: 'portfolio_id'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'f21f237425f94d3dae07dfd5d186e686'
                        key: {
                            name: 'x_gzi_zscaler_ppm_project_member'
                            element: 'role'
                            value: 'commenter'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'f23e06c87f0b491aa326361972c72c13'
                        key: {
                            name: 'x_gzi_zscaler_ppm_project_member'
                            element: 'user_id'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'f27059a122ff4aae8f64992349b00536'
                        key: {
                            name: 'x_gzi_zscaler_ppm_project_task'
                            element: 'project_id'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'f2789db6f195429eb65b8ce843f9213c'
                        key: {
                            name: 'x_gzi_zscaler_ppm_task'
                            element: 'start_date'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'f3880f5c35a34fc0bc85893801aa3489'
                        key: {
                            name: 'x_gzi_zscaler_ppm_goal'
                            element: 'status'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'f39031de8b9545b9939b41075527c3cb'
                        key: {
                            name: 'x_gzi_zscaler_ppm_portfolio_project'
                            element: 'added_at'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'f44718fc44794828a0703486539d02ce'
                        key: {
                            name: 'x_gzi_zscaler_ppm_task'
                            element: 'comments'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ux_lib_asset'
                        id: 'f4a7d551b68745afb3c6f7473cc04760'
                        key: {
                            name: 'x_gzi_zscaler_ppm/main'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'f4f5ef85597b4bc8a7282ba5084656bc'
                        key: {
                            name: 'x_gzi_zscaler_ppm_custom_field_def'
                            element: 'type'
                            value: 'people'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'f554af45b17d438e87bd95aed55f5b38'
                        key: {
                            name: 'x_gzi_zscaler_ppm_custom_view'
                            element: 'filter_query'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'f5b7464e16d94dd8a10f0720a32c33bb'
                        key: {
                            name: 'x_gzi_zscaler_ppm_custom_view'
                            element: 'portfolio_id'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'f5e9b9f497bc47fb9d5b8631aa8c6cdc'
                        key: {
                            name: 'x_gzi_zscaler_ppm_project'
                            element: 'status'
                            value: 'complete'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'f650bf4414e24a81bcd7c4972768d582'
                        key: {
                            name: 'x_gzi_zscaler_ppm_custom_view'
                            element: 'view_type'
                            value: 'brief'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'f7d0c731239c49bc8dfade5e65019bfb'
                        key: {
                            name: 'x_gzi_zscaler_ppm_project'
                            element: 'sync_with_jira'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: 'f8a8aa15a9a74eb3bbce9e8fc0aaf29b'
                        key: {
                            name: 'x_gzi_zscaler_ppm_user_res_profile'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'f940670b4beb44b5a4b9f29ffc7d326c'
                        key: {
                            name: 'x_gzi_zscaler_ppm_capacity_plan'
                            element: 'time_granularity'
                            value: 'month'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'f9610d5bb83f4446a7719605f68794f2'
                        key: {
                            name: 'x_gzi_zscaler_ppm_portfolio'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: 'f9ddf02094274f06ab0d2b81909a69eb'
                        key: {
                            name: 'x_gzi_zscaler_ppm_task_dependency'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'fa1e881a54484c659421fae4daa0f5eb'
                        key: {
                            name: 'x_gzi_zscaler_ppm_goal'
                            element: 'status'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: 'fb1afc64e54c4732b3b19765a4751d75'
                        key: {
                            name: 'x_gzi_zscaler_ppm_task'
                            element: 'status'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'fb6a3ef5b6d746b28e60a5b790ba23b7'
                        key: {
                            name: 'x_gzi_zscaler_ppm_task'
                            element: 'task_type'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'fbe33469e8624a7ba8b3fe0d33fb1bc5'
                        key: {
                            name: 'x_gzi_zscaler_ppm_project_task'
                            element: 'project_id'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'fbed07c9d0d04a0b990a73d1f41e2956'
                        key: {
                            name: 'x_gzi_zscaler_ppm_workspace_team'
                            element: 'workspace_id'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'fc955e70a8b142c9840ac90684b4e7d3'
                        key: {
                            name: 'x_gzi_zscaler_ppm_project'
                            element: 'assignment_group'
                        }
                    },
                    {
                        table: 'sys_index'
                        id: 'ff01632a12de462284fd7a677d3a5724'
                        key: {
                            logical_table_name: 'x_gzi_zscaler_ppm_workspace_team'
                            col_name_string: 'workspace_id,group_id'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'ff99728b971645ad8ed13d9e8d4b1d07'
                        key: {
                            name: 'x_gzi_zscaler_ppm_task'
                            element: 'assignee_id'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'fff6384280e24d919c2fe57bf7084dc0'
                        key: {
                            name: 'x_gzi_zscaler_ppm_portfolio_project'
                            element: 'added_at'
                            language: 'en'
                        }
                    },
                ]
            }
        }
    }
}
