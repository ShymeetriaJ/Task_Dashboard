import  { useState } from 'react';

export function TaskList({tasks, onStatusChange, onDelete}: TaskListProps) {
    const [sortBy, setSortBy] = useState<'date' | 'priority' | 'status'>()
}