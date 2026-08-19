import React from 'react'
import TopBar from '../../layout/TopBar'
import BreadcrumbBar from '../../layout/BreadcrumbBar'
import RuleBuilderCanvas from '../../components/rules/RuleBuilderCanvas'

export default function RuleBuilderPage() {
    return (
        <>
            <TopBar title="Automations" />
            <BreadcrumbBar
                crumbs={[
                    { label: 'Admin', to: '/admin/rules' },
                    { label: 'Automations' },
                ]}
            />
            <div className="page-content">
                <RuleBuilderCanvas rules={[]} onSave={() => {}} />
            </div>
        </>
    )
}
