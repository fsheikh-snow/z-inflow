import '@servicenow/sdk/global'
import { UiPage } from '@servicenow/sdk/core'
import pmWorkspacePage from '../../client/index.html'

UiPage({
    $id: Now.ID['efce0001869d47f088c3daafdba3d36a'],
    endpoint: 'x_gzi_ppm_app.do',
    description: 'PM Workspace BYOUI React page',
    category: 'general',
    html: pmWorkspacePage,
    direct: true,
})
