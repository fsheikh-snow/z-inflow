import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['5ce38eb133ba07509937d1382e5c7be5'],
    table: 'sys_ui_section',
    data: {
        header: false,
        name: 'x_gzi_ppm_task_dependency',
        sys_domain: 'global',
        sys_domain_path: '/',
        title: true,
        view: 'NULL',
    },
})
Record({
    $id: Now.ID['14e386f133ba07509937d1382e5c7bc9'],
    table: 'sys_ui_element',
    data: {
        element: '.begin_split',
        position: 0,
        sys_ui_section: '5ce38eb133ba07509937d1382e5c7be5',
        type: '.begin_split',
    },
})
Record({
    $id: Now.ID['9ce386f133ba07509937d1382e5c7bc9'],
    table: 'sys_ui_element',
    data: {
        element: 'predecessor_task_id',
        position: 1,
        sys_ui_section: '5ce38eb133ba07509937d1382e5c7be5',
    },
})
Record({
    $id: Now.ID['18e386f133ba07509937d1382e5c7bca'],
    table: 'sys_ui_element',
    data: {
        element: 'dependency_type',
        position: 2,
        sys_ui_section: '5ce38eb133ba07509937d1382e5c7be5',
    },
})
Record({
    $id: Now.ID['90e386f133ba07509937d1382e5c7bcb'],
    table: 'sys_ui_element',
    data: {
        element: '.split',
        position: 3,
        sys_ui_section: '5ce38eb133ba07509937d1382e5c7be5',
        type: '.split',
    },
})
Record({
    $id: Now.ID['1ce386f133ba07509937d1382e5c7bcb'],
    table: 'sys_ui_element',
    data: {
        element: 'successor_task_id',
        position: 4,
        sys_ui_section: '5ce38eb133ba07509937d1382e5c7be5',
    },
})
Record({
    $id: Now.ID['94e386f133ba07509937d1382e5c7bcc'],
    table: 'sys_ui_element',
    data: {
        element: '.end_split',
        position: 5,
        sys_ui_section: '5ce38eb133ba07509937d1382e5c7be5',
        type: '.end_split',
    },
})
