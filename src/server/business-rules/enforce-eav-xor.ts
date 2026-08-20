import { gs, GlideRecord } from '@servicenow/glide'

export function enforceEavXor(
    current: GlideRecord<'x_gzi_zflow_custom_field_value'>,
    _previous: GlideRecord<'x_gzi_zflow_custom_field_value'>,
) {
    const refs = [
        current.getValue('task_id'),
        current.getValue('project_id'),
        current.getValue('portfolio_id'),
    ].filter(function (value) {
        return !!value
    })

    if (refs.length !== 1) {
        gs.addErrorMessage(
            'Custom field value must reference exactly one entity: task, project, or portfolio.',
        )
        current.setAbortAction(true)
    }
}
