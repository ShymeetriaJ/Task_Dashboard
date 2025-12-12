import React, ( useState) from "react";
import { TaskFilterProps } from "../../types";

export function TaskFilter({ onFilterChange }: TaskFilterProps) {
  const [status, setStatus] = useState<TaskStatus | 'all'>('all');
  const [priority, setPriority] = useState<'low' | 'medium' | 'high' | 'all'>('all');
  
  const handleStatusChange = (newStatus: TaskStatus | 'all') => {
    setStatus(newStatus);
    onFilterChange({
      status: newStatus,
      priority: priority !== 'all' ? priority : undefined,
  });
};
  const handlePriorityChange = (newPriority: 'low' | 'medium' | 'high' | 'all') => {
    setPriority(newPriority);
    onFilterChange({
        status: status !== 'all' ? newPriority : undefined,
    });
  };
  return (
    <div>
        <h3>Filter Tasks</h3>
        <div>
            <label>Status:</label>
            <select value={status} onChange={(e) => handleStatusChange(e.target.value as TaskStatus | 'all')}>
              <option value="all">All</option>
              <option value="pending">Pending</option>
              <option value="in-progress">In Progress</option>
              <option value="completed">Completed</option>
            </select>
        </div>
        <div>
            <label>Priority:</label>
            <select value={priority} onChange={(e) => handlePriorityChange(e.target.value as 'low' | 'medium' | 'high' | 'all')}>
              <option value="all">All</option>
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
        </div>

        <button type="submit">Search</button>
        
    </div>
  );
}
