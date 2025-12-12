import React, { useState } from 'react';


export function Dashboard() {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [filters, setFilters] = useState<{
        status?: TaskStatus;
        priority?: 'low' | 'medium' | 'high';}>({});
        
}