import  { useState } from 'react';
import { sortByStatus } from '../../utils/taskUtils';

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
            <h3> Task List </h3>
            <div>
                <label> Sort by: </label>
                <select value={sortBy} onChange={(e) => setSortBy(e.target.value as 'priority' | 'status')}>
                    <option value="priority">Priority</option>
                    <option value="status">Status</option>                    
                </select>
            </div>
            {sortedTasks.map((task) => (
                <li key={task.id}>
                    <h4>{task.title}</h4>
                    <p>{task.description}</p>
                    <p>Priority: {task.priority}</p>
                    <p>Status: {task.status}</p>
                    <div>
                        <label>Change Status:</label>
                        <select value={task.staus}onChange={(e) => onStatusChange(task.id, e.target.value as 'pending' | 'in-progress' | 'completed')}>
                            <option value="pending">Pending</option>
                            <option value="in-progress">In-progress</option>
                            <option value="completed">Completed</option>
                        </select>
                    </div>
                    <button onClick={() => onDelete(task.id)}>Delete</button>
                </li>
            ))}
        </div>

       );
    }
