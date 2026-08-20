import '@servicenow/sdk/global'
import { UiPage } from '@servicenow/sdk/core'
import pmWorkspacePage from '../../client/index.html'

UiPage({
    $id: Now.ID['pm-workspace-page'],
    endpoint: 'x_gzi_zflow_workspace.do',
    description: 'Z-Inflow PM Workspace UI Page',
    category: 'general',
    html: pmWorkspacePage,
    direct: true,
})
