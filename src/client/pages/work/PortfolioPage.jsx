import React, { lazy, Suspense, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import TopBar from '../../layout/TopBar'
import BreadcrumbBar from '../../layout/BreadcrumbBar'
import EntityTabBar from '../../components/shared/EntityTabBar'
import ViewToolbar from '../../components/shared/ViewToolbar'
import ViewColumnEditor from '../../components/shared/ViewColumnEditor'
import DynamicDataGrid from '../../components/grid/DynamicDataGrid'
import PortfolioKanbanGrid from '../../components/portfolio/PortfolioKanbanGrid'
import VirtualizedGantt from '../../components/gantt/VirtualizedGantt'
import PortfolioProgressView from '../../components/portfolio/PortfolioProgressView'
import PortfolioWorkloadGrid from '../../components/portfolio/PortfolioWorkloadGrid'
import ProjectCreateForm from '../../components/project/ProjectCreateForm'

const PortfolioDashboardWidgets = lazy(() => import('../../components/portfolio/PortfolioDashboardWidgets'))
import {
    usePortfolio,
    usePortfolioViews,
    usePortfolioViewData,
    usePortfolioTimeline,
    usePortfolioDashboard,
    usePortfolioProgress,
    usePortfolioWorkload,
} from '../../services/hooks'

const PORTFOLIO_TABS = [
    { id: 'list', label: 'List', icon: '☰' },
    { id: 'kanban', label: 'Kanban', icon: '▦' },
    { id: 'timeline', label: 'Timeline', icon: '📅' },
    { id: 'dashboard', label: 'Dashboard', icon: '📊' },
    { id: 'progress', label: 'Progress', icon: '📈' },
    { id: 'workload', label: 'Workload', icon: '👥' },
]

export default function PortfolioPage() {
    const { portfolioId } = useParams()
    const navigate = useNavigate()
    const [activeTab, setActiveTab] = useState('list')
    const [showColumnEditor, setShowColumnEditor] = useState(false)
    const [showCreateProject, setShowCreateProject] = useState(false)

    const { data: portfolio } = usePortfolio(portfolioId)
    const { data: views = [] } = usePortfolioViews(portfolioId)
    const defaultViewId = views[0]?.sys_id

    const { data: viewData, isLoading: viewLoading } = usePortfolioViewData(portfolioId, defaultViewId)
    const { data: timeline, isLoading: timelineLoading } = usePortfolioTimeline(portfolioId)
    const { data: dashboard, isLoading: dashboardLoading } = usePortfolioDashboard(portfolioId)
    const { data: progress, isLoading: progressLoading } = usePortfolioProgress(portfolioId)
    const { data: workload, isLoading: workloadLoading } = usePortfolioWorkload(portfolioId)

    const renderTabContent = () => {
        switch (activeTab) {
            case 'list':
                return (
                    <DynamicDataGrid
                        rows={viewData?.rows || []}
                        groups={viewData?.groups || []}
                        columns={viewData?.columns}
                        loading={viewLoading}
                        onRowClick={(row) => navigate(`/projects/${row.sys_id}`)}
                    />
                )
            case 'kanban':
                return (
                    <PortfolioKanbanGrid
                        lanes={viewData?.lanes || viewData?.groups || []}
                        loading={viewLoading}
                        onCardClick={(project) => navigate(`/projects/${project.sys_id}`)}
                    />
                )
            case 'timeline':
                return (
                    <VirtualizedGantt
                        mode="project"
                        items={timeline?.items || []}
                        startDate={timeline?.start_date}
                        endDate={timeline?.end_date}
                        loading={timelineLoading}
                        onBarClick={(item) => navigate(`/projects/${item.sys_id}`)}
                    />
                )
            case 'dashboard':
                return (
                    <Suspense fallback={<div className="portfolio-loading">Loading dashboard…</div>}>
                        <PortfolioDashboardWidgets data={dashboard} loading={dashboardLoading} />
                    </Suspense>
                )
            case 'progress':
                return <PortfolioProgressView data={progress} loading={progressLoading} />
            case 'workload':
                return <PortfolioWorkloadGrid data={workload} loading={workloadLoading} />
            default:
                return null
        }
    }

    return (
        <>
            <TopBar title={portfolio?.name || 'Portfolio'} />
            <BreadcrumbBar
                crumbs={[
                    { label: 'Portfolios', to: '/portfolios' },
                    { label: portfolio?.name || 'Loading…' },
                ]}
            />
            <EntityTabBar tabs={PORTFOLIO_TABS} activeTab={activeTab} onTabChange={setActiveTab} onAddTab={() => setShowColumnEditor(true)} />
            <ViewToolbar
                onAddWork={() => setShowCreateProject(true)}
                onFilter={() => {}}
                onSort={() => {}}
                onGroup={() => {}}
                onCustomize={() => setShowColumnEditor(true)}
            />
            <div className="page-content">
                {showColumnEditor && (
                    <div style={{ marginBottom: 16 }}>
                        <ViewColumnEditor onClose={() => setShowColumnEditor(false)} onSave={() => setShowColumnEditor(false)} />
                    </div>
                )}
                {renderTabContent()}
            </div>
            {showCreateProject && (
                <ProjectCreateForm
                    portfolio={portfolio}
                    onClose={() => setShowCreateProject(false)}
                    onSaved={(project) => navigate(`/projects/${project.sys_id}`)}
                />
            )}
        </>
    )
}
