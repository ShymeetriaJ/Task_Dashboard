import type { Task, TaskStatus } from '../../types/index';

interface TaskItemProps {
  task: Task;
  onStatusChange: (taskId: string, newStatus: TaskStatus) => void;
  onDelete: (taskId: string) => void;
}

export function TaskItem({ task, onStatusChange, onDelete }: TaskItemProps) {
  return (
    <li>
      <h4>{task.title}</h4>
      <p>{task.description}</p>
      <p>Priority: {task.priority}</p>
      <p>Status: {task.status}</p>
      
      <div>
        <label>Change Status:</label>
        <select 
          value={task.status} 
          onChange={(e) => onStatusChange(task.id, e.target.value as TaskStatus)}
        >
          <option value="pending">Pending</option>
          <option value="in-progress">In Progress</option>
          <option value="completed">Completed</option>
        </select>
      </div>
      
      <button onClick={() => onDelete(task.id)}>Delete</button>
    </li>
  );
}