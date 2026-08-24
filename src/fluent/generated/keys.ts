import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                    'access-service': {
                        table: 'sys_script_include'
                        id: '11d16c3ef279464bbf15e1055d3d1242'
                    }
                    bom_json: {
                        table: 'sys_module'
                        id: '5330e272647147aba9b2c9648e4be61f'
                    }
                    'br-eav-xor-validation': {
                        table: 'sys_script'
                        id: '523cf064a7084f7487720c907739cf1c'
                    }
                    'br-task-single-assignee': {
                        table: 'sys_script'
                        id: '1ccce43d99034b419bf4e3b2db7da08f'
                    }
                    ca99d331333687509937d1382e5c7be5: {
                        table: 'sys_app_info'
                        id: 'ca99d331333687509937d1382e5c7be5'
                    }
                    'capacity-service': {
                        table: 'sys_script_include'
                        id: 'bc8afd28061f4e0e9330c9693d16b997'
                    }
                    'member-service': {
                        table: 'sys_script_include'
                        id: 'a4525a9317c142d99178ffab73fb16d8'
                    }
                    package_json: {
                        table: 'sys_module'
                        id: '9e1a9cf0e1f24986a1af1b57dc9439e1'
                    }
                    'portfolio-service': {
                        table: 'sys_script_include'
                        id: '223bbe5989944bf38b12d14a42fe21d4'
                    }
                    'project-task-service': {
                        table: 'sys_script_include'
                        id: 'b4508803cf3d4b84a24c99d572f09778'
                    }
                    'route-automations-get': {
                        table: 'sys_ws_operation'
                        id: 'a1b2c3d4e5f6478990a1b2c3d4e5f601'
                    }
                    'route-capacity-plan-allocation-patch': {
                        table: 'sys_ws_operation'
                        id: '3471788d48e54e2289302c0874bbf39a'
                    }
                    'route-capacity-plan-allocations-get': {
                        table: 'sys_ws_operation'
                        id: '66a38338e38d4d87902c7b7b7da10c8a'
                    }
                    'route-capacity-plan-get': {
                        table: 'sys_ws_operation'
                        id: '95f6c44c969e4622b2cb4c130d74ad4f'
                    }
                    'route-capacity-plan-grid-get': {
                        table: 'sys_ws_operation'
                        id: '596a03da329648db9bf1d5d2fbdb6aba'
                    }
                    'route-capacity-plans-get': {
                        table: 'sys_ws_operation'
                        id: '544778a49ce14fc6b4c073d6c3b7ba3a'
                    }
                    'route-custom-field-values-get': {
                        table: 'sys_ws_operation'
                        id: '5b6e7db7eac542afa6bdba9fafe3712a'
                    }
                    'route-custom-field-values-post': {
                        table: 'sys_ws_operation'
                        id: '5cfad2e994ed4aa3ae0acbf42ea33ba9'
                    }
                    'route-custom-fields-get': {
                        table: 'sys_ws_operation'
                        id: '26fa643fbe1f4965a9cb4308d154149b'
                    }
                    'route-groups-search-get': {
                        table: 'sys_ws_operation'
                        id: 'fcb609ee42954c75b01f9d54f64324a1'
                    }
                    'route-intake-forms-get': {
                        table: 'sys_ws_operation'
                        id: 'b2c3d4e5f6a74890b1c2d3e4f5a6b702'
                    }
                    'route-portfolio-dashboard-get': {
                        table: 'sys_ws_operation'
                        id: 'cfc3fc83f8a04f88bb9777775a42a900'
                    }
                    'route-portfolio-get': {
                        table: 'sys_ws_operation'
                        id: '4af1aa4c77134adf975c04ec71302a9b'
                    }
                    'route-portfolio-member-delete': {
                        table: 'sys_ws_operation'
                        id: '1e7a23a6e35b4a7cb6c56e99c28e24ff'
                    }
                    'route-portfolio-member-patch': {
                        table: 'sys_ws_operation'
                        id: '79caf851235244bdaca7074a24f07ded'
                    }
                    'route-portfolio-members-get': {
                        table: 'sys_ws_operation'
                        id: '01f109016c6c48c88ed2492081eac0f9'
                    }
                    'route-portfolio-members-post': {
                        table: 'sys_ws_operation'
                        id: '13623f850e714f89aee5feeb9b989556'
                    }
                    'route-portfolio-patch': {
                        table: 'sys_ws_operation'
                        id: '82d88f86f7b34a4784ce182854a5e134'
                    }
                    'route-portfolio-progress-get': {
                        table: 'sys_ws_operation'
                        id: 'f4d9dcd0ef6b42e4a58b5664b8b50a8b'
                    }
                    'route-portfolio-projects-delete': {
                        table: 'sys_ws_operation'
                        id: 'db215633311643a291f8f5c85a6abab3'
                    }
                    'route-portfolio-projects-post': {
                        table: 'sys_ws_operation'
                        id: '4b580a5d3d0a47c0957174f063f5bcf9'
                    }
                    'route-portfolio-timeline-get': {
                        table: 'sys_ws_operation'
                        id: '215ef579e5f04379a2c8d6b56644da0d'
                    }
                    'route-portfolio-view-data-get': {
                        table: 'sys_ws_operation'
                        id: '57302e7abafe499ca9ad3883036cd939'
                    }
                    'route-portfolio-views-get': {
                        table: 'sys_ws_operation'
                        id: '390e0b73771d4e039e055226033e6077'
                    }
                    'route-portfolio-workload-get': {
                        table: 'sys_ws_operation'
                        id: '51c32da0d0ce42be95892c0e68a5654a'
                    }
                    'route-portfolios-get': {
                        table: 'sys_ws_operation'
                        id: 'e27407735cb549909926d9665c1404be'
                    }
                    'route-portfolios-post': {
                        table: 'sys_ws_operation'
                        id: '65e43d30b6d44e51ab73e55d57d07e35'
                    }
                    'route-project-board-get': {
                        table: 'sys_ws_operation'
                        id: 'e5e19f6011de4c1099943e07fd9220ba'
                    }
                    'route-project-board-patch': {
                        table: 'sys_ws_operation'
                        id: '62df5d565e354851a3dd779e219e58b4'
                    }
                    'route-project-get': {
                        table: 'sys_ws_operation'
                        id: '924ba6cb6433418cbe5224958b038b21'
                    }
                    'route-project-member-delete': {
                        table: 'sys_ws_operation'
                        id: '612fdcd2eb9e462db5bb3e789105cb68'
                    }
                    'route-project-member-patch': {
                        table: 'sys_ws_operation'
                        id: 'a38b57bb57394709870ecfdd1c877e1d'
                    }
                    'route-project-members-get': {
                        table: 'sys_ws_operation'
                        id: '015c85d385c34ac0800b2c0e9213893a'
                    }
                    'route-project-members-post': {
                        table: 'sys_ws_operation'
                        id: '74936f11d89943beb14e54d03905129c'
                    }
                    'route-project-patch': {
                        table: 'sys_ws_operation'
                        id: '3c84f157f263422dbe88c9c5da4773b8'
                    }
                    'route-project-portfolios-get': {
                        table: 'sys_ws_operation'
                        id: '8349a828a435415cb763962d0202b705'
                    }
                    'route-project-sections-get': {
                        table: 'sys_ws_operation'
                        id: 'd389a3d34c7147299392b4ddbcda4b08'
                    }
                    'route-project-tasks-get': {
                        table: 'sys_ws_operation'
                        id: '8c6c46b606634a3fb632c61564d12a8e'
                    }
                    'route-project-tasks-post': {
                        table: 'sys_ws_operation'
                        id: '615db9eb539849b9a0cc4e927bfdadee'
                    }
                    'route-projects-get': {
                        table: 'sys_ws_operation'
                        id: '056e0592d4724bf7a47cd1b4c1c69a02'
                    }
                    'route-projects-post': {
                        table: 'sys_ws_operation'
                        id: '64256419fe7b4445814c6db139ecf8c9'
                    }
                    'route-task-get': {
                        table: 'sys_ws_operation'
                        id: '742799610a874ab1b953054aef7a0c9f'
                    }
                    'route-task-patch': {
                        table: 'sys_ws_operation'
                        id: 'a423e7aa04044a5c8b0e3a474aac79fb'
                    }
                    'route-task-projects-get': {
                        table: 'sys_ws_operation'
                        id: '7ffd7d8686b14a9ea88464dc9f9f0034'
                    }
                    'route-team-members-get': {
                        table: 'sys_ws_operation'
                        id: '074a7b3c4d89470497ef5a096223c857'
                    }
                    'route-users-search-get': {
                        table: 'sys_ws_operation'
                        id: 'd566993eab374b46b877fb0ec62e5a1f'
                    }
                    'route-view-get': {
                        table: 'sys_ws_operation'
                        id: '2748ece1d8974df4b4e3a4960c9dfb3f'
                    }
                    'route-view-patch': {
                        table: 'sys_ws_operation'
                        id: '1f32143f84854bc8bb250ac9e31b4090'
                    }
                    'src_server_business-rules_enforce-eav-xor_ts': {
                        table: 'sys_module'
                        id: '581d507d2f404750941cd7979b1389bd'
                    }
                    'src_server_business-rules_enforce-single-assignee_ts': {
                        table: 'sys_module'
                        id: '69043685587248dc9bfe3cb5019d27f4'
                    }
                    'src_server_rest_capacity-routes_ts': {
                        table: 'sys_module'
                        id: 'd16dfe64d746440b926108344e71c2e2'
                    }
                    'src_server_rest_config-routes_ts': {
                        table: 'sys_module'
                        id: 'c3d4e5f6a7b84901c2d3e4f5a6b7c803'
                    }
                    src_server_rest_helpers_ts: {
                        table: 'sys_module'
                        id: '634584b0d581430b8124d18e299b0120'
                    }
                    'src_server_rest_member-routes_ts': {
                        table: 'sys_module'
                        id: '444db5cea7b84e488d3e688c78c3fa7b'
                    }
                    'src_server_rest_portfolio-routes_ts': {
                        table: 'sys_module'
                        id: '22af65307a3d4da1a442be0292a50abe'
                    }
                    'src_server_rest_project-routes_ts': {
                        table: 'sys_module'
                        id: 'cff63451ebd645c7bdfa42dd78df432b'
                    }
                    'src_server_rest_view-routes_ts': {
                        table: 'sys_module'
                        id: '881ed2c71838437aacd09c29510a917d'
                    }
                    'src_server_script-includes_AccessService_server_js': {
                        table: 'sys_module'
                        id: 'e1ce70511d2b40488a8e1cb4c18b3a15'
                    }
                    'src_server_script-includes_CapacityService_server_js': {
                        table: 'sys_module'
                        id: '3bba0f50b8a947268d4c4991890b74eb'
                    }
                    'src_server_script-includes_MemberService_server_js': {
                        table: 'sys_module'
                        id: 'e546befa87574cc2b415af5799ecbe20'
                    }
                    'src_server_script-includes_PortfolioService_server_js': {
                        table: 'sys_module'
                        id: 'e5fe3addb10f43bfa4df9b7335f377f2'
                    }
                    'src_server_script-includes_ProjectTaskService_server_js': {
                        table: 'sys_module'
                        id: '8d8ede5323054f14b53be54420ee9b88'
                    }
                    'src_server_script-includes_UserService_server_js': {
                        table: 'sys_module'
                        id: '9d15ecc90b944bff9fe0b6539972600b'
                    }
                    'src_server_script-includes_ViewDataService_server_js': {
                        table: 'sys_module'
                        id: 'e39b2db9f07b460c903bcd8fbf9db07b'
                    }
                    'user-service': {
                        table: 'sys_script_include'
                        id: 'da74d14806714aca979adc11f447baec'
                    }
                    'view-data-service': {
                        table: 'sys_script_include'
                        id: '6cf113f88114428699823570fdc9628f'
                    }
                    'z-inflow-rest-api': {
                        table: 'sys_ws_definition'
                        id: '141ef836cbd744daa2509f711d6f7915'
                    }
                }
                composite: [
                    {
                        table: 'sys_choice'
                        id: '000f82f5d923405099ffce2d4132caa2'
                        key: {
                            name: 'x_gzi_ppm_custom_field_def'
                            element: 'type'
                            value: 'multi_select'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '004016ac96824753a58620aeeea77dd4'
                        key: {
                            name: 'x_gzi_ppm_cust_field_setting'
                            element: 'project_id'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sn_glider_source_artifact_m2m'
                        id: '006db349fd244786afdbccbace92bdc7'
                        deleted: true
                        key: {
                            application_file: 'ee7cd12cd45b4c07a511c587305a8e7f'
                            source_artifact: '9b67b1e8d6db45a3a33b8247c9f568c4'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '0088d5942a3746c0b3df1b3e9147b29b'
                        key: {
                            name: 'x_gzi_ppm_custom_view_column'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_index'
                        id: '00a5c917656045f79e70085d7631457b'
                        deleted: true
                        key: {
                            logical_table_name: 'x_gzi_ppm_user_res_profile'
                            col_name_string: 'user_id'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '0101adf189ad4cf1981d9b45f2d92a1c'
                        key: {
                            name: 'x_gzi_ppm_goal'
                            element: 'status'
                            value: 'on_hold'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '040ece2250ec48c091ce3d84b1601567'
                        key: {
                            name: 'x_gzi_ppm_task'
                            element: 'priority'
                            value: 'high'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '04ed1c659a4b42fd8b08a9a5004f5aa7'
                        key: {
                            name: 'x_gzi_ppm_portfolio_member'
                            element: 'user_id'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '05d24bfad31d444bb95ca182705dceeb'
                        key: {
                            name: 'x_gzi_ppm_portfolio_project'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '0609190b75704b0897507ecefc5eee08'
                        key: {
                            name: 'x_gzi_ppm_user_res_profile'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ux_lib_asset'
                        id: '063baa897b124e8ab1f9113292a24504'
                        deleted: true
                        key: {
                            name: 'x_gzi_ppm/RuleBuilderPage.js.map'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '06d4567160c94589b81faa761086cb43'
                        key: {
                            name: 'x_gzi_ppm_portfolio_project'
                            element: 'order_index'
                            language: 'en'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '06d977b9a6bb42ebb642ed1025c51360'
                        key: {
                            name: 'x_gzi_ppm_portfolio_member'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '06db640180ab4abf8b76d0a87d36f192'
                        key: {
                            name: 'x_gzi_ppm_project'
                            element: 'assignment_group'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '07138e3133ba07509937d1382e5c7b66'
                        key: {
                            sys_ui_section: {
                                id: '0b138e3133ba07509937d1382e5c7b12'
                                key: {
                                    name: 'x_gzi_ppm_custom_view'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'name'
                            position: '1'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '0754f63bb0324c0ba0ac62800e981ee5'
                        key: {
                            name: 'x_gzi_ppm_portfolio_project'
                            element: 'added_by'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '07667bf2e7294c20841ca0039b6458d5'
                        key: {
                            name: 'x_gzi_ppm_goal'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '083bc154ba164d4f82a297ece3b02a4d'
                        key: {
                            name: 'x_gzi_ppm_capacity_plan'
                            element: 'workspace_id'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '08576e68448141d0b302d6052cfd6868'
                        key: {
                            name: 'x_gzi_ppm_project'
                            element: 'notes'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '08827af9122543df8461b6190a031b3e'
                        key: {
                            name: 'x_gzi_ppm_project'
                            element: 'start_date'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '0a0bdf7200234e33910ebcbd90299a0e'
                        key: {
                            name: 'x_gzi_ppm_status_update'
                            element: 'status'
                            value: 'off_track'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_section'
                        id: '0b138e3133ba07509937d1382e5c7b12'
                        key: {
                            name: 'x_gzi_ppm_custom_view'
                            caption: 'NULL'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '0b138e3133ba07509937d1382e5c7b69'
                        key: {
                            sys_ui_section: {
                                id: '0b138e3133ba07509937d1382e5c7b12'
                                key: {
                                    name: 'x_gzi_ppm_custom_view'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'project_id'
                            position: '5'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '0b15563e048a475081e9eb5de9eb2249'
                        key: {
                            name: 'x_gzi_ppm_task'
                            element: 'approval_state'
                            value: 'request_changes'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '0b77c7f316034037b1213013ff88ce6b'
                        key: {
                            name: 'x_gzi_ppm_status_update'
                            element: 'text'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ux_lib_asset'
                        id: '0ba2ba10d8fb472890522ab88ad1b417'
                        deleted: true
                        key: {
                            name: 'x_gzi_ppm/CapacityPlanPage'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '0c1d86aa4e9e4865a681908a6fef71ae'
                        key: {
                            name: 'x_gzi_ppm_cust_field_setting'
                            element: 'field_def_id'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '0c33e01ce145491dac29543f9b137d5f'
                        key: {
                            name: 'x_gzi_ppm_custom_view_column'
                            element: 'width'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_index'
                        id: '0c7bd464661f4f128b717f14238066a2'
                        deleted: true
                        key: {
                            logical_table_name: 'x_gzi_ppm_task_dependency'
                            col_name_string: 'successor_task_id'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '0c89dabe6e9e462abdc81be1ca83018a'
                        key: {
                            name: 'x_gzi_ppm_portfolio'
                            element: 'description'
                        }
                    },
                    {
                        table: 'sys_index'
                        id: '0c9bc9cd948e458c82c3fbe9222ab8da'
                        deleted: true
                        key: {
                            logical_table_name: 'x_gzi_ppm_task'
                            col_name_string: 'assignee_id'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '0d63f587a11b476b899db807e17d332e'
                        key: {
                            name: 'x_gzi_ppm_portfolio'
                        }
                    },
                    {
                        table: 'sys_index'
                        id: '0d79aacddf7a465fa96d9c60bb944ed9'
                        deleted: true
                        key: {
                            logical_table_name: 'x_gzi_ppm_proj_res_alloc'
                            col_name_string: 'project_id'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '0dc4ef657d714744bd04a8ff9cc55c3d'
                        key: {
                            name: 'x_gzi_ppm_user_capacity'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '0e89b16829f14e0791c75c3ec034acc2'
                        key: {
                            name: 'x_gzi_ppm_status_update'
                            element: 'author_id'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '0ee1d6b30793433db1d69d1e5df62ff6'
                        key: {
                            name: 'x_gzi_ppm_proj_res_alloc'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '0ee4d01369ac4ae4a0ceb9f8637ceaa8'
                        key: {
                            name: 'x_gzi_ppm_task'
                            element: 'assignee_id'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '0f9f31fdbee348028fb019e4b1ee846a'
                        key: {
                            name: 'x_gzi_ppm_portfolio'
                            element: 'owner_id'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '0fa3bbae753a408e8886ab0b60240a2e'
                        key: {
                            name: 'x_gzi_ppm_custom_view_column'
                            element: 'order_index'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '0fd14c543a0643f58e30c95a0eb1c1e9'
                        key: {
                            name: 'x_gzi_ppm_task'
                            element: 'workspace_id'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '1176f54a40da48ae840932e3f208ef66'
                        key: {
                            name: 'x_gzi_ppm_custom_view'
                            element: 'view_type'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '118def9ccdd24b5396e0528dfa55703f'
                        key: {
                            name: 'x_gzi_ppm_user_capacity'
                            element: 'baseline_hours_per_week'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '13138e3133ba07509937d1382e5c7b6c'
                        key: {
                            sys_ui_section: {
                                id: '0b138e3133ba07509937d1382e5c7b12'
                                key: {
                                    name: 'x_gzi_ppm_custom_view'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'user_id'
                            position: '8'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '132c2526dddc4440a6ac569f95577842'
                        key: {
                            name: 'x_gzi_ppm_project'
                            element: 'workspace_id'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '136598d03f384291b44477d3a5dc0bb5'
                        key: {
                            name: 'x_gzi_ppm_task'
                            element: 'description'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '1374a928566547d283c09ffe198b742b'
                        key: {
                            name: 'x_gzi_ppm_portfolio_member'
                            element: 'role'
                            value: 'viewer'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '13ad53ac1ee34019891875049d7f775e'
                        key: {
                            name: 'x_gzi_ppm_project_member'
                            element: 'user_id'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '13b80be457f54c7bbe9c663cc21c59a3'
                        key: {
                            name: 'x_gzi_ppm_portfolio'
                            element: 'color'
                        }
                    },
                    {
                        table: 'sys_index'
                        id: '14ca87674dc44445813e9232a93e727a'
                        deleted: true
                        key: {
                            logical_table_name: 'x_gzi_ppm_custom_field_value'
                            col_name_string: 'project_id'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '14e386f133ba07509937d1382e5c7bc9'
                        key: {
                            sys_ui_section: {
                                id: '5ce38eb133ba07509937d1382e5c7be5'
                                key: {
                                    name: 'x_gzi_ppm_task_dependency'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: '.begin_split'
                            position: '0'
                        }
                    },
                    {
                        table: 'sys_index'
                        id: '15a47b4c2e0c4eff9aeb2cecf79350f2'
                        deleted: true
                        key: {
                            logical_table_name: 'x_gzi_ppm_capacity_plan'
                            col_name_string: 'portfolio_id'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '15a8e03ed1474218a2da0dca2faa9eb6'
                        key: {
                            name: 'x_gzi_ppm_custom_field_value'
                            element: 'project_id'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '162a3c469a9c4ccca4110de82af2f79e'
                        key: {
                            name: 'x_gzi_ppm_project_member'
                            element: 'role'
                            value: 'viewer'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '16c6e49b1d4a428aafd6f115d55afdf2'
                        key: {
                            name: 'x_gzi_ppm_task'
                            element: 'due_date'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '1734be47ea294d11a7ee1bbec67e7546'
                        key: {
                            name: 'x_gzi_ppm_project'
                            element: 'owner_id'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '1881f02ac3e149bd97a4cb7d3fc79bdb'
                        key: {
                            name: 'x_gzi_ppm_portfolio'
                            element: 'name'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '18e386f133ba07509937d1382e5c7bca'
                        key: {
                            sys_ui_section: {
                                id: '5ce38eb133ba07509937d1382e5c7be5'
                                key: {
                                    name: 'x_gzi_ppm_task_dependency'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'dependency_type'
                            position: '2'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '1a4519a13cf14767989f0f316c360b47'
                        key: {
                            name: 'x_gzi_ppm_project_task'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '1ae3a55044024fd5a7cacc3fff8cfa9e'
                        key: {
                            name: 'x_gzi_ppm_capacity_plan'
                            element: 'group_id'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '1b147853bca341caafd9e026e5e96f2f'
                        key: {
                            name: 'x_gzi_ppm_capacity_plan'
                            element: 'time_granularity'
                            value: 'month'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_index'
                        id: '1b5d879053d34c33aea4dda91198293a'
                        deleted: true
                        key: {
                            logical_table_name: 'x_gzi_ppm_task'
                            col_name_string: 'workspace_id'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '1bb5787433374d45ab9239c77e6feb51'
                        key: {
                            name: 'x_gzi_ppm_task_dependency'
                            element: 'dependency_type'
                            language: 'en'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '1be3cb365ed94b93a7ff0ceb2daca95e'
                        key: {
                            name: 'x_gzi_ppm_cust_field_setting'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '1c3c2a452ea046fe924c760b5ef67e18'
                        key: {
                            name: 'x_gzi_ppm_task_dependency'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '1cb0b5bf3cd54206b1c11a40706461b2'
                        key: {
                            name: 'x_gzi_ppm_project'
                            element: 'status'
                            value: 'on_track'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '1ce386f133ba07509937d1382e5c7bcb'
                        key: {
                            sys_ui_section: {
                                id: '5ce38eb133ba07509937d1382e5c7be5'
                                key: {
                                    name: 'x_gzi_ppm_task_dependency'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'successor_task_id'
                            position: '4'
                        }
                    },
                    {
                        table: 'sys_ux_lib_asset'
                        id: '1d3686cbdfd54d20a71a8faae6aae5a0'
                        deleted: true
                        key: {
                            name: 'x_gzi_ppm/vendor-react-router--5b9989d8'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '1d5c833bcbc847df8cb2f611dc27aebc'
                        key: {
                            name: 'x_gzi_ppm_section'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '1d9aebfa30ef4ff0919698ff115c8c50'
                        key: {
                            name: 'x_gzi_ppm_task'
                            element: 'task_type'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '1e77b095efc7484691993660ba22c755'
                        key: {
                            name: 'x_gzi_ppm_task_dependency'
                            element: 'dependency_type'
                            value: 'finish_to_start'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '1e79c10a118e4faf947e355d1f1cd50f'
                        key: {
                            name: 'x_gzi_ppm_custom_view_column'
                            element: 'is_visible'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '1e7ace4f4c39439c94d8458762f78cc0'
                        key: {
                            name: 'x_gzi_ppm_workspace_team'
                            element: 'workspace_id'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '1f529d3706694d05a36013667c725b99'
                        key: {
                            name: 'x_gzi_ppm_custom_view'
                            element: 'group_by'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '1fc90a4a28e847759085d1758ac07c1a'
                        key: {
                            name: 'x_gzi_ppm_capacity_plan'
                            element: 'time_granularity'
                            value: 'day'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_index'
                        id: '20691dffe4574249b1f1a8cca3f1f7b9'
                        deleted: true
                        key: {
                            logical_table_name: 'x_gzi_ppm_custom_field_def'
                            col_name_string: 'workspace_id'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '20931af42959447da7360892051237da'
                        key: {
                            name: 'x_gzi_ppm_project_task'
                            element: 'section_id'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '20f3213a45f44a4bab5ff2c529f57d27'
                        key: {
                            name: 'x_gzi_ppm_status_update'
                            element: 'entity_type'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '21bd8c140c9e4b0c876c42bdeea4ed26'
                        key: {
                            name: 'x_gzi_ppm_custom_view'
                            element: 'sort_config'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '224ef811e08b42a4a8354b2e42474d39'
                        key: {
                            name: 'x_gzi_ppm_custom_view'
                            element: 'is_default'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '2323067133ba07509937d1382e5c7b34'
                        key: {
                            sys_ui_section: {
                                id: 'ab23cef1333a07509937d1382e5c7bdd'
                                key: {
                                    name: 'x_gzi_ppm_capacity_plan'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'time_granularity'
                            position: '7'
                        }
                    },
                    {
                        table: 'sys_ux_lib_asset'
                        id: '23d91cff3213414ba6551313e8eb3ea4'
                        deleted: true
                        key: {
                            name: 'x_gzi_ppm/vendor-react-dom--7d9070e7.js.map'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '23ff8f25c62041a4a6a1534f873058dd'
                        key: {
                            name: 'x_gzi_ppm_task'
                            element: 'task_type'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '259ff735074d45508acc49907e867ec2'
                        key: {
                            name: 'x_gzi_ppm_custom_view'
                            element: 'name'
                        }
                    },
                    {
                        table: 'sn_glider_source_artifact_m2m'
                        id: '25cf1febd5b84113b618201913190490'
                        deleted: true
                        key: {
                            application_file: '365629789f4247a7bf3916e5888bf82b'
                            source_artifact: '4e8e46929bde432790cfcb7104335322'
                        }
                    },
                    {
                        table: 'sn_glider_source_artifact_m2m'
                        id: '26c39d71333d4549a13e9ba82b8d4b11'
                        deleted: true
                        key: {
                            application_file: '1d3686cbdfd54d20a71a8faae6aae5a0'
                            source_artifact: '4e8e46929bde432790cfcb7104335322'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '2723067133ba07509937d1382e5c7b30'
                        key: {
                            sys_ui_section: {
                                id: 'ab23cef1333a07509937d1382e5c7bdd'
                                key: {
                                    name: 'x_gzi_ppm_capacity_plan'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'group_id'
                            position: '1'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '2723067133ba07509937d1382e5c7b35'
                        key: {
                            sys_ui_section: {
                                id: 'ab23cef1333a07509937d1382e5c7bdd'
                                key: {
                                    name: 'x_gzi_ppm_capacity_plan'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: '.end_split'
                            position: '9'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '2817bc029630440b8acbfc05858ccc3c'
                        key: {
                            name: 'x_gzi_ppm_section'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '28b50b243a854e87abc46eb10712c0cd'
                        key: {
                            name: 'x_gzi_ppm_task'
                            element: 'status'
                            value: 'open'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '28fa4dc7cbb54923aa92d07dfe57b5f4'
                        key: {
                            name: 'x_gzi_ppm_project'
                            element: 'sync_with_jira'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '297b2b379bbc48519878f0ebcf707446'
                        key: {
                            name: 'x_gzi_ppm_project'
                            element: 'description'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '29cb1e4170a048dd8e7eee9a58f4d826'
                        key: {
                            name: 'x_gzi_ppm_status_update'
                            element: 'entity_type'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '2ad6ddc64f7a4d98bdd3ea4ce730a110'
                        key: {
                            name: 'x_gzi_ppm_project_member'
                            element: 'role'
                            value: 'editor'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '2ae96ee0220f4fe08d2c8519ccb05a34'
                        key: {
                            name: 'x_gzi_ppm_task'
                            element: 'description'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '2b23067133ba07509937d1382e5c7b2f'
                        key: {
                            sys_ui_section: {
                                id: 'ab23cef1333a07509937d1382e5c7bdd'
                                key: {
                                    name: 'x_gzi_ppm_capacity_plan'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'name'
                            position: '0'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '2b23067133ba07509937d1382e5c7b31'
                        key: {
                            sys_ui_section: {
                                id: 'ab23cef1333a07509937d1382e5c7bdd'
                                key: {
                                    name: 'x_gzi_ppm_capacity_plan'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: '.begin_split'
                            position: '3'
                        }
                    },
                    {
                        table: 'sys_ux_lib_asset'
                        id: '2b68d22f8223450eb868e8767c078df5'
                        deleted: true
                        key: {
                            name: 'x_gzi_ppm/VirtualizedGantt.js.map'
                        }
                    },
                    {
                        table: 'sys_index'
                        id: '2c37102939804b7799e6b663dfca3a19'
                        key: {
                            logical_table_name: 'x_gzi_ppm_task_dependency'
                            col_name_string: 'predecessor_task_id,successor_task_id'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '2d03a16fd59f40cfb0d45671b57fabda'
                        key: {
                            name: 'x_gzi_ppm_user_capacity'
                            element: 'user_profile_id'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '2d783b1bfd814e5eabe3d1c16676ceb7'
                        key: {
                            name: 'x_gzi_ppm_workspace_user'
                            element: 'user_id'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '2df10909cf554d6a8a2aad737b84f328'
                        key: {
                            name: 'x_gzi_ppm_proj_res_alloc'
                            element: 'project_id'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '2e51a36ac74c49309b5e253ba9b9bed8'
                        key: {
                            name: 'x_gzi_ppm_capacity_plan'
                            element: 'time_granularity'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '2e8a0bb03c204c41b6efcd0fd2992f9c'
                        key: {
                            name: 'x_gzi_ppm_cust_field_setting'
                            element: 'project_id'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '2ec233f6742840d795b8a75a14581c49'
                        key: {
                            name: 'x_gzi_ppm_custom_view_column'
                        }
                    },
                    {
                        table: 'sys_index'
                        id: '2ef2ae1f94564cc48439cc163a49b484'
                        deleted: true
                        key: {
                            logical_table_name: 'x_gzi_ppm_goal'
                            col_name_string: 'owner_id'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '2f23067133ba07509937d1382e5c7b32'
                        key: {
                            sys_ui_section: {
                                id: 'ab23cef1333a07509937d1382e5c7bdd'
                                key: {
                                    name: 'x_gzi_ppm_capacity_plan'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'workspace_id'
                            position: '5'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '2fcafef84d8f4b199f938f92ac4523e7'
                        key: {
                            name: 'x_gzi_ppm_custom_field_value'
                            element: 'portfolio_id'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '3017d88e60d446ed948aecef5eb427dc'
                        key: {
                            name: 'x_gzi_ppm_goal'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '30bbb13cf1a94a55b8833a26dfafb1c3'
                        key: {
                            name: 'x_gzi_ppm_project'
                            element: 'status'
                            value: 'at_risk'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '3118de4fcd31487db5bf5667c6aa2137'
                        key: {
                            name: 'x_gzi_ppm_resource_role'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '337eb3daeb7244fd9abc3e9c70075eb3'
                        key: {
                            name: 'x_gzi_ppm_project'
                            element: 'notes'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '33c35c708f55421aa0f7a476d116621c'
                        key: {
                            name: 'x_gzi_ppm_task'
                            element: 'due_date'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '33d490a187e04b168d3567230397fb15'
                        key: {
                            name: 'x_gzi_ppm_project'
                            element: 'due_date'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '341585b461f845f48482f84944962d11'
                        key: {
                            name: 'x_gzi_ppm_custom_field_def'
                            element: 'type'
                            value: 'date'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '349c500805f0413b835776c2c977121f'
                        key: {
                            name: 'x_gzi_ppm_resource_role'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '3543b36c4de2444cac42db627627aaaf'
                        key: {
                            name: 'x_gzi_ppm_custom_field_def'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '35c3bb8c627449b093f635d583db1fd9'
                        key: {
                            name: 'x_gzi_ppm_custom_view'
                            element: 'view_type'
                            value: 'timeline'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ux_lib_asset'
                        id: '365629789f4247a7bf3916e5888bf82b'
                        deleted: true
                        key: {
                            name: 'x_gzi_ppm/vendor-react-dom--7d9070e7'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '366f3b224f0344b7ae18f36a0898f149'
                        key: {
                            name: 'x_gzi_ppm_section'
                            element: 'project_id'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '3675be3d4f4342358e6157dff7a7023f'
                        key: {
                            name: 'x_gzi_ppm_custom_field_value'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '36b2e214c4f445478e90f5567059c4e0'
                        key: {
                            name: 'x_gzi_ppm_project'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '3703b45d64924752b19863007c24a560'
                        key: {
                            name: 'x_gzi_ppm_custom_field_def'
                            element: 'workspace_id'
                        }
                    },
                    {
                        table: 'sys_index'
                        id: '37c131c2316d424f8f9a480c477327c3'
                        deleted: true
                        key: {
                            logical_table_name: 'x_gzi_ppm_project_member'
                            col_name_string: 'project_id'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '38889594aa7547f99ac78a4b93640d59'
                        key: {
                            name: 'x_gzi_ppm_custom_field_value'
                            element: 'value_string'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '388e72ae645048eca44f3ed8bf757211'
                        key: {
                            name: 'x_gzi_ppm_status_update'
                            element: 'entity_type'
                            value: 'goal'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_index'
                        id: '390140c80ff14014bd259cbea064bd43'
                        key: {
                            logical_table_name: 'x_gzi_ppm_portfolio_project'
                            col_name_string: 'portfolio_id,project_id'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '3917305323ac42bf814350467da35e31'
                        key: {
                            name: 'x_gzi_ppm_portfolio_project'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '392c7641b76e4dd7ab544fec03dcf7d0'
                        key: {
                            name: 'x_gzi_ppm_user_res_profile'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_section'
                        id: '39b3ceb133ba07509937d1382e5c7b00'
                        key: {
                            name: 'x_gzi_ppm_workspace'
                            caption: 'NULL'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '3a11aaea3be445b38f0156b5f0ba05dd'
                        key: {
                            name: 'x_gzi_ppm_custom_view'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '3a432b5c7e7c46b78edd5a2917d347d3'
                        key: {
                            name: 'x_gzi_ppm_custom_view'
                            element: 'view_type'
                            value: 'progress'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '3a8b42be3e1046f684a33e480c9460c7'
                        key: {
                            name: 'x_gzi_ppm_status_update'
                            element: 'status'
                            value: 'on_track'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '3b1995729dd84e7f92971c0a6ee80e6a'
                        key: {
                            name: 'x_gzi_ppm_user_res_profile'
                            element: 'role_id'
                        }
                    },
                    {
                        table: 'sn_glider_source_artifact_m2m'
                        id: '3b23f3215c2a4db8a65180d0f0709cdf'
                        key: {
                            application_file: '7c96e2863ecc4cc6be05275b0d635fb1'
                            source_artifact: '4e8e46929bde432790cfcb7104335322'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '3b476a0388f64e9a9bbd42cd59902cef'
                        key: {
                            name: 'x_gzi_ppm_goal'
                            element: 'status'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '3bc44e687f53442f88477d6cac461086'
                        key: {
                            name: 'x_gzi_ppm_proj_res_alloc'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '3c6cc4660b2b4746a9097d2460a09211'
                        key: {
                            name: 'x_gzi_ppm_custom_view'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '3ca7ebc652104aaa8223f613dd653704'
                        key: {
                            name: 'x_gzi_ppm_proj_res_alloc'
                            element: 'start_date'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '3cc6aa967701403abf0483f3edeb7d5e'
                        key: {
                            name: 'x_gzi_ppm_custom_field_def'
                            element: 'name'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '3cdae95b12f640d1bc37b1f338ea13ea'
                        key: {
                            name: 'x_gzi_ppm_project'
                            element: 'priority'
                        }
                    },
                    {
                        table: 'sys_ux_lib_asset'
                        id: '3d11aa90ab7f4d43bdb477949d00a13b'
                        deleted: true
                        key: {
                            name: 'x_gzi_ppm/vendor-react-dom--74c096a2'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '3db08c65863e4762a6b596b0e970f06c'
                        key: {
                            name: 'x_gzi_ppm_portfolio'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '3e2d3b92fd02437d9e1199195073cfcc'
                        key: {
                            name: 'x_gzi_ppm_cust_field_setting'
                            element: 'field_def_id'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '3ea17479761d42f8b159f97108aff757'
                        key: {
                            name: 'x_gzi_ppm_custom_view'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '3f04aa9a51a440d596f7eb193c0c58f3'
                        key: {
                            name: 'x_gzi_ppm_task'
                            element: 'completed'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '3fae837bd66845c38db7e1460ca21887'
                        key: {
                            name: 'x_gzi_ppm_custom_view'
                            element: 'portfolio_id'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '40129a3cffe94264a99fa349458773fa'
                        key: {
                            name: 'x_gzi_ppm_project'
                            element: 'priority'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '4025175a1d4a4fa9a608615a903dbc96'
                        key: {
                            name: 'x_gzi_ppm_custom_view_column'
                            element: 'field_path'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '4118f9bc107b49c880954978cb3e337d'
                        key: {
                            name: 'x_gzi_ppm_section'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '414eeca859694c369bf059565ffb6cd1'
                        key: {
                            name: 'x_gzi_ppm_task'
                            element: 'approval_state'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '417a1eebe1dc404194a1bfe03414458c'
                        key: {
                            name: 'x_gzi_ppm_portfolio_member'
                            element: 'role'
                        }
                    },
                    {
                        table: 'sys_index'
                        id: '421329d7e8d746d882e55e7ca1633058'
                        deleted: true
                        key: {
                            logical_table_name: 'x_gzi_ppm_custom_view_column'
                            col_name_string: 'view_id'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '42570db9396747b0a81217442723e32b'
                        key: {
                            name: 'x_gzi_ppm_task'
                            element: 'status'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '42f1d1cc28484c5a91460ac68add1a95'
                        key: {
                            name: 'x_gzi_ppm_project'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '42fdfa39b6fd420db02b97c4fcb08fef'
                        key: {
                            name: 'x_gzi_ppm_cust_field_setting'
                            element: 'portfolio_id'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '43138e3133ba07509937d1382e5c7b67'
                        key: {
                            sys_ui_section: {
                                id: '0b138e3133ba07509937d1382e5c7b12'
                                key: {
                                    name: 'x_gzi_ppm_custom_view'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'filter_query'
                            position: '2'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '4330d1bb3a5942f5acd4aee18650218a'
                        key: {
                            name: 'x_gzi_ppm_custom_view_column'
                            element: 'width'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '43d5c82683c6486d9d519463b727ed77'
                        key: {
                            name: 'x_gzi_ppm_custom_view_column'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '445be83d2dd04c4f8c7f637452284307'
                        key: {
                            name: 'x_gzi_ppm_task'
                            element: 'approval_state'
                            value: 'reject'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '4528cdf662944d3484f51d4f3f5de9a6'
                        key: {
                            name: 'x_gzi_ppm_task_dependency'
                            element: 'predecessor_task_id'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '457deee8a4e7499ebd53b513c1dfba38'
                        key: {
                            name: 'x_gzi_ppm_project_member'
                            element: 'user_id'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '45953465481a4fa3bcacd0f6129c6495'
                        key: {
                            name: 'x_gzi_ppm_capacity_plan'
                            element: 'owner_id'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '45b8e92d2be74e66973a90502d3212d7'
                        key: {
                            name: 'x_gzi_ppm_task'
                            element: 'notes'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '463a14b503524760ab8c1694cdadd652'
                        key: {
                            name: 'x_gzi_ppm_project'
                            element: 'name'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_index'
                        id: '47877b90bfdc4bb8977adde6a1ce6718'
                        deleted: true
                        key: {
                            logical_table_name: 'x_gzi_ppm_capacity_plan'
                            col_name_string: 'group_id'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '489486e43fb244c594218b521a31eefc'
                        key: {
                            name: 'x_gzi_ppm_task'
                            element: 'notes'
                        }
                    },
                    {
                        table: 'sys_ux_lib_asset'
                        id: '48fc9c65b07d472ab2a009075892488c'
                        deleted: true
                        key: {
                            name: 'x_gzi_ppm/RuleBuilderPage'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '49fcd58c4b664a51a1a1e3acb0fce063'
                        key: {
                            name: 'x_gzi_ppm_custom_view_column'
                            element: 'field_path'
                        }
                    },
                    {
                        table: 'sys_index'
                        id: '4af4023a74d848c6a55761b08f2abcdb'
                        deleted: true
                        key: {
                            logical_table_name: 'x_gzi_ppm_project'
                            col_name_string: 'assignment_group'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '4b91f53979b54b4f8adf7108ffabf242'
                        key: {
                            name: 'x_gzi_ppm_portfolio_member'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_index'
                        id: '4cabc1aeca144d108123a0a499889f69'
                        deleted: true
                        key: {
                            logical_table_name: 'x_gzi_ppm_project_task'
                            col_name_string: 'section_id'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '4d55964d10414586bd107a80711effdd'
                        key: {
                            name: 'x_gzi_ppm_section'
                            element: 'order_index'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '4e0ded28e6fa476499253c3bb80b9b9d'
                        key: {
                            name: 'x_gzi_ppm_project_task'
                            element: 'order_index'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '4e2e60e0f81b446e9e533b50a008aeac'
                        key: {
                            name: 'x_gzi_ppm_workspace'
                            element: 'name'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '4e5def7668a4421aa10deb49b5836b95'
                        key: {
                            name: 'x_gzi_ppm_project'
                        }
                    },
                    {
                        table: 'sn_glider_source_artifact'
                        id: '4e8e46929bde432790cfcb7104335322'
                        key: {
                            name: 'x_gzi_ppm_workspace.do - BYOUI Files'
                        }
                    },
                    {
                        table: 'sys_ux_lib_asset'
                        id: '4ee2d870c4804876bd1f079570afe669'
                        deleted: true
                        key: {
                            name: 'x_gzi_ppm/rules'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '4ef3f887f9e84d7dbf6e51ee06fc6bd3'
                        key: {
                            name: 'x_gzi_ppm_status_update'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '4fa8aa0451f14c2aaf24880047caaa43'
                        key: {
                            name: 'x_gzi_ppm_task'
                            element: 'completed'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '5049334af46a4fa09df2ed7c99d03794'
                        key: {
                            name: 'x_gzi_ppm_project_task'
                            element: 'task_id'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '50fe35fc432e4969bb8f02b8e61bdfc2'
                        key: {
                            name: 'x_gzi_ppm_user_res_profile'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '520b1cfcf0c84518a60488cd9d46b11b'
                        key: {
                            name: 'x_gzi_ppm_custom_field_def'
                        }
                    },
                    {
                        table: 'sys_ux_lib_asset'
                        id: '52628ec6e2774c5ba594621c77ebaef6'
                        deleted: true
                        key: {
                            name: 'x_gzi_ppm/vendor-react-router--5b9989d8.js.map'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '52fd7745d70f4bd383ae8fd3212bd560'
                        key: {
                            name: 'x_gzi_ppm_custom_field_value'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '5356a8ae89534469ac42ebca9633c8da'
                        key: {
                            name: 'x_gzi_ppm_status_update'
                            element: 'status'
                            value: 'at_risk'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '53730601ecf44569b94fd15f48cb40ae'
                        key: {
                            name: 'x_gzi_ppm_goal'
                            element: 'name'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sn_glider_source_artifact_m2m'
                        id: '537307d3f12a44e6a3e0e1a2d9f5d2b4'
                        deleted: true
                        key: {
                            application_file: 'bd5eb67e526a4f79805ada1c45173286'
                            source_artifact: '9b67b1e8d6db45a3a33b8247c9f568c4'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '5378fdc7005e4215ade6d7e73bf09588'
                        key: {
                            name: 'x_gzi_ppm_proj_res_alloc'
                            element: 'role_id'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '53de6327c34b40eb99a38adf18ecb0b4'
                        key: {
                            name: 'x_gzi_ppm_proj_res_alloc'
                            element: 'start_date'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '54934cc45e514f73a2663ca6bb837b9b'
                        key: {
                            name: 'x_gzi_ppm_custom_view'
                            element: 'project_id'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '550449546f2343e7b234843dcfdce8bf'
                        key: {
                            name: 'x_gzi_ppm_project'
                            element: 'priority'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '555cb6f7f3144ced94ec681cb0b6cc8c'
                        key: {
                            name: 'x_gzi_ppm_custom_view'
                            element: 'portfolio_id'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '55743e16bfd646adb50f6321f0779ab3'
                        key: {
                            name: 'x_gzi_ppm_task'
                            element: 'status'
                            value: 'complete'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '55cbb29c55ea4b90b066550d1065bc2f'
                        key: {
                            name: 'x_gzi_ppm_project'
                            element: 'priority'
                            value: 'low'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '5690d5dffe9b4076a1012f8f0ecf906f'
                        key: {
                            name: 'x_gzi_ppm_workspace_team'
                            element: 'workspace_id'
                        }
                    },
                    {
                        table: 'sys_ux_lib_asset'
                        id: '570ebe10b1f646dba2a04ef94d0401a1'
                        deleted: true
                        key: {
                            name: 'x_gzi_ppm/rules.js.map'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '57c081c181b04e9d9db2ae9f23d67363'
                        key: {
                            name: 'x_gzi_ppm_task'
                            element: 'status'
                            value: 'in_progress'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '58cd48c90f6446a6b7ea8256d5179d2e'
                        key: {
                            name: 'x_gzi_ppm_proj_res_alloc'
                            element: 'role_id'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '59b42773f5f54d6b9227d72adf7ed7d2'
                        key: {
                            name: 'x_gzi_ppm_section'
                            element: 'project_id'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '59cd259e6dbd4e65818a5c55f3665d86'
                        key: {
                            name: 'x_gzi_ppm_status_update'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '59e7afe5c7ff4211b2c160127d3868bf'
                        key: {
                            name: 'x_gzi_ppm_task'
                            element: 'work_notes'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '59f91a860e2d42de9314d50bf438d094'
                        key: {
                            name: 'x_gzi_ppm_portfolio'
                            element: 'description'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '5bfe211dbeda41fd98026a13a9864a3b'
                        key: {
                            name: 'x_gzi_ppm_custom_view'
                            element: 'view_type'
                            value: 'workload'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '5cb417a2752d422a860206ca9d3a1749'
                        key: {
                            name: 'x_gzi_ppm_custom_field_value'
                            element: 'value_string'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_section'
                        id: '5ce38eb133ba07509937d1382e5c7be5'
                        key: {
                            name: 'x_gzi_ppm_task_dependency'
                            caption: 'NULL'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '5cee2413466b4dcbb22ee1a9a6c0a273'
                        key: {
                            name: 'x_gzi_ppm_task'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '5d6ba8fcdc8f46c5b2f654d5509cc234'
                        key: {
                            name: 'x_gzi_ppm_task'
                            element: 'watch_list'
                        }
                    },
                    {
                        table: 'sn_glider_source_artifact_m2m'
                        id: '5e0cdeeca7fe43d191577a6dea7b2b9a'
                        deleted: true
                        key: {
                            application_file: '5f01aa682bf04edeaf4d8550e1c8caaf'
                            source_artifact: '4e8e46929bde432790cfcb7104335322'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '5e1f8b83a7dc49f5a34c9b6c243e9cd4'
                        key: {
                            name: 'x_gzi_ppm_proj_res_alloc'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '5e34603f604f4292870848f09caad799'
                        key: {
                            name: 'x_gzi_ppm_project'
                            element: 'priority'
                            value: 'high'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sn_glider_source_artifact_m2m'
                        id: '5e7ca36cffbb45608193332b902d2cf5'
                        deleted: true
                        key: {
                            application_file: 'd20dbb3984a841af80a74e38211e9fa6'
                            source_artifact: '4e8e46929bde432790cfcb7104335322'
                        }
                    },
                    {
                        table: 'sys_ux_lib_asset'
                        id: '5f01aa682bf04edeaf4d8550e1c8caaf'
                        deleted: true
                        key: {
                            name: 'x_gzi_ppm/main.js.map'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '5f138e3133ba07509937d1382e5c7b6c'
                        key: {
                            sys_ui_section: {
                                id: '0b138e3133ba07509937d1382e5c7b12'
                                key: {
                                    name: 'x_gzi_ppm_custom_view'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: '.end_split'
                            position: '9'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '6146a65623274ab286e03ed16dad6e1c'
                        key: {
                            name: 'x_gzi_ppm_capacity_plan'
                            element: 'time_granularity'
                            value: 'week'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '619cbf95cf804ac0a37fae269d2a889d'
                        key: {
                            name: 'x_gzi_ppm_user_capacity'
                            element: 'baseline_hours_per_week'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '62a6f3e9fdea4995936a1319bab5c4a8'
                        key: {
                            name: 'x_gzi_ppm_portfolio_project'
                            element: 'order_index'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '62d1f5b83f5543bf8a2ea2ac14aa95ff'
                        key: {
                            name: 'x_gzi_ppm_task'
                            element: 'status'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '63b1c3b468ef4d56948925fb1236c85c'
                        key: {
                            name: 'x_gzi_ppm_task'
                            element: 'parent_task_id'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '63bc020c353b45b1aeb920828d49efdc'
                        key: {
                            name: 'x_gzi_ppm_workspace_user'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '63c6d17c341e43acbc09c63273b545c5'
                        key: {
                            name: 'x_gzi_ppm_project_member'
                            element: 'role'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '6492a68780af45dbb97db3ed5f7b3f50'
                        key: {
                            name: 'x_gzi_ppm_project'
                            element: 'percent_complete'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '65318d47920d40bdbba0a2ea134f18a7'
                        key: {
                            name: 'x_gzi_ppm_custom_view'
                            element: 'view_type'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '658fb4cdda6a436aa5ad29fd3a36788b'
                        key: {
                            name: 'x_gzi_ppm_capacity_plan'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '65ced62be366424f8c9296b26f5366fb'
                        key: {
                            name: 'x_gzi_ppm_task_dependency'
                            element: 'dependency_type'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '65e825843f0643d9be4f9c5be51cb7ee'
                        key: {
                            name: 'x_gzi_ppm_portfolio_project'
                            element: 'project_id'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '6633836b11054c34b847135a33cd8a36'
                        key: {
                            name: 'x_gzi_ppm_goal'
                            element: 'status'
                            value: 'off_track'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '6651a10ac71d424680e0932f68d3d6a4'
                        key: {
                            name: 'x_gzi_ppm_capacity_plan'
                        }
                    },
                    {
                        table: 'sys_ux_lib_asset'
                        id: '6884c59aa62d4204b6bd94ce560cba08'
                        key: {
                            name: 'x_gzi_ppm/index'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '69b673f72e494976b69481e5fc0a1f16'
                        key: {
                            name: 'x_gzi_ppm_custom_field_def'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '6a292e42f21348a4a691f59b9cd6e222'
                        key: {
                            name: 'x_gzi_ppm_capacity_plan'
                            element: 'workspace_id'
                        }
                    },
                    {
                        table: 'sys_ux_lib_asset'
                        id: '6a33538302cf45cd8a1f84f880ad5d7a'
                        deleted: true
                        key: {
                            name: 'x_gzi_ppm/PortfolioDashboardWidgets'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '6a9513504c0d4f47910149b3609fef18'
                        key: {
                            name: 'x_gzi_ppm_project'
                            element: 'workspace_id'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '6abe9a98dceb40bba68a119d950037bb'
                        key: {
                            name: 'x_gzi_ppm_capacity_plan'
                            element: 'time_granularity'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '6ac7a312abcb4d5d9310a33bf701bd37'
                        key: {
                            name: 'x_gzi_ppm_capacity_plan'
                            element: 'filter_config'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '6af27e51006040fc872b8ddd22b51d0c'
                        key: {
                            name: 'x_gzi_ppm_task'
                            element: 'task_type'
                            value: 'approval'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '6b265c0b29264c6080af55f157bfe6da'
                        key: {
                            name: 'x_gzi_ppm_resource_role'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '6ba6e198fd364cffb7681c1ab48c339c'
                        key: {
                            name: 'x_gzi_ppm_cust_field_setting'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '6bd9d0fd82194bf69c25718285447a4d'
                        key: {
                            name: 'x_gzi_ppm_portfolio'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '6c3f0dcfe89447669a256cf3914668b7'
                        key: {
                            name: 'x_gzi_ppm_portfolio_member'
                            element: 'role'
                            value: 'editor'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '6c9565723b714ad191ff4b01ccbe264f'
                        key: {
                            name: 'x_gzi_ppm_portfolio_member'
                            element: 'portfolio_id'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '6cb76cb6222144eb8c6837f40a28d709'
                        key: {
                            name: 'x_gzi_ppm_project_task'
                            element: 'project_id'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '6d04cba1ccc94dafa2707ba114305c37'
                        key: {
                            name: 'x_gzi_ppm_task'
                            element: 'task_type'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '6d4d042a9ed4426f8134be848e25cf6d'
                        key: {
                            name: 'x_gzi_ppm_portfolio_member'
                            element: 'role'
                            value: 'commenter'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '6dd5fec1db5549e6ba59ab6a9ddbdef5'
                        key: {
                            name: 'x_gzi_ppm_task'
                            element: 'task_type'
                            value: 'task'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '6e8bb0ee94fa45efb67ddca30b40a343'
                        key: {
                            name: 'x_gzi_ppm_custom_field_def'
                            element: 'type'
                            value: 'currency'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '6ec257b6ef35455aa43e83380a48b0be'
                        key: {
                            name: 'x_gzi_ppm_goal'
                            element: 'name'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '6f4d4558eb744be2aac621edf6b1b9cb'
                        key: {
                            name: 'x_gzi_ppm_custom_field_def'
                            element: 'type'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '6f86e578cc6645c2a9acb016035643c6'
                        key: {
                            name: 'x_gzi_ppm_task_dependency'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '6f8cb96a343644c6aaca5a10508d9f25'
                        key: {
                            name: 'x_gzi_ppm_custom_view'
                            element: 'project_id'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '7026f5c128c04a27a1efd5d15e2e396c'
                        key: {
                            name: 'x_gzi_ppm_custom_field_def'
                            element: 'type'
                            value: 'text'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '7183f5bc0e22449c86a023f3dd9a1078'
                        key: {
                            name: 'x_gzi_ppm_task'
                            element: 'priority'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '71fa15924e8a48deb01005f5ef30ee06'
                        key: {
                            name: 'x_gzi_ppm_workspace_user'
                            element: 'workspace_id'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '72b303624179424da1c7509f917efcf8'
                        key: {
                            name: 'x_gzi_ppm_custom_view'
                            element: 'view_type'
                            value: 'dashboard'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '739a0b7275714502a578c076fb00cf36'
                        key: {
                            name: 'x_gzi_ppm_custom_field_value'
                            element: 'value_number'
                        }
                    },
                    {
                        table: 'sn_glider_source_artifact_m2m'
                        id: '754516dcdfcf433bacc32e375807a928'
                        deleted: false
                        key: {
                            application_file: 'a7b33fbdadbf43ceb5d8a31bfaf223d9'
                            source_artifact: '4e8e46929bde432790cfcb7104335322'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '77025942cc16435794407e951bce8ad9'
                        key: {
                            name: 'x_gzi_ppm_task'
                            element: 'watch_list'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '77c795e258cf4c809e5d05d8d35f8db6'
                        key: {
                            name: 'x_gzi_ppm_workspace_team'
                        }
                    },
                    {
                        table: 'sys_index'
                        id: '77ca476744fe4ab0be63c011a9d26894'
                        deleted: true
                        key: {
                            logical_table_name: 'x_gzi_ppm_proj_res_alloc'
                            col_name_string: 'user_id'
                        }
                    },
                    {
                        table: 'sn_glider_source_artifact_m2m'
                        id: '77ce7370247e4bbda8de272a4d0c8a01'
                        key: {
                            application_file: '7d36591a7ccd44d880e4250ee571f519'
                            source_artifact: '4e8e46929bde432790cfcb7104335322'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '7876a790e5fb404a91a4bd907d6fdf00'
                        key: {
                            name: 'x_gzi_ppm_custom_field_value'
                            element: 'field_def_id'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '78c283afa8294fca95ad737eb662e7bf'
                        key: {
                            name: 'x_gzi_ppm_project_task'
                            element: 'order_index'
                        }
                    },
                    {
                        table: 'sys_ux_lib_asset'
                        id: '79097cd046d044289929063ab4ff6a46'
                        deleted: true
                        key: {
                            name: 'x_gzi_ppm/CapacityPlanPage.js.map'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '7934f31e14cb415f8cb5bf4665d4de06'
                        key: {
                            name: 'x_gzi_ppm_goal'
                            element: 'status'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '7988743e53e84142bd2ed4300e9348eb'
                        key: {
                            name: 'x_gzi_ppm_status_update'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '79a288e1ef0640db9d9657e23f682de4'
                        key: {
                            name: 'x_gzi_ppm_task'
                            element: 'approval_state'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '7a05c81c8f2442e88a2976ccd5c8dc64'
                        key: {
                            name: 'x_gzi_ppm_task'
                            element: 'comments'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '7a25bd2bd8854ee3b443829183646574'
                        key: {
                            name: 'x_gzi_ppm_user_res_profile'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '7aba6a80993a4de48bae8a800c7ca06a'
                        key: {
                            name: 'x_gzi_ppm_project'
                            element: 'status'
                            value: 'off_track'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '7aff6bc38da0465b81dd951ffd7b2d1d'
                        key: {
                            name: 'x_gzi_ppm_project_member'
                            element: 'project_id'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_index'
                        id: '7b730b8707eb485385fa439ff3133c39'
                        deleted: true
                        key: {
                            logical_table_name: 'x_gzi_ppm_project'
                            col_name_string: 'owner_id'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '7b8508a505bd473f9110ba33cc7e4410'
                        key: {
                            name: 'x_gzi_ppm_custom_view_column'
                            element: 'is_visible'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_page'
                        id: '7c96e2863ecc4cc6be05275b0d635fb1'
                        key: {
                            endpoint: 'x_gzi_ppm_workspace.do'
                        }
                    },
                    {
                        table: 'sys_ux_lib_asset'
                        id: '7c98e1b761ed4ff7af34bd72ff4e95af'
                        deleted: true
                        key: {
                            name: 'x_gzi_ppm/ProjectsPage'
                        }
                    },
                    {
                        table: 'sys_ux_lib_asset'
                        id: '7d36591a7ccd44d880e4250ee571f519'
                        key: {
                            name: 'x_gzi_ppm/main'
                        }
                    },
                    {
                        table: 'sn_glider_source_artifact_m2m'
                        id: '7d6de009068d467d91c292eea8becfaf'
                        deleted: true
                        key: {
                            application_file: '2edb688f05014e9cb89b2f88a8a055d5'
                            source_artifact: '9b67b1e8d6db45a3a33b8247c9f568c4'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '7ec973da18ec4059a8f27291203ea47e'
                        key: {
                            name: 'x_gzi_ppm_workspace_team'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ux_lib_asset'
                        id: '800b0b1141844d05a909944bb065c4bf'
                        deleted: true
                        key: {
                            name: 'x_gzi_ppm/ProjectPage.js.map'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '801a50498724468b9a7e60779d1fab2e'
                        key: {
                            name: 'x_gzi_ppm_task'
                            element: 'task_type'
                            value: 'milestone'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '8059d979766543b8b1e2cb9bac6e359b'
                        key: {
                            name: 'x_gzi_ppm_task_dependency'
                        }
                    },
                    {
                        table: 'sn_glider_source_artifact_m2m'
                        id: '80bd782c13a24ec88f8e7372fe80d9e5'
                        deleted: true
                        key: {
                            application_file: 'b98483645745433fa11ca8f944c92b8e'
                            source_artifact: '4e8e46929bde432790cfcb7104335322'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '81bea36d13dd4d0596be71441e744f74'
                        key: {
                            name: 'x_gzi_ppm_portfolio_project'
                            element: 'portfolio_id'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '8218c81cc8ca43c1ab60e72bbdf9d21e'
                        key: {
                            name: 'x_gzi_ppm_project'
                            element: 'project_key'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '8419430c142c45919051c191eb7f9990'
                        key: {
                            name: 'x_gzi_ppm_status_update'
                            element: 'entity_type'
                            value: 'portfolio'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '842a5df7830648d19fc742a49a2f74f1'
                        key: {
                            name: 'x_gzi_ppm_task'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '846dc52535cc49b7bb3701c7d230fbb7'
                        key: {
                            name: 'x_gzi_ppm_custom_view'
                            element: 'sort_config'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '849b96dac23b4b4ea9954f31e7952920'
                        key: {
                            name: 'x_gzi_ppm_portfolio'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '855df80f8cad4b2d9874afe66f65ca0d'
                        key: {
                            name: 'x_gzi_ppm_status_update'
                            element: 'entity_type'
                            value: 'project'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '8594057db13042b6bde59176298eb374'
                        key: {
                            name: 'x_gzi_ppm_portfolio_member'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '85d45679d48d4f57b0390942dd276bda'
                        key: {
                            name: 'x_gzi_ppm_proj_res_alloc'
                            element: 'project_id'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '87138e3133ba07509937d1382e5c7b6a'
                        key: {
                            sys_ui_section: {
                                id: '0b138e3133ba07509937d1382e5c7b12'
                                key: {
                                    name: 'x_gzi_ppm_custom_view'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'portfolio_id'
                            position: '6'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '873f1edd9b0b4dd1b728d1f01156c9a7'
                        key: {
                            name: 'x_gzi_ppm_custom_field_value'
                            element: 'value_number'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '881798a2fca54d358018b409a8e58872'
                        key: {
                            name: 'x_gzi_ppm_workspace'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_index'
                        id: '892f3f3940f440ae84a7a6cba7e646d1'
                        deleted: true
                        key: {
                            logical_table_name: 'x_gzi_ppm_proj_res_alloc'
                            col_name_string: 'role_id'
                        }
                    },
                    {
                        table: 'sys_ux_lib_asset'
                        id: '89af06fd44374176be8334ad05443624'
                        deleted: true
                        key: {
                            name: 'x_gzi_ppm/MyTasksPage.js.map'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '8a4ab735e9984c2d971e080364b1dc02'
                        key: {
                            name: 'x_gzi_ppm_custom_view'
                            element: 'view_type'
                            value: 'settings'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '8b2386927b8a40f48c4fdb7cfda8884e'
                        key: {
                            name: 'x_gzi_ppm_custom_field_value'
                        }
                    },
                    {
                        table: 'sys_index'
                        id: '8b23d5ac42084027bec594284ef1d425'
                        key: {
                            logical_table_name: 'x_gzi_ppm_portfolio_member'
                            col_name_string: 'portfolio_id,user_id'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '8b8c42943ff048858542624affc9b7e3'
                        key: {
                            name: 'x_gzi_ppm_custom_field_def'
                            element: 'is_global_library'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_index'
                        id: '8b9a8d6bb4794045b5eb9daf43630a47'
                        key: {
                            logical_table_name: 'x_gzi_ppm_workspace_team'
                            col_name_string: 'workspace_id,group_id'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '8c14266d4fd1406591277512cbb61d3d'
                        key: {
                            name: 'x_gzi_ppm_project_task'
                            element: 'section_id'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '8cb59056d63249189005f801a821ec73'
                        key: {
                            name: 'x_gzi_ppm_custom_view'
                            element: 'view_type'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '8d505e194b174661ada4214089515df6'
                        key: {
                            name: 'x_gzi_ppm_project'
                            element: 'owner_id'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '8d82fc41b07049c1a6875adbef93fcd6'
                        key: {
                            name: 'x_gzi_ppm_status_update'
                            element: 'status'
                            value: 'on_hold'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ux_lib_asset'
                        id: '8d8c8055cdcf4a28ad3a0a370c83f14f'
                        deleted: true
                        key: {
                            name: 'x_gzi_ppm/ProjectForm'
                        }
                    },
                    {
                        table: 'sys_ux_lib_asset'
                        id: '8de2b203dfe243bfb219b6fef55450a9'
                        deleted: true
                        key: {
                            name: 'x_gzi_ppm/MyTasksPage'
                        }
                    },
                    {
                        table: 'sys_ux_lib_asset'
                        id: '8e37a9bd42014206aa628c95d92a2eab'
                        deleted: true
                        key: {
                            name: 'x_gzi_ppm/PortfolioPage.js.map'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '8e3ac8d95ef14920a9b53944b7616373'
                        key: {
                            name: 'x_gzi_ppm_user_capacity'
                            element: 'user_profile_id'
                        }
                    },
                    {
                        table: 'sys_index'
                        id: '8ec76b56d58a4cdd9255fb1c7b566b89'
                        deleted: true
                        key: {
                            logical_table_name: 'x_gzi_ppm_project_member'
                            col_name_string: 'user_id'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '8f138e3133ba07509937d1382e5c7b67'
                        key: {
                            sys_ui_section: {
                                id: '0b138e3133ba07509937d1382e5c7b12'
                                key: {
                                    name: 'x_gzi_ppm_custom_view'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'group_by'
                            position: '3'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '8fa33cbb8f06475ba0e462dbacb9ec9a'
                        key: {
                            name: 'x_gzi_ppm_goal'
                            element: 'status'
                            value: 'on_track'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '90ac76b53e1d49f3b84dc33ef94e3913'
                        key: {
                            name: 'x_gzi_ppm_cust_field_setting'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '90d7ab294679469999155da5be4db359'
                        key: {
                            name: 'x_gzi_ppm_custom_view'
                            element: 'view_type'
                            value: 'board'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '90e386f133ba07509937d1382e5c7bcb'
                        key: {
                            sys_ui_section: {
                                id: '5ce38eb133ba07509937d1382e5c7be5'
                                key: {
                                    name: 'x_gzi_ppm_task_dependency'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: '.split'
                            position: '3'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '910f70a91bc84b1888a525bb4bc9302a'
                        key: {
                            name: 'x_gzi_ppm_project'
                            element: 'due_date'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '91a98efa962349cc9cb64dce1ac800c6'
                        key: {
                            name: 'x_gzi_ppm_project'
                            element: 'percent_complete'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ux_lib_asset'
                        id: '91fbd4ee975f4139bc2965ccaa98bf55'
                        deleted: true
                        key: {
                            name: 'x_gzi_ppm/PortfolioPage'
                        }
                    },
                    {
                        table: 'sys_index'
                        id: '920f96db893e4cdcae64b1da7ebe25cc'
                        deleted: true
                        key: {
                            logical_table_name: 'x_gzi_ppm_custom_view'
                            col_name_string: 'user_id'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '92133c603ca9411783f53db8489e65a6'
                        key: {
                            name: 'x_gzi_ppm_custom_field_def'
                            element: 'type'
                            value: 'number'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '922713d6a2d6402692b0a70e191fd041'
                        key: {
                            name: 'x_gzi_ppm_capacity_plan'
                            element: 'name'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '92d7c2e61d914b3ab1aa093f5b1c5f24'
                        key: {
                            name: 'x_gzi_ppm_proj_res_alloc'
                            element: 'end_date'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '92fbbacf3ffa45f989d3c1035b9522c4'
                        key: {
                            name: 'x_gzi_ppm_goal'
                            element: 'owner_id'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '93077a6db2464624889d16d261a34525'
                        key: {
                            name: 'x_gzi_ppm_task'
                            element: 'parent_task_id'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_index'
                        id: '9400b6b1635c4a9ea1eaac6c4b0d0e33'
                        deleted: true
                        key: {
                            logical_table_name: 'x_gzi_ppm_capacity_plan'
                            col_name_string: 'workspace_id'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '948a3a7daa6d47e48b8ac92884fbe960'
                        key: {
                            name: 'x_gzi_ppm_project_member'
                            element: 'role'
                            value: 'commenter'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '94bbee697ff84769a1293e502978063d'
                        key: {
                            name: 'x_gzi_ppm_portfolio'
                            element: 'workspace_id'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '94e386f133ba07509937d1382e5c7bcc'
                        key: {
                            sys_ui_section: {
                                id: '5ce38eb133ba07509937d1382e5c7be5'
                                key: {
                                    name: 'x_gzi_ppm_task_dependency'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: '.end_split'
                            position: '5'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '9655eb24fc79442a81c51420bd50d445'
                        key: {
                            name: 'x_gzi_ppm_task'
                        }
                    },
                    {
                        table: 'sn_glider_source_artifact_m2m'
                        id: '96577bb41f3c4752acc496d3c8d700fb'
                        deleted: true
                        key: {
                            application_file: 'cd7704c4b4154feab853217f8ce9e354'
                            source_artifact: '4e8e46929bde432790cfcb7104335322'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '96d55345eca74c71ae7b69e3722584db'
                        key: {
                            name: 'x_gzi_ppm_proj_res_alloc'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '9700a5a2ed8a46ca9d5816d1d9d42d96'
                        key: {
                            name: 'x_gzi_ppm_task'
                            element: 'approval_state'
                            value: 'approve'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '979a36455eee440988e379207dfc6392'
                        key: {
                            name: 'x_gzi_ppm_portfolio'
                            element: 'workspace_id'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '97fae925a0a34ef89436599c5944b6b7'
                        key: {
                            name: 'x_gzi_ppm_custom_view'
                            element: 'user_id'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '98032525595a4c228bdbc79715ac80e0'
                        key: {
                            name: 'x_gzi_ppm_task'
                            element: 'approval_state'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '98e6b303356a4d1bb1fd6aa2b2ff94ad'
                        key: {
                            name: 'x_gzi_ppm_portfolio_member'
                            element: 'role'
                        }
                    },
                    {
                        table: 'sys_index'
                        id: '997ad07780b344a3bcd708d50511033d'
                        deleted: true
                        key: {
                            logical_table_name: 'x_gzi_ppm_task'
                            col_name_string: 'parent_task_id'
                        }
                    },
                    {
                        table: 'sys_index'
                        id: '9a673b0788f7409e82895f74a53543d4'
                        deleted: true
                        key: {
                            logical_table_name: 'x_gzi_ppm_status_update'
                            col_name_string: 'author_id'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '9aa8c385a3f342d0b1d6c9846118f391'
                        key: {
                            name: 'x_gzi_ppm_project_task'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '9b138e3133ba07509937d1382e5c7b6d'
                        key: {
                            sys_ui_section: {
                                id: '0b138e3133ba07509937d1382e5c7b12'
                                key: {
                                    name: 'x_gzi_ppm_custom_view'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'sort_config'
                            position: '10'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '9b13948f3a4342e38c4d5f18aec93da4'
                        key: {
                            name: 'x_gzi_ppm_capacity_plan'
                            element: 'owner_id'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '9b7d9ff5c7d04ca794ddf895cfbdef9e'
                        key: {
                            name: 'x_gzi_ppm_portfolio'
                            element: 'due_date'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '9c085fd69a374417ab73ea07d54efae3'
                        key: {
                            name: 'x_gzi_ppm_project_task'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '9c172e2aadcc494d8fdcacb7b6478c23'
                        key: {
                            name: 'x_gzi_ppm_custom_view'
                            element: 'is_default'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '9c67f01dddeb49ca805998b39ef02ec8'
                        key: {
                            name: 'x_gzi_ppm_workspace_user'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '9ca403c020854761a780b33e63ed1438'
                        key: {
                            name: 'x_gzi_ppm_workspace'
                            element: 'name'
                        }
                    },
                    {
                        table: 'sn_glider_source_artifact_m2m'
                        id: '9ca5e07068c142cb973ef1abf927389d'
                        deleted: true
                        key: {
                            application_file: '52628ec6e2774c5ba594621c77ebaef6'
                            source_artifact: '4e8e46929bde432790cfcb7104335322'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '9caa6827e4d84643a394f1ceb1dbaae4'
                        key: {
                            name: 'x_gzi_ppm_custom_view'
                            element: 'group_by'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '9cae403ca62d41e28869a7e29dc9ef1a'
                        key: {
                            name: 'x_gzi_ppm_cust_field_setting'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '9ce386f133ba07509937d1382e5c7bc9'
                        key: {
                            sys_ui_section: {
                                id: '5ce38eb133ba07509937d1382e5c7be5'
                                key: {
                                    name: 'x_gzi_ppm_task_dependency'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'predecessor_task_id'
                            position: '1'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '9da0fedc449949a68120dda2f9090fd6'
                        key: {
                            name: 'x_gzi_ppm_resource_role'
                        }
                    },
                    {
                        table: 'sys_index'
                        id: '9e93f76a89df4b3c8d901e2d2cb2f3bd'
                        deleted: true
                        key: {
                            logical_table_name: 'x_gzi_ppm_user_capacity'
                            col_name_string: 'user_profile_id'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '9f3ec95d1d2340979809e579ba8f8af3'
                        key: {
                            name: 'x_gzi_ppm_capacity_plan'
                            element: 'portfolio_id'
                            language: 'en'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '9f880beb874647d683297beb4356e4ba'
                        key: {
                            name: 'x_gzi_ppm_project_member'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: 'a1b4070851a8416c8e9ff788694e5a6d'
                        key: {
                            name: 'x_gzi_ppm_project_member'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'a204c913a4c64a9e811d9504fc6e9984'
                        key: {
                            name: 'x_gzi_ppm_task'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'a323067133ba07509937d1382e5c7b32'
                        key: {
                            sys_ui_section: {
                                id: 'ab23cef1333a07509937d1382e5c7bdd'
                                key: {
                                    name: 'x_gzi_ppm_capacity_plan'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'owner_id'
                            position: '4'
                        }
                    },
                    {
                        table: 'sys_ux_lib_asset'
                        id: 'a4f02ba8f0794d7091bbae5ed4e066b6'
                        deleted: true
                        key: {
                            name: 'x_gzi_ppm/ProjectPage'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'a50da091d6c54667bac0e762659a6b40'
                        key: {
                            name: 'x_gzi_ppm_capacity_plan'
                            element: 'filter_config'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'a56e60c9869e497fb67bcbbdf5e68411'
                        key: {
                            name: 'x_gzi_ppm_goal'
                            element: 'workspace_id'
                        }
                    },
                    {
                        table: 'sys_index'
                        id: 'a5b3e1655a474b08b78602d52f9deece'
                        deleted: true
                        key: {
                            logical_table_name: 'x_gzi_ppm_custom_field_value'
                            col_name_string: 'task_id'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'a6dd2b4f623d44f9adac274dfc557be0'
                        key: {
                            name: 'x_gzi_ppm_proj_res_alloc'
                            element: 'allocation_percentage'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'a6ff4ad3b9b7493fa40a9bf5b2015d05'
                        key: {
                            name: 'x_gzi_ppm_portfolio'
                            element: 'color'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'a723067133ba07509937d1382e5c7b33'
                        key: {
                            sys_ui_section: {
                                id: 'ab23cef1333a07509937d1382e5c7bdd'
                                key: {
                                    name: 'x_gzi_ppm_capacity_plan'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: '.split'
                            position: '6'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'a748089ee8ad414392298fb5f82d9621'
                        key: {
                            name: 'x_gzi_ppm_custom_field_value'
                            element: 'task_id'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'a770f20da92049d5b1f44368cd8b5bd1'
                        key: {
                            name: 'x_gzi_ppm_custom_view_column'
                            element: 'order_index'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_index'
                        id: 'a787896d650c4670b55412589892cf5c'
                        deleted: true
                        key: {
                            logical_table_name: 'x_gzi_ppm_section'
                            col_name_string: 'project_id'
                        }
                    },
                    {
                        table: 'sys_ux_lib_asset'
                        id: 'a7b33fbdadbf43ceb5d8a31bfaf223d9'
                        deleted: false
                        key: {
                            name: 'x_gzi_ppm/vendor-react-dom--d9c8d218'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'a7c03fd0abcd419e9dd9878d5edd6265'
                        key: {
                            name: 'x_gzi_ppm_portfolio_member'
                            element: 'user_id'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'a7ce06380301410cb4aae0b3c310d065'
                        key: {
                            name: 'x_gzi_ppm_status_update'
                            element: 'status'
                        }
                    },
                    {
                        table: 'sys_index'
                        id: 'a8d970b9d82144baba37f00e36ca3d7a'
                        deleted: true
                        key: {
                            logical_table_name: 'x_gzi_ppm_portfolio'
                            col_name_string: 'owner_id'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'aa5b2c6fa62849e69baf875a3f1adb09'
                        key: {
                            name: 'x_gzi_ppm_capacity_plan'
                            element: 'group_id'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'aaf68c4c22cf41dca13f30a324fdcac5'
                        key: {
                            name: 'x_gzi_ppm_project_member'
                            element: 'project_id'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: 'ab05c851de8e4353bfcd06bf9ae5184b'
                        key: {
                            name: 'x_gzi_ppm_status_update'
                            element: 'status'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'ab23067133ba07509937d1382e5c7b34'
                        key: {
                            sys_ui_section: {
                                id: 'ab23cef1333a07509937d1382e5c7bdd'
                                key: {
                                    name: 'x_gzi_ppm_capacity_plan'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'portfolio_id'
                            position: '8'
                        }
                    },
                    {
                        table: 'sys_ui_section'
                        id: 'ab23cef1333a07509937d1382e5c7bdd'
                        key: {
                            name: 'x_gzi_ppm_capacity_plan'
                            caption: 'NULL'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'ab334c2cf3b34ca4b0d12211f791c198'
                        key: {
                            name: 'x_gzi_ppm_goal'
                            element: 'status'
                            value: 'at_risk'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'ab58b9aab9c747da93c4723e89319973'
                        key: {
                            name: 'x_gzi_ppm_project_member'
                            element: 'role'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'ab915155f5c34e2c93fb3b7e49f11da2'
                        key: {
                            name: 'x_gzi_ppm_portfolio'
                            element: 'name'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'abaa7ec0ba714322b62485f699b5c7bb'
                        key: {
                            name: 'x_gzi_ppm_section'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'ac089a7b0fdc4e84b8848b43ca44b60b'
                        key: {
                            name: 'x_gzi_ppm_portfolio_project'
                            element: 'added_at'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'acb424e6dce14fb6b0711c40af54e81e'
                        key: {
                            name: 'x_gzi_ppm_capacity_plan'
                            element: 'time_granularity'
                            value: 'year'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'ad3237d93a65460f81da6e36a3af8d6e'
                        key: {
                            name: 'x_gzi_ppm_project'
                            element: 'status'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'af23067133ba07509937d1382e5c7b30'
                        key: {
                            sys_ui_section: {
                                id: 'ab23cef1333a07509937d1382e5c7bdd'
                                key: {
                                    name: 'x_gzi_ppm_capacity_plan'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'filter_config'
                            position: '2'
                        }
                    },
                    {
                        table: 'sys_ux_lib_asset'
                        id: 'af3e67d9a5e546479e029e213afebbf5'
                        deleted: true
                        key: {
                            name: 'x_gzi_ppm/FieldLibraryPage'
                        }
                    },
                    {
                        table: 'sys_ux_lib_asset'
                        id: 'afe8f4fd68a4459cbfb35e54cbbda1d4'
                        deleted: true
                        key: {
                            name: 'x_gzi_ppm/BreadcrumbBar'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'b021f14e652e432fbb4a2e145475aaa2'
                        key: {
                            name: 'x_gzi_ppm_project_member'
                            element: 'role'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'b06eece7fe674de19b9d051d06178d53'
                        key: {
                            name: 'x_gzi_ppm_project_member'
                            element: 'role'
                            value: 'owner'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ux_lib_asset'
                        id: 'b0f82bd7298e4baaaeb4efeb17846c25'
                        deleted: true
                        key: {
                            name: 'x_gzi_ppm/FieldLibraryPage.js.map'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'b128e0552c904c65961b64a0cbe7ba27'
                        key: {
                            name: 'x_gzi_ppm_project_member'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'b1566890c05e4a0cbaa333bcbffc79ac'
                        key: {
                            name: 'x_gzi_ppm_portfolio_project'
                            element: 'added_by'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'b1b3ceb133ba07509937d1382e5c7b05'
                        key: {
                            sys_ui_section: {
                                id: '39b3ceb133ba07509937d1382e5c7b00'
                                key: {
                                    name: 'x_gzi_ppm_workspace'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'name'
                            position: '0'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: 'b2d48103f6994a0382aebcf4cb1d65e4'
                        key: {
                            name: 'x_gzi_ppm_goal'
                            element: 'status'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'b36a05cafa614ccba1fb82a904e3bea3'
                        key: {
                            name: 'x_gzi_ppm_project'
                            element: 'project_key'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'b3968d61ae6142c0a67c7f7b88d1317b'
                        key: {
                            name: 'x_gzi_ppm_project_member'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_index'
                        id: 'b3a934c0e8354ab187a5583525e64a32'
                        deleted: true
                        key: {
                            logical_table_name: 'x_gzi_ppm_project'
                            col_name_string: 'workspace_id'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'b3f3399a268d4d35bd6d0ce2d1f18269'
                        key: {
                            name: 'x_gzi_ppm_project'
                            element: 'status'
                        }
                    },
                    {
                        table: 'sys_index'
                        id: 'b3f3c6253e364ecfb7817b5d5389a8bd'
                        deleted: true
                        key: {
                            logical_table_name: 'x_gzi_ppm_custom_view'
                            col_name_string: 'portfolio_id'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'b40790532a48469abef616be5039ecb7'
                        key: {
                            name: 'x_gzi_ppm_project'
                            element: 'status'
                            value: 'complete'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'b4d73fd422b24569a0ccb26be54a31ac'
                        key: {
                            name: 'x_gzi_ppm_custom_view'
                            element: 'view_type'
                            value: 'brief'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'b5f7f1f6f32243adb211daabd1bebfba'
                        key: {
                            name: 'x_gzi_ppm_section'
                            element: 'order_index'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'b625e44a517146748ce903812423cd03'
                        key: {
                            name: 'x_gzi_ppm_portfolio'
                            element: 'due_date'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: 'b6d6b70030ac45f6aa7ea86bfc5924aa'
                        key: {
                            name: 'x_gzi_ppm_custom_field_def'
                            element: 'type'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: 'b705d50b27624fee9040b958ec946991'
                        key: {
                            name: 'x_gzi_ppm_portfolio_member'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'b7327a8c5c304e0585ccaabde8b7e473'
                        key: {
                            name: 'x_gzi_ppm_proj_res_alloc'
                            element: 'end_date'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'b8026788541d4c808ce4d003bf4b7498'
                        key: {
                            name: 'x_gzi_ppm_custom_field_value'
                            element: 'project_id'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'b87b76936af243409286a20aebe850f6'
                        key: {
                            name: 'x_gzi_ppm_custom_view_column'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_index'
                        id: 'b8d2a6e5082046d5b1a641a51affe2f8'
                        deleted: true
                        key: {
                            logical_table_name: 'x_gzi_ppm_custom_view'
                            col_name_string: 'project_id'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'b8f1ae2c071d4564ac754ad4fc0087b5'
                        key: {
                            name: 'x_gzi_ppm_task'
                            element: 'comments'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ux_lib_asset'
                        id: 'b98483645745433fa11ca8f944c92b8e'
                        deleted: true
                        key: {
                            name: 'x_gzi_ppm/vendor-react-router--9560cb75'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'bb5b1d0a28104dada940258fa15167cf'
                        key: {
                            name: 'x_gzi_ppm_status_update'
                            element: 'entity_id'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'bbe04a204140445c928bd05b38ea1b26'
                        key: {
                            name: 'x_gzi_ppm_task'
                            element: 'start_date'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'bbe6850842454d4fb523af7428c75f90'
                        key: {
                            name: 'x_gzi_ppm_custom_view'
                            element: 'filter_query'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'bc061886dbe64994ad9de22b185c9d6f'
                        key: {
                            name: 'x_gzi_ppm_custom_field_def'
                            element: 'type'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: 'bc815fba07034e56b48a373ee10055a8'
                        key: {
                            name: 'x_gzi_ppm_project'
                            element: 'status'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'bcb5209eb9004728ae753073b896aab4'
                        key: {
                            name: 'x_gzi_ppm_project_task'
                            element: 'task_id'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'be6180b2f65c4afc883ddc113da8d67d'
                        key: {
                            name: 'x_gzi_ppm_custom_field_value'
                            element: 'portfolio_id'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'beb26034bd51462fb46c15cbd80a8d82'
                        key: {
                            name: 'x_gzi_ppm_task_dependency'
                            element: 'predecessor_task_id'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'bf10bdbf1a5f4646ae319c72f5c46e04'
                        key: {
                            name: 'x_gzi_ppm_workspace_team'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'bf73134a8ae94ef9bad763ce7a49b759'
                        deleted: true
                        key: {
                            name: 'x_gzi_ppm_project'
                            element: 'status'
                            value: 'planning'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'c0d87f883e56421889a989f0247fb65e'
                        key: {
                            name: 'x_gzi_ppm_proj_res_alloc'
                            element: 'user_id'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'c1dc3b2305114dcdacd019847f02afa7'
                        key: {
                            name: 'x_gzi_ppm_task'
                            element: 'work_notes'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'c1ed26d73c6a46ea847ffc69eb05956c'
                        key: {
                            name: 'x_gzi_ppm_user_capacity'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sn_glider_source_artifact_m2m'
                        id: 'c24df5cce95d42c4a1bb2364f5730b7d'
                        key: {
                            application_file: 'cf781f6abe8b400b9f173086e544e1f3'
                            source_artifact: '4e8e46929bde432790cfcb7104335322'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'c27d9c102baa44108926470a7bc86d0e'
                        key: {
                            name: 'x_gzi_ppm_task'
                            element: 'priority'
                            language: 'en'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: 'c2b48786a5b549e7af2db008511522fd'
                        key: {
                            name: 'x_gzi_ppm_workspace_team'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'c2eea0d062864f09af441c2314291a97'
                        key: {
                            name: 'x_gzi_ppm_task'
                            element: 'priority'
                            value: 'medium'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: 'c306981d5c44402380bdbc462b51870c'
                        key: {
                            name: 'x_gzi_ppm_portfolio_project'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'c33f23164b854100aed54ece68d42bfc'
                        key: {
                            name: 'x_gzi_ppm_task_dependency'
                            element: 'successor_task_id'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'c34151ca70684b32a616d387f9976f29'
                        key: {
                            name: 'x_gzi_ppm_goal'
                            element: 'status'
                            value: 'complete'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ux_lib_asset'
                        id: 'c409d99c45f346459dc538b16e94f847'
                        deleted: true
                        key: {
                            name: 'x_gzi_ppm/VirtualizedGantt'
                        }
                    },
                    {
                        table: 'sys_index'
                        id: 'c40f04a9a00c4534b06b6ef466519935'
                        deleted: true
                        key: {
                            logical_table_name: 'x_gzi_ppm_custom_field_value'
                            col_name_string: 'field_def_id'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'c449bd7a09d2417fa99782d6391c117b'
                        key: {
                            name: 'x_gzi_ppm_user_res_profile'
                            element: 'user_id'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'c4a984f17835441699eab6055cc32e12'
                        key: {
                            name: 'x_gzi_ppm_status_update'
                            element: 'status'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_index'
                        id: 'c4f379bdd19e42f69abc948a6acc4efc'
                        deleted: true
                        key: {
                            logical_table_name: 'x_gzi_ppm_cust_field_setting'
                            col_name_string: 'portfolio_id'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'c53b4c64a7f34b9385a879fbce206752'
                        key: {
                            name: 'x_gzi_ppm_task'
                            element: 'status'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'c680fe520dba486d9cfefc11d0859f07'
                        key: {
                            name: 'x_gzi_ppm_task_dependency'
                            element: 'dependency_type'
                            value: 'start_to_start'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'c7138e3133ba07509937d1382e5c7b1a'
                        key: {
                            sys_ui_section: {
                                id: '0b138e3133ba07509937d1382e5c7b12'
                                key: {
                                    name: 'x_gzi_ppm_custom_view'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'is_default'
                            position: '0'
                        }
                    },
                    {
                        table: 'sys_index'
                        id: 'c7d2990a354342739be76733fb1ede5b'
                        deleted: true
                        key: {
                            logical_table_name: 'x_gzi_ppm_portfolio_project'
                            col_name_string: 'added_by'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'c8238fb6acde495697d7be0a377fc29a'
                        key: {
                            name: 'x_gzi_ppm_goal'
                            element: 'workspace_id'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'c8cb04e1ea8b46cdad991543adbbff86'
                        key: {
                            name: 'x_gzi_ppm_project'
                            element: 'assignment_group'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'ca909d08f5e54afab69eecb4e6139833'
                        deleted: true
                        key: {
                            name: 'x_gzi_ppm_project'
                            element: 'status'
                            value: 'backlog'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_index'
                        id: 'caf7b5fc35a44b37bf21304a5b624539'
                        deleted: true
                        key: {
                            logical_table_name: 'x_gzi_ppm_custom_field_value'
                            col_name_string: 'portfolio_id'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'cb138e3133ba07509937d1382e5c7b68'
                        key: {
                            sys_ui_section: {
                                id: '0b138e3133ba07509937d1382e5c7b12'
                                key: {
                                    name: 'x_gzi_ppm_custom_view'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: '.begin_split'
                            position: '4'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'cbe39180bf954633a63014cef6a11ab6'
                        key: {
                            name: 'x_gzi_ppm_custom_view_column'
                            element: 'view_id'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'cc049971a5ce476fa1765ca92e7ea02a'
                        key: {
                            name: 'x_gzi_ppm_user_res_profile'
                            element: 'user_id'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'cc440c88fd6f473ca295ffb0f21a2ed0'
                        key: {
                            name: 'x_gzi_ppm_workspace_user'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'ccbe73454fe84cfeb79314aa6e98bc3c'
                        key: {
                            name: 'x_gzi_ppm_workspace'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'ccbfb2c155664e31ab6288ae8ef3f835'
                        key: {
                            name: 'x_gzi_ppm_portfolio_member'
                            element: 'portfolio_id'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'cd340fb3551f4a0494fa6575f9082a4e'
                        key: {
                            name: 'x_gzi_ppm_custom_view'
                            element: 'filter_query'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'cd68227165ee4e78b8cb26adcd96e40f'
                        key: {
                            name: 'x_gzi_ppm_portfolio_project'
                            element: 'project_id'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ux_lib_asset'
                        id: 'cd7704c4b4154feab853217f8ce9e354'
                        deleted: true
                        key: {
                            name: 'x_gzi_ppm/vendor-react-router--bd0ba048'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'cd7a39cc27fa4f52ac85bc2aa752dbec'
                        key: {
                            name: 'x_gzi_ppm_task_dependency'
                            element: 'dependency_type'
                            value: 'start_to_finish'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'cd9c6469024341af867f6d1e805f0440'
                        key: {
                            name: 'x_gzi_ppm_capacity_plan'
                            element: 'time_granularity'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'cdd7e50ee24c437ab00db9ae9eb8f09f'
                        key: {
                            name: 'x_gzi_ppm_capacity_plan'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'ce17a8716f624b369f7ee17031199bfb'
                        key: {
                            name: 'x_gzi_ppm_section'
                            element: 'name'
                        }
                    },
                    {
                        table: 'sys_ux_lib_asset'
                        id: 'cf781f6abe8b400b9f173086e544e1f3'
                        key: {
                            name: 'x_gzi_ppm/vendor-react-router--b9021bf5'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'cfb154e8f1ee484fb8f393b9e8f40c50'
                        key: {
                            name: 'x_gzi_ppm_resource_role'
                            element: 'name'
                        }
                    },
                    {
                        table: 'sys_index'
                        id: 'd02d673117754fd0a75bb5028cdb74a8'
                        key: {
                            logical_table_name: 'x_gzi_ppm_project_member'
                            col_name_string: 'project_id,user_id'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'd034f5b3e76343d88e4024f5f9df815e'
                        key: {
                            name: 'x_gzi_ppm_portfolio_project'
                            element: 'added_at'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'd07ad1fd955b4291ac7c4a420e3e059d'
                        key: {
                            name: 'x_gzi_ppm_custom_view'
                            element: 'user_id'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'd0b252258e1b4440ae3a6b17e9d1ac4e'
                        key: {
                            name: 'x_gzi_ppm_custom_field_value'
                            element: 'field_def_id'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'd108d95a3a86435fb34ad46ce6b5c438'
                        key: {
                            name: 'x_gzi_ppm_status_update'
                            element: 'status'
                            value: 'no_recent_updates'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_index'
                        id: 'd12e0e15ded3467ab451976365767969'
                        deleted: true
                        key: {
                            logical_table_name: 'x_gzi_ppm_cust_field_setting'
                            col_name_string: 'project_id'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'd1fb171fb39641d9a6993d2bd465f074'
                        key: {
                            name: 'x_gzi_ppm_status_update'
                            element: 'author_id'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ux_lib_asset'
                        id: 'd20dbb3984a841af80a74e38211e9fa6'
                        deleted: true
                        key: {
                            name: 'x_gzi_ppm/vendor-react-router--424f1484'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'd21b150c726d47569058cbcf73e2d97f'
                        key: {
                            name: 'x_gzi_ppm_task'
                            element: 'name'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'd2b6c89c466444d1aeb2f98021bcffd9'
                        key: {
                            name: 'x_gzi_ppm_custom_field_def'
                            element: 'type'
                            value: 'dropdown'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'd3138e3133ba07509937d1382e5c7b6b'
                        key: {
                            sys_ui_section: {
                                id: '0b138e3133ba07509937d1382e5c7b12'
                                key: {
                                    name: 'x_gzi_ppm_custom_view'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: '.split'
                            position: '7'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: 'd3228b473d364669babc11a5be3e2c64'
                        key: {
                            name: 'x_gzi_ppm_project_task'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'd36c24c3c71546c4a7d524e38d0c3990'
                        key: {
                            name: 'x_gzi_ppm_portfolio_member'
                            element: 'role'
                            value: 'owner'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: 'd67048ce571c47deac36af9afcfefe47'
                        key: {
                            name: 'x_gzi_ppm_workspace'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'd7138e3133ba07509937d1382e5c7b6e'
                        key: {
                            sys_ui_section: {
                                id: '0b138e3133ba07509937d1382e5c7b12'
                                key: {
                                    name: 'x_gzi_ppm_custom_view'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'view_type'
                            position: '11'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'd7c27f0df58d44fca38ab2b5a97b9b0a'
                        key: {
                            name: 'x_gzi_ppm_cust_field_setting'
                            element: 'portfolio_id'
                            language: 'en'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: 'd7d85b1d8ec34cf7920fcc7aeb8d849b'
                        key: {
                            name: 'x_gzi_ppm_capacity_plan'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'd7ddd1633c484019a576f065747726a3'
                        key: {
                            name: 'x_gzi_ppm_capacity_plan'
                            element: 'portfolio_id'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'd89bb00676ea46c2a6e2cb969984875d'
                        key: {
                            name: 'x_gzi_ppm_task'
                            element: 'name'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_index'
                        id: 'd8b7d74d025f4b57a7213f31d5b74066'
                        deleted: true
                        key: {
                            logical_table_name: 'x_gzi_ppm_cust_field_setting'
                            col_name_string: 'field_def_id'
                        }
                    },
                    {
                        table: 'sn_glider_source_artifact_m2m'
                        id: 'dadc536c13fb4aab817bce1b93ec2fe1'
                        deleted: true
                        key: {
                            application_file: '23d91cff3213414ba6551313e8eb3ea4'
                            source_artifact: '4e8e46929bde432790cfcb7104335322'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'db79360e4ee3408bb25b340a06b8544d'
                        key: {
                            name: 'x_gzi_ppm_project'
                            element: 'priority'
                            value: 'medium'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: 'db8b246be332436fa8da6b99591dc509'
                        key: {
                            name: 'x_gzi_ppm_user_capacity'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'dc2ec2b6a3e44ab5aef82a5f829bbcf6'
                        key: {
                            name: 'x_gzi_ppm_custom_field_def'
                            element: 'is_global_library'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'dcf499a8914048869e8f55377834c869'
                        key: {
                            name: 'x_gzi_ppm_custom_field_value'
                            element: 'value_date'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'de8d0bd7119c45c0a69a8b69941f7a9b'
                        key: {
                            name: 'x_gzi_ppm_task'
                            element: 'assignee_id'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'debc0ce171074c9ab7ae2326e86ffc60'
                        key: {
                            name: 'x_gzi_ppm_custom_view'
                            element: 'name'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'dee4a7ac4c754d8bb13b83286b72d111'
                        key: {
                            name: 'x_gzi_ppm_proj_res_alloc'
                            element: 'allocation_percentage'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'dfe72d1f224844b4849e78ea4598fe95'
                        key: {
                            name: 'x_gzi_ppm_portfolio_member'
                            element: 'role'
                            language: 'en'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: 'e00e5036282d4fbfa83eb1a663d24161'
                        key: {
                            name: 'x_gzi_ppm_goal'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'e03f4d6ab8634eadbba1623b7e8dd701'
                        key: {
                            name: 'x_gzi_ppm_user_res_profile'
                            element: 'role_id'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'e05585086217429999c3b3f1dfca76c6'
                        key: {
                            name: 'x_gzi_ppm_user_capacity'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_index'
                        id: 'e16721adfa7c45249ca53c0d81015442'
                        key: {
                            logical_table_name: 'x_gzi_ppm_workspace_user'
                            col_name_string: 'workspace_id,user_id'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'e1f0e8bbb9a64b7f99ece94ae38c3ed8'
                        key: {
                            name: 'x_gzi_ppm_project'
                            element: 'status'
                            value: 'on_hold'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'e2b75120f9044d39b125682c491da360'
                        key: {
                            name: 'x_gzi_ppm_capacity_plan'
                            element: 'name'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'e2b7dd85b26a40f1a0164781306207b5'
                        key: {
                            name: 'x_gzi_ppm_portfolio_project'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'e2edffe892714724a958db8824a607d1'
                        key: {
                            name: 'x_gzi_ppm_section'
                            element: 'name'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_index'
                        id: 'e2f0fae2f3f24ff0abc18b6428ad7eb5'
                        key: {
                            logical_table_name: 'x_gzi_ppm_user_res_profile'
                            col_name_string: 'user_id,role_id'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'e3cd79d4fce648d4baf48c4ccc069e78'
                        key: {
                            name: 'x_gzi_ppm_portfolio'
                            element: 'owner_id'
                            language: 'en'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: 'e3d58f80941e4cf08a8770a1e92e90a7'
                        key: {
                            name: 'x_gzi_ppm_task_dependency'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'e5052959cb9d47d19ab18dee9990962c'
                        key: {
                            name: 'x_gzi_ppm_status_update'
                            element: 'entity_id'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'e5d05412619e4e62b9bce1d2f8013cd3'
                        key: {
                            name: 'x_gzi_ppm_resource_role'
                            element: 'name'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'e62b635c77ff4a0583a3d9d79b7860ca'
                        deleted: true
                        key: {
                            name: 'x_gzi_ppm_project'
                            element: 'status'
                            value: 'in_flight'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'e66980f83b2f4994be8df9df72588a37'
                        key: {
                            name: 'x_gzi_ppm_custom_view'
                            element: 'view_type'
                            value: 'list'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'e6f24c4d9b23458e8f75e613ffe76ba2'
                        key: {
                            name: 'x_gzi_ppm_task'
                            element: 'priority'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'e764d7e62c0e4a4d84d1d41642b81ed8'
                        key: {
                            name: 'x_gzi_ppm_goal'
                            element: 'owner_id'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'e7e3136db6b845429687b1d1c39f197a'
                        key: {
                            name: 'x_gzi_ppm_task'
                            element: 'start_date'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'e7efd68182704cc0a4e41c1ae10a991b'
                        key: {
                            name: 'x_gzi_ppm_task'
                            element: 'workspace_id'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'e94af119901042fc9647dbfcfe7a89e3'
                        key: {
                            name: 'x_gzi_ppm_task_dependency'
                            element: 'dependency_type'
                            value: 'finish_to_finish'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: 'e9e79410f8a1452794ac5b2fdda81875'
                        key: {
                            name: 'x_gzi_ppm_custom_field_def'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'ea15533563b445ce8772fefbf42e22ab'
                        key: {
                            name: 'x_gzi_ppm_custom_view_column'
                            element: 'view_id'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'ea5fdc7964044b7c9af5cf57900cce0f'
                        key: {
                            name: 'x_gzi_ppm_task_dependency'
                            element: 'dependency_type'
                        }
                    },
                    {
                        table: 'sys_index'
                        id: 'eaec5691bef84fb18ab0cf0564fb8e56'
                        deleted: true
                        key: {
                            logical_table_name: 'x_gzi_ppm_user_res_profile'
                            col_name_string: 'role_id'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'eb5ebff359db4fce9996c56073c402ef'
                        key: {
                            name: 'x_gzi_ppm_status_update'
                            element: 'text'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'ebba485e932248c3998c4179fb10f5d2'
                        key: {
                            name: 'x_gzi_ppm_task'
                            element: 'priority'
                            value: 'low'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_index'
                        id: 'ecebcb475a914a7ba3b385fa9b619659'
                        deleted: true
                        key: {
                            logical_table_name: 'x_gzi_ppm_capacity_plan'
                            col_name_string: 'owner_id'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: 'ed36d96e50bc4c2e9ea46d4e06893b2f'
                        key: {
                            name: 'x_gzi_ppm_custom_field_value'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'ede7a74b44d04f08aecaf863103873a0'
                        key: {
                            name: 'x_gzi_ppm_custom_field_value'
                            element: 'value_date'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'eed12cb0b1734b758d5fc052fd830a2f'
                        key: {
                            name: 'x_gzi_ppm_proj_res_alloc'
                            element: 'user_id'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'ef5cd96700c241298c5ad20f4f2e6f46'
                        key: {
                            name: 'x_gzi_ppm_workspace_team'
                            element: 'group_id'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'f26038c6b21c4db88c2ad9e2bd9814fd'
                        key: {
                            name: 'x_gzi_ppm_project'
                            element: 'sync_with_jira'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'f27f2c3a332d40d0a6573865609038be'
                        key: {
                            name: 'x_gzi_ppm_custom_view'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'f2a2f54ee04e442a80151728d2c44b47'
                        key: {
                            name: 'x_gzi_ppm_workspace_user'
                            element: 'user_id'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'f5250e023a42405e8f619740ef5a3074'
                        key: {
                            name: 'x_gzi_ppm_project'
                            element: 'start_date'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'f572563a2f924f86a1b3a8fdc7d652c2'
                        key: {
                            name: 'x_gzi_ppm_status_update'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_index'
                        id: 'f643b1ed0b3a44cc8d05e98f77accc60'
                        deleted: true
                        key: {
                            logical_table_name: 'x_gzi_ppm_goal'
                            col_name_string: 'workspace_id'
                        }
                    },
                    {
                        table: 'sys_index'
                        id: 'f69047e7002f4fdfa1d2bd7cace511cb'
                        key: {
                            logical_table_name: 'x_gzi_ppm_project_task'
                            col_name_string: 'project_id,task_id'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: 'f7155068cad848949cc18bcd3d3dfb07'
                        key: {
                            name: 'x_gzi_ppm_status_update'
                            element: 'entity_type'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'f7e3153c0808446abea23ecce890f6ab'
                        key: {
                            name: 'x_gzi_ppm_project'
                            element: 'priority'
                            value: 'strategic'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'f824231838f340509cab7fb9d5f49b4b'
                        key: {
                            name: 'x_gzi_ppm_workspace_user'
                            element: 'workspace_id'
                        }
                    },
                    {
                        table: 'sn_glider_source_artifact_m2m'
                        id: 'f85a5a71d0aa4a18bd3b755ee4590e74'
                        deleted: true
                        key: {
                            application_file: '3d11aa90ab7f4d43bdb477949d00a13b'
                            source_artifact: '4e8e46929bde432790cfcb7104335322'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'f8af9a66ed514f42979486d0f457b7e5'
                        key: {
                            name: 'x_gzi_ppm_custom_field_value'
                            element: 'task_id'
                            language: 'en'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: 'fa3a931ed8ad46b288f4a4a7ca3d4c2f'
                        key: {
                            name: 'x_gzi_ppm_workspace'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'fa5b960f0b4e443f8a560b8978baebd1'
                        key: {
                            name: 'x_gzi_ppm_project'
                            element: 'description'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'fa7f97741c364e12a3c708c97436160a'
                        key: {
                            name: 'x_gzi_ppm_portfolio_project'
                            element: 'portfolio_id'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: 'fb7fa1cbbd4a4d70afa6aba53e642cb4'
                        key: {
                            name: 'x_gzi_ppm_goal'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'fd4feaeac7e0478c858e2e5c744d3031'
                        key: {
                            name: 'x_gzi_ppm_workspace_team'
                            element: 'group_id'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'fe2736ba0a5b44c1b51fc152b8919d74'
                        key: {
                            name: 'x_gzi_ppm_project'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ux_lib_asset'
                        id: 'fe27afe67da14ce79807bf355fa52db0'
                        deleted: true
                        key: {
                            name: 'x_gzi_ppm/BreadcrumbBar.js.map'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'fe6a96bf27584f94b03d38943fa047c6'
                        key: {
                            name: 'x_gzi_ppm_custom_field_def'
                            element: 'workspace_id'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'fe7521880a6d4700bd1a22431f54a809'
                        key: {
                            name: 'x_gzi_ppm_custom_field_def'
                            element: 'name'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'feb322177d974dd8ad3f12d674d92f53'
                        key: {
                            name: 'x_gzi_ppm_capacity_plan'
                            element: 'time_granularity'
                            value: 'quarter'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'fec23b2698bc4539ac54c806b0fd4c4a'
                        key: {
                            name: 'x_gzi_ppm_task_dependency'
                            element: 'successor_task_id'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'ff206aceca894a7eb633c90a7208571f'
                        key: {
                            name: 'x_gzi_ppm_project_task'
                            element: 'project_id'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'ff24d69f8e104d1ca0072065b9272262'
                        key: {
                            name: 'x_gzi_ppm_custom_field_def'
                            element: 'type'
                            value: 'people'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_index'
                        id: 'ff2aee219f5e4547b6a3311ee40c3444'
                        deleted: true
                        key: {
                            logical_table_name: 'x_gzi_ppm_portfolio'
                            col_name_string: 'workspace_id'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: 'ff3876bc33a54c6b87b881aec6a27dd3'
                        key: {
                            name: 'x_gzi_ppm_workspace_user'
                        }
                    },
                    {
                        table: 'sys_index'
                        id: 'ff9ffd81c6304e81aa10e75121104e79'
                        deleted: true
                        key: {
                            logical_table_name: 'x_gzi_ppm_task_dependency'
                            col_name_string: 'predecessor_task_id'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'ffd4e4cf18a3411bbb4010fef7b45b16'
                        key: {
                            name: 'x_gzi_ppm_project'
                            element: 'name'
                        }
                    },
                ]
            }
        }
    }
}
