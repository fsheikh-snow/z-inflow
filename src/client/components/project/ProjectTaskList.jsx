import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import {
    DndContext,
    DragOverlay,
    KeyboardSensor,
    PointerSensor,
    closestCenter,
    useSensor,
    useSensors,
} from '@dnd-kit/core'
import {
    SortableContext,
    arrayMove,
    sortableKeyboardCoordinates,
    useSortable,
    verticalListSortingStrategy,
} from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import UserChip from '../shared/UserChip'
import TagPill from '../shared/TagPill'
import {
    useCreateSection,
    useDeleteSection,
    useProjectBoard,
    useReorderSections,
    useReorderTaskList,
    useUpdateSection,
    useUpdateTask,
} from '../../services/hooks'
import './task-list.css'

const UNSECTIONED_ID = 'unsectioned'
const SECTION_PREFIX = 'section:'
const TASK_PREFIX = 'task:'

function sectionDragId(sectionId) {
    return `${SECTION_PREFIX}${sectionId}`
}

function taskDragId(taskId) {
    return `${TASK_PREFIX}${taskId}`
}

function parseDragId(id) {
    const value = String(id)
    if (value.startsWith(SECTION_PREFIX)) {
        return { kind: 'section', id: value.slice(SECTION_PREFIX.length) }
    }
    if (value.startsWith(TASK_PREFIX)) {
        return { kind: 'task', id: value.slice(TASK_PREFIX.length) }
    }
    return { kind: 'unknown', id: value }
}

function loadCollapsed(projectId) {
    try {
        const raw = localStorage.getItem(`ppm-collapsed-${projectId}`)
        return raw ? JSON.parse(raw) : []
    } catch {
        return []
    }
}

function saveCollapsed(projectId, ids) {
    try {
        localStorage.setItem(`ppm-collapsed-${projectId}`, JSON.stringify(ids))
    } catch {
        // ignore quota errors
    }
}

function buildSectionMap(columns) {
    const map = {}
    for (const col of columns || []) {
        const id = col.sys_id || col.id
        map[id] = (col.tasks || []).map((t) => t.sys_id)
    }
    return map
}

function SortableSectionHeader({
    section,
    collapsed,
    taskCount,
    onToggle,
    isUnsectioned,
    onRename,
    onDelete,
}) {
    const dragId = sectionDragId(section.id)
    const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({
        id: dragId,
        disabled: isUnsectioned,
    })
    const [editing, setEditing] = useState(false)
    const [editName, setEditName] = useState(section.name)

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
        opacity: isDragging ? 0.5 : 1,
    }

    const commitRename = () => {
        const name = editName.trim()
        if (name && name !== section.name) {
            onRename?.(section.id, name)
        }
        setEditing(false)
    }

    return (
        <div ref={setNodeRef} style={style} className="task-list-section-header">
            {!isUnsectioned && (
                <button type="button" className="task-list-drag-handle" aria-label="Drag section" {...attributes} {...listeners}>
                    ⠿
                </button>
            )}
            {isUnsectioned ? <span className="task-list-section-spacer" /> : null}
            <button type="button" className="task-list-collapse-btn" onClick={onToggle} aria-expanded={!collapsed}>
                <span className={`task-list-chevron${collapsed ? ' collapsed' : ''}`}>▾</span>
            </button>
            {editing ? (
                <input
                    type="text"
                    className="field-control task-list-section-name-input"
                    value={editName}
                    onChange={(e) => setEditName(e.target.value)}
                    onBlur={commitRename}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') commitRename()
                        if (e.key === 'Escape') {
                            setEditName(section.name)
                            setEditing(false)
                        }
                    }}
                    autoFocus
                />
            ) : (
                <span
                    className="task-list-section-name"
                    onDoubleClick={() => {
                        if (!isUnsectioned) {
                            setEditName(section.name)
                            setEditing(true)
                        }
                    }}
                >
                    {section.name}
                </span>
            )}
            <span className="task-list-section-count">{taskCount}</span>
            {!isUnsectioned && onDelete && (
                <button
                    type="button"
                    className="task-list-section-delete"
                    aria-label="Delete section"
                    onClick={() => onDelete(section.id, section.name)}
                >
                    ×
                </button>
            )}
        </div>
    )
}

