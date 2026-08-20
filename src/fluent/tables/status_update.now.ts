import '@servicenow/sdk/global'
import {
    Table,
    StringColumn,
    ReferenceColumn,
    ChoiceColumn,
    HtmlColumn,
} from '@servicenow/sdk/core'

export const x_gzi_zflow_status_update = Table({
    name: 'x_gzi_zflow_status_update',
    label: 'Status Update',
    allowWebServiceAccess: true,
    createAccessControls: true,
    schema: {
        entity_type: ChoiceColumn({
            label: 'Entity Type',
            mandatory: true,
            dropdown: 'dropdown_without_none',
            choices: {
                goal: 'Goal',
                project: 'Project',
                portfolio: 'Portfolio',
            },
        }),
        entity_id: StringColumn({ label: 'Entity ID', mandatory: true, maxLength: 32 }),
        author_id: ReferenceColumn({
            label: 'Author',
            referenceTable: 'sys_user',
            mandatory: true,
            cascadeRule: 'none',
        }),
        text: HtmlColumn({ label: 'Text' }),
        status: ChoiceColumn({
            label: 'Status',
            dropdown: 'dropdown_with_none',
            choices: {
                on_track: 'On Track',
                at_risk: 'At Risk',
                off_track: 'Off Track',
                on_hold: 'On Hold',
                no_recent_updates: 'No Recent Updates',
            },
        }),
    },
})
