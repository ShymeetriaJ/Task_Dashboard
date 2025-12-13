import  { useState } from 'react';
import { sortByStatus, sortByPriority } from '../../utils/taskUtils';
import type { Task, TaskListProps } from '../../types/index';
import { TaskItem } from './TaskItem'

export function TaskList({tasks, onStatusChange, onDelete}: TaskListProps) {
    const [sortBy, setSortBy] = useState<'priority' | 'status'>('priority');

    const getSortedTasks = (): Task[] => {
        if (sortBy === 'priority') {
            return sortByPriority(tasks);
        } else {
            return sortByStatus(tasks);} 
       };

       const sortedTasks = getSortedTasks();

       return (
        <div>
        <h3>Task List</h3>
        
        <div>
            <label>Sort by:</label>
            <select value={sortBy} onChange={(e) => setSortBy(e.target.value as 'priority' | 'status')}>
                <option value="priority">Priority</option>
                <option value="status">Status</option>
            </select>
        </div>

        {sortedTasks.length === 0 ? (
            <p>No tasks to display</p>
        ) : (
    <ul>
        {sortedTasks.map((task) => (
            <TaskItem
            key={task.id}
            task={task}
            onStatusChange={onStatusChange}
            onDelete={onDelete} />))}
    </ul>)}      
</div>
);
}
