import { GlideRecord } from '@servicenow/glide'
import { getPathParam, parseBody, sendError, sendJson, viewDataService } from './helpers'

export function getView(request: any, response: any) {
    const viewId = getPathParam(request, 'id')
    const svc = viewDataService()
    const view = svc.getView(viewId)
    if (!view) {
        sendError(response, 'View not found', 404)
        return
    }
    sendJson(response, view)
}

export function listCustomFields(request: any, response: any) {
    const results = []
    const gr = new GlideRecord('x_gzi_z_ppm_custom_field_def')
    gr.orderBy('name')
    gr.query()
    while (gr.next()) {
        results.push({
            sys_id: gr.getUniqueValue(),
            workspace_id: gr.getValue('workspace_id'),
            name: gr.getValue('name'),
            type: gr.getValue('type'),
            is_global_library: gr.getValue('is_global_library') === 'true',
        })
    }
    sendJson(response, results)
}

export function listCustomFieldValues(request: any, response: any) {
    const body = parseBody(request)
    const gr = new GlideRecord('x_gzi_z_ppm_custom_field_value')
    if (body.task_id) gr.addQuery('task_id', String(body.task_id))
    if (body.project_id) gr.addQuery('project_id', String(body.project_id))
    if (body.portfolio_id) gr.addQuery('portfolio_id', String(body.portfolio_id))
    gr.query()
    const results = []
    while (gr.next()) {
        results.push({
            sys_id: gr.getUniqueValue(),
            field_def_id: gr.getValue('field_def_id'),
            value_string: gr.getValue('value_string'),
            value_number: gr.getValue('value_number'),
            value_date: gr.getValue('value_date'),
            task_id: gr.getValue('task_id'),
            project_id: gr.getValue('project_id'),
            portfolio_id: gr.getValue('portfolio_id'),
        })
    }
    sendJson(response, results)
}

export function upsertCustomFieldValues(request: any, response: any) {
    const body = parseBody(request)
    const values = (body.values as Record<string, unknown>[]) || []
    const saved = []
    for (const value of values) {
        const gr = new GlideRecord('x_gzi_z_ppm_custom_field_value')
        const sysId = value.sys_id ? String(value.sys_id) : ''
        if (sysId && gr.get(sysId)) {
            if (value.value_string !== undefined) gr.setValue('value_string', String(value.value_string))
            if (value.value_number !== undefined) gr.setValue('value_number', String(value.value_number))
            if (value.value_date !== undefined) gr.setValue('value_date', String(value.value_date))
            gr.update()
            saved.push(gr.getUniqueValue())
            continue
        }
        gr.initialize()
        gr.setValue('field_def_id', String(value.field_def_id))
        if (value.value_string !== undefined) gr.setValue('value_string', String(value.value_string))
        if (value.value_number !== undefined) gr.setValue('value_number', String(value.value_number))
        if (value.value_date !== undefined) gr.setValue('value_date', String(value.value_date))
        if (value.task_id) gr.setValue('task_id', String(value.task_id))
        if (value.project_id) gr.setValue('project_id', String(value.project_id))
        if (value.portfolio_id) gr.setValue('portfolio_id', String(value.portfolio_id))
        saved.push(String(gr.insert()))
    }
    sendJson(response, { saved })
}
