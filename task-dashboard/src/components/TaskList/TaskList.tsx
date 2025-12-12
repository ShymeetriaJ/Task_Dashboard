import  { useState } from 'react';

export function TaskList({tasks, onStatusChange, onDelete}: TaskListProps) {
    const [sortBy, setSortBy] = useState<'priority' | 'status'>()
}