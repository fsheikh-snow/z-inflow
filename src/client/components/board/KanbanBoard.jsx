import React from 'react'
import {
    DndContext,
    closestCorners,
    KeyboardSensor,
    PointerSensor,
    useSensor,
    useSensors,
    DragOverlay,
    useDroppable,
} from '@dnd-kit/core'
import { SortableContext, sortableKeyboardCoordinates, verticalListSortingStrategy, useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import UserChip from '../shared/UserChip'
import './board.css'

const COLUMN_PREFIX = 'column:'

function columnDropId(columnId) {
    return `${COLUMN_PREFIX}${columnId}`
}

function parseColumnDropId(id) {
    const value = String(id)
    return value.startsWith(COLUMN_PREFIX) ? value.slice(COLUMN_PREFIX.length) : null
}

function SortableTaskCard({ task, onClick }) {
    const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({ id: task.sys_id })

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
        opacity: isDragging ? 0.5 : 1,
    }

    return (
        <div ref={setNodeRef} style={style} {...attributes} {...listeners} className="board-card" onClick={() => onClick?.(task)}>
            <div className="board-card-name">{task.name}</div>
            <div className="board-card-meta">
                <UserChip user={task.assignee} size="sm" />
                {task.due_date && <span className="board-card-due">{task.due_date}</span>}
            </div>
        </div>
    )
}

function BoardColumn({ column, tasks, onTaskClick }) {
    const colId = column.sys_id || column.id
    const taskIds = tasks.map((t) => t.sys_id)
    const { setNodeRef } = useDroppable({ id: columnDropId(colId) })

    return (
        <div className="board-column">
            <div className="board-column-header">
                <span className="board-column-title">{column.label || column.name}</span>
                <span className="board-column-count">{tasks.length}</span>
            </div>
            <SortableContext items={taskIds} strategy={verticalListSortingStrategy}>
                <div className="board-column-cards" ref={setNodeRef}>
                    {tasks.map((task) => (
                        <SortableTaskCard key={task.sys_id} task={task} onClick={onTaskClick} />
                    ))}
                </div>
            </SortableContext>
        </div>
    )
}

export default function KanbanBoard({ columns = [], tasksByColumn = {}, loading, onTaskClick, onReorder }) {
    const [activeId, setActiveId] = React.useState(null)

    const sensors = useSensors(
        useSensor(PointerSensor, { activationConstraint: { distance: 5 } }),
        useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates })
    )

    const activeTask = React.useMemo(() => {
        if (!activeId) return null
        for (const colId of Object.keys(tasksByColumn)) {
            const found = (tasksByColumn[colId] || []).find((t) => t.sys_id === activeId)
            if (found) return found
        }
        return null
    }, [activeId, tasksByColumn])

    const handleDragEnd = (event) => {
        const { active, over } = event
        setActiveId(null)
        if (!over || active.id === over.id) return

        let sourceColumn = null
        let targetColumn = null
        for (const colId of Object.keys(tasksByColumn)) {
            if ((tasksByColumn[colId] || []).some((t) => t.sys_id === active.id)) sourceColumn = colId
            if ((tasksByColumn[colId] || []).some((t) => t.sys_id === over.id)) targetColumn = colId
        }

        const overColumnId = parseColumnDropId(over.id)
        if (overColumnId) {
            targetColumn = overColumnId
        }

        if (sourceColumn && targetColumn && onReorder) {
            const sourceTasks = [...(tasksByColumn[sourceColumn] || [])]
            const oldIndex = sourceTasks.findIndex((t) => t.sys_id === active.id)
            const [moved] = sourceTasks.splice(oldIndex, 1)

            const targetTasks = sourceColumn === targetColumn ? sourceTasks : [...(tasksByColumn[targetColumn] || [])]
            const newIndex = targetTasks.findIndex((t) => t.sys_id === over.id)
            targetTasks.splice(newIndex >= 0 ? newIndex : targetTasks.length, 0, moved)

            onReorder(targetColumn, targetTasks.map((t) => t.sys_id))
        }
    }

    if (loading) return <div className="board-loading">Loading board…</div>

    return (
        <DndContext
            sensors={sensors}
            collisionDetection={closestCorners}
            onDragStart={(e) => setActiveId(e.active.id)}
            onDragEnd={handleDragEnd}
        >
            <div className="kanban-board">
                {columns.map((col) => (
                    <BoardColumn
                        key={col.sys_id || col.id}
                        column={col}
                        tasks={tasksByColumn[col.sys_id || col.id] || []}
                        onTaskClick={onTaskClick}
                    />
                ))}
            </div>
            <DragOverlay>
                {activeTask ? (
                    <div className="board-card board-card-dragging">
                        <div className="board-card-name">{activeTask.name}</div>
                    </div>
                ) : null}
            </DragOverlay>
        </DndContext>
    )
}