function SortableTaskRow({ task, onClick, onToggleComplete }) {
    const dragId = taskDragId(task.sys_id)
    const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({ id: dragId })

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
        opacity: isDragging ? 0.4 : 1,
    }

    return (
        <div
            ref={setNodeRef}
            style={style}
            className="task-list-row"
            onClick={() => onClick?.(task)}
            onKeyDown={(e) => e.key === 'Enter' && onClick?.(task)}
            role="button"
            tabIndex={0}
        >
            <button type="button" className="task-list-drag-handle" aria-label="Drag task" {...attributes} {...listeners} onClick={(e) => e.stopPropagation()}>
                ⠿
            </button>
            <button
                type="button"
                className={`task-list-complete${task.completed ? ' done' : ''}`}
                aria-label={task.completed ? 'Mark incomplete' : 'Mark complete'}
                onClick={(e) => {
                    e.stopPropagation()
                    onToggleComplete?.(task)
                }}
            >
                {task.completed ? '✓' : '○'}
            </button>
            <span className={`task-list-name${task.completed ? ' done' : ''}`}>{task.name}</span>
            <span className="task-list-assignee">
                <UserChip user={task.assignee} size="sm" />
            </span>
            <span className="task-list-due">{task.due_date || '—'}</span>
            <span className="task-list-priority">
                {task.priority ? <TagPill label={task.priority} variant={task.priority?.toLowerCase()} /> : '—'}
            </span>
            <span className="task-list-status">{task.status || '—'}</span>
        </div>
    )
}

function TaskListSection({
    section,
    tasks,
    taskMap,
    collapsed,
    onToggleCollapse,
    onTaskClick,
    onToggleComplete,
    isUnsectioned,
    onRenameSection,
    onDeleteSection,
}) {
    const taskIds = tasks.map((id) => taskDragId(id))

    return (
        <div className="task-list-section">
            <SortableSectionHeader
                section={section}
                collapsed={collapsed}
                taskCount={tasks.length}
                onToggle={() => onToggleCollapse(section.id)}
                isUnsectioned={isUnsectioned}
                onRename={onRenameSection}
                onDelete={onDeleteSection}
            />
            {!collapsed && (
                <SortableContext items={taskIds} strategy={verticalListSortingStrategy}>
                    <div className="task-list-tasks">
                        {tasks.map((taskId) => {
                            const task = taskMap[taskId]
                            if (!task) return null
                            return (
                                <SortableTaskRow
                                    key={task.sys_id}
                                    task={task}
                                    onClick={onTaskClick}
                                    onToggleComplete={onToggleComplete}
                                />
                            )
                        })}
                        {tasks.length === 0 && <div className="task-list-empty-section">No tasks in this section</div>}
                    </div>
                </SortableContext>
            )}
        </div>
    )
}

