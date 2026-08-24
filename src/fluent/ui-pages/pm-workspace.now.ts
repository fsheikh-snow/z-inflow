import '@servicenow/sdk/global'
import { UiPage } from '@servicenow/sdk/core'
import pmWorkspacePage from '../../client/index.html'

UiPage({
    $id: Now.ID['pm-workspace-page'],
    endpoint: 'x_gzi_ppm_workspace.do',
    description: 'PM Workspace BYOUI React page',
    category: 'general',
    html: pmWorkspacePage,
    direct: true,
})
