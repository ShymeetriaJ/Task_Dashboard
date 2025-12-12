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
        
       )
    }