export default function ProjectTaskList({ projectId, loading, onTaskClick, onAddTask }) {
    const { data: board } = useProjectBoard(projectId)
    const createSectionMutation = useCreateSection(projectId)
    const updateSectionMutation = useUpdateSection(projectId)
    const deleteSectionMutation = useDeleteSection(projectId)
    const reorderSectionsMutation = useReorderSections(projectId)
    const reorderTaskListMutation = useReorderTaskList(projectId)
    const updateTaskMutation = useUpdateTask(projectId)

    const [collapsedIds, setCollapsedIds] = useState(() => loadCollapsed(projectId))
    const [sectionOrder, setSectionOrder] = useState([])
    const [tasksBySection, setTasksBySection] = useState({})
    const tasksBySectionRef = useRef(tasksBySection)
    const [taskMap, setTaskMap] = useState({})
    const [activeId, setActiveId] = useState(null)
    const [addingSection, setAddingSection] = useState(false)
    const [newSectionName, setNewSectionName] = useState('')

    const columns = board?.columns || []

    useEffect(() => {
        setCollapsedIds(loadCollapsed(projectId))
    }, [projectId])

    useEffect(() => {
        const namedSections = columns.filter((c) => (c.sys_id || c.id) !== UNSECTIONED_ID)
        const unsectioned = columns.find((c) => (c.sys_id || c.id) === UNSECTIONED_ID)
        const order = [
            ...namedSections.map((c) => c.sys_id || c.id),
            ...(unsectioned ? [UNSECTIONED_ID] : []),
        ]
        setSectionOrder(order)
        setTasksBySection(buildSectionMap(columns))

        const map = {}
        for (const col of columns) {
            for (const task of col.tasks || []) {
                map[task.sys_id] = task
            }
        }
        setTaskMap(map)
    }, [columns])

    useEffect(() => {
        tasksBySectionRef.current = tasksBySection
    }, [tasksBySection])

    const sectionMeta = useMemo(() => {
        const meta = {}
        for (const col of columns) {
            const id = col.sys_id || col.id
            meta[id] = { id, name: col.label || col.name || 'Section' }
        }
        if (!meta[UNSECTIONED_ID]) {
            meta[UNSECTIONED_ID] = { id: UNSECTIONED_ID, name: 'Tasks' }
        }
        return meta
    }, [columns])

    const sortableSectionIds = useMemo(
        () => sectionOrder.filter((id) => id !== UNSECTIONED_ID).map(sectionDragId),
        [sectionOrder]
    )

    const sensors = useSensors(
        useSensor(PointerSensor, { activationConstraint: { distance: 5 } }),
        useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates })
    )

    const toggleCollapse = useCallback(
        (sectionId) => {
            setCollapsedIds((prev) => {
                const next = prev.includes(sectionId) ? prev.filter((id) => id !== sectionId) : [...prev, sectionId]
                saveCollapsed(projectId, next)
                return next
            })
        },
        [projectId]
    )

    const findSectionForTask = useCallback((taskId, map = tasksBySectionRef.current) => {
        for (const sectionId of Object.keys(map)) {
            if ((map[sectionId] || []).includes(taskId)) {
                return sectionId
            }
        }
        return UNSECTIONED_ID
    }, [])

    const handleDragStart = (event) => {
        setActiveId(event.active.id)
    }

    const handleDragOver = (event) => {
        const { active, over } = event
        if (!over) return

        const activeParsed = parseDragId(active.id)
        if (activeParsed.kind !== 'task') return

        const overParsed = parseDragId(over.id)
        const activeSection = findSectionForTask(activeParsed.id)

        let overSection = activeSection
        if (overParsed.kind === 'section') {
            overSection = overParsed.id
        } else if (overParsed.kind === 'task') {
            overSection = findSectionForTask(overParsed.id)
        }

        if (activeSection === overSection) return

        setTasksBySection((prev) => {
            const activeItems = [...(prev[activeSection] || [])]
            const overItems = [...(prev[overSection] || [])]
            const activeIndex = activeItems.indexOf(activeParsed.id)
            if (activeIndex === -1) return prev

            activeItems.splice(activeIndex, 1)

            let overIndex = overItems.length
            if (overParsed.kind === 'task') {
                const idx = overItems.indexOf(overParsed.id)
                overIndex = idx >= 0 ? idx : overItems.length
            }

            overItems.splice(overIndex, 0, activeParsed.id)
            return { ...prev, [activeSection]: activeItems, [overSection]: overItems }
        })
    }

    const handleDragEnd = (event) => {
        const { active, over } = event
        setActiveId(null)
        if (!over) return

        const activeParsed = parseDragId(active.id)
        const overParsed = parseDragId(over.id)

        if (activeParsed.kind === 'section' && overParsed.kind === 'section') {
            if (activeParsed.id === overParsed.id) return
            const oldIndex = sectionOrder.indexOf(activeParsed.id)
            const newIndex = sectionOrder.indexOf(overParsed.id)
            if (oldIndex < 0 || newIndex < 0) return

            const nextOrder = arrayMove(
                sectionOrder.filter((id) => id !== UNSECTIONED_ID),
                oldIndex,
                newIndex
            )
            const withUnsectioned = [...nextOrder, UNSECTIONED_ID]
            setSectionOrder(withUnsectioned)
            reorderSectionsMutation.mutate(nextOrder)
            return
        }

        if (activeParsed.kind === 'task') {
            const currentMap = { ...tasksBySectionRef.current }
            const sourceSection = findSectionForTask(activeParsed.id, currentMap)

            if (overParsed.kind === 'task' && findSectionForTask(overParsed.id, currentMap) === sourceSection) {
                const items = [...(currentMap[sourceSection] || [])]
                const oldIndex = items.indexOf(activeParsed.id)
                const newIndex = items.indexOf(overParsed.id)
                if (oldIndex >= 0 && newIndex >= 0 && oldIndex !== newIndex) {
                    const reordered = arrayMove(items, oldIndex, newIndex)
                    const nextMap = { ...currentMap, [sourceSection]: reordered }
                    setTasksBySection(nextMap)
                    tasksBySectionRef.current = nextMap
                    reorderTaskListMutation.mutate({ sectionId: sourceSection, taskIds: reordered })
                }
                return
            }

            let targetSection = sourceSection
            let targetIndex = (currentMap[sourceSection] || []).length

            if (overParsed.kind === 'section') {
                targetSection = overParsed.id
                targetIndex = (currentMap[targetSection] || []).length
            } else if (overParsed.kind === 'task') {
                targetSection = findSectionForTask(overParsed.id, currentMap)
                targetIndex = (currentMap[targetSection] || []).indexOf(overParsed.id)
                if (targetIndex < 0) {
                    targetIndex = (currentMap[targetSection] || []).length
                }
            }

            if (sourceSection === targetSection) return

            const sourceItems = [...(currentMap[sourceSection] || [])]
            const sourceIndex = sourceItems.indexOf(activeParsed.id)
            if (sourceIndex < 0) return

            sourceItems.splice(sourceIndex, 1)
            const targetItems = [...(currentMap[targetSection] || [])]
            targetItems.splice(targetIndex, 0, activeParsed.id)

            const nextMap = {
                ...currentMap,
                [sourceSection]: sourceItems,
                [targetSection]: targetItems,
            }
            setTasksBySection(nextMap)
            tasksBySectionRef.current = nextMap

            reorderTaskListMutation.mutate({ sectionId: sourceSection, taskIds: sourceItems })
            reorderTaskListMutation.mutate({ sectionId: targetSection, taskIds: targetItems })
        }
    }

    const handleCreateSection = async (event) => {
        event.preventDefault()
        const name = newSectionName.trim()
        if (!name) return
        await createSectionMutation.mutateAsync({ name })
        setNewSectionName('')
        setAddingSection(false)
    }

    const handleRenameSection = (sectionId, name) => {
        updateSectionMutation.mutate({ sectionId, data: { name } })
    }

    const handleDeleteSection = (sectionId, sectionName) => {
        if (!window.confirm(`Delete section "${sectionName}"? Tasks will move to the unsectioned list.`)) {
            return
        }
        deleteSectionMutation.mutate(sectionId)
    }

    const handleToggleComplete = (task) => {
        updateTaskMutation.mutate({
            taskId: task.sys_id,
            data: { completed: !task.completed },
        })
    }

    const activeDrag = activeId ? parseDragId(activeId) : null
    const activeTask = activeDrag?.kind === 'task' ? taskMap[activeDrag.id] : null
    const activeSection = activeDrag?.kind === 'section' ? sectionMeta[activeDrag.id] : null

    if (loading) {
        return <div className="task-list-loading">Loading tasks…</div>
    }

    return (
        <div className="project-task-list">
            <div className="task-list-header-row">
                <span className="task-list-col-handle" />
                <span className="task-list-col-complete" />
                <span className="task-list-col-name">Name</span>
                <span className="task-list-col-assignee">Assignee</span>
                <span className="task-list-col-due">Due date</span>
                <span className="task-list-col-priority">Priority</span>
                <span className="task-list-col-status">Status</span>
            </div>

            <DndContext
                sensors={sensors}
                collisionDetection={closestCenter}
                onDragStart={handleDragStart}
                onDragOver={handleDragOver}
                onDragEnd={handleDragEnd}
            >
                <SortableContext items={sortableSectionIds} strategy={verticalListSortingStrategy}>
                    {sectionOrder.map((sectionId) => {
                        const isUnsectioned = sectionId === UNSECTIONED_ID
                        const section = sectionMeta[sectionId] || { id: sectionId, name: 'Section' }
                        const tasks = tasksBySection[sectionId] || []
                        const hideUnsectionedHeader = isUnsectioned && sectionOrder.length === 1

                        if (hideUnsectionedHeader) {
                            return (
                                <SortableContext key={sectionId} items={tasks.map(taskDragId)} strategy={verticalListSortingStrategy}>
                                    <div className="task-list-tasks task-list-tasks-root">
                                        {tasks.map((taskId) => {
                                            const task = taskMap[taskId]
                                            if (!task) return null
                                            return (
                                                <SortableTaskRow
                                                    key={task.sys_id}
                                                    task={task}
                                                    onClick={onTaskClick}
                                                    onToggleComplete={handleToggleComplete}
                                                />
                                            )
                                        })}
                                        {tasks.length === 0 && (
                                            <div className="task-list-empty">No tasks yet. Add a task to get started.</div>
                                        )}
                                    </div>
                                </SortableContext>
                            )
                        }

                        return (
                            <TaskListSection
                                key={sectionId}
                                section={section}
                                tasks={tasks}
                                taskMap={taskMap}
                                collapsed={collapsedIds.includes(sectionId)}
                                onToggleCollapse={toggleCollapse}
                                onTaskClick={onTaskClick}
                                onToggleComplete={handleToggleComplete}
                                isUnsectioned={isUnsectioned}
                                onRenameSection={handleRenameSection}
                                onDeleteSection={handleDeleteSection}
                            />
                        )
                    })}
                </SortableContext>

                <DragOverlay>
                    {activeTask ? (
                        <div className="task-list-row task-list-row-dragging">
                            <span className="task-list-drag-handle">⠿</span>
                            <span className="task-list-name">{activeTask.name}</span>
                        </div>
                    ) : null}
                    {activeSection ? (
                        <div className="task-list-section-header task-list-section-header-dragging">
                            <span className="task-list-drag-handle">⠿</span>
                            <span className="task-list-section-name">{activeSection.name}</span>
                        </div>
                    ) : null}
                </DragOverlay>
            </DndContext>

            <div className="task-list-actions">
                {addingSection ? (
                    <form className="task-list-add-section-form" onSubmit={handleCreateSection}>
                        <input
                            type="text"
                            className="field-control"
                            value={newSectionName}
                            onChange={(e) => setNewSectionName(e.target.value)}
                            placeholder="Section name"
                            autoFocus
                        />
                        <button type="submit" className="btn btn-primary btn-sm" disabled={createSectionMutation.isPending || !newSectionName.trim()}>
                            Add section
                        </button>
                        <button type="button" className="btn btn-ghost btn-sm" onClick={() => setAddingSection(false)}>
                            Cancel
                        </button>
                    </form>
                ) : (
                    <>
                        <button type="button" className="task-list-action-link" onClick={() => setAddingSection(true)}>
                            + Add section
                        </button>
                        {onAddTask && (
                            <button type="button" className="task-list-action-link" onClick={onAddTask}>
                                + Add task
                            </button>
                        )}
                    </>
                )}
            </div>
        </div>
    )
}
