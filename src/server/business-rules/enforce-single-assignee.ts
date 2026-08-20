import { gs, GlideRecord } from '@servicenow/glide'

export function enforceSingleAssignee(
    current: GlideRecord<'x_gzi_zflow_task'>,
    _previous: GlideRecord<'x_gzi_zflow_task'>,
) {
    const assigneeId = current.getValue('assignee_id')
    const watchList = current.getValue('watch_list') || ''

    if (!assigneeId || !watchList) {
        return
    }

    const collaborators = watchList.split(',').filter(function (id) {
        return !!id
    })

    if (collaborators.indexOf(assigneeId) >= 0) {
        const filtered = collaborators.filter(function (id) {
            return id !== assigneeId
        })
        current.setValue('watch_list', filtered.join(','))
        gs.addInfoMessage('Assignee removed from collaborators to enforce single assignee.')
    }
}
