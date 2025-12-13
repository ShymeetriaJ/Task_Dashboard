import { useState} from "react";
import type { TaskFormProps } from "../../types/index";
import { validateDueDate, validateTitle } from "../../utils/taskUtils";

export function TaskForm({ onSubmit }: TaskFormProps) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [priority, setPriority] = useState<'low' | 'medium' | 'high'>('medium');
  const [status, setStatus] = useState<'pending' | 'in-progress' | 'completed'>('pending');
  const [errors, setErrors] = useState({ title: '', dueDate: '' });

  const handleSubmit = (e:React.FormEvent) => {
    e.preventDefault();

    const titleError = !validateTitle(title) ? 'Title required' : '';
    const dateError = !validateDueDate(dueDate) ? 'Date required' : '';

    if (titleError || dateError) {
        setErrors({ title: titleError, dueDate: dateError});
        return;
    }
    // submit the valid form
    onSubmit({title, description, dueDate, priority, status});

    //  clear the form
    setTitle('');
    setDescription('');
    setDueDate('');
    setPriority('medium');
    setStatus('pending');
    setErrors({ title: '', dueDate: '' });
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <div>
          <label>Title:</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)}/>
          {errors.title && <span>{errors.title}</span>}
        </div>
        <div>
          <label>Description:</label>
          <textarea 
            value={description} 
            onChange={(e) => setDescription(e.target.value)} />
        </div>
        <div>
          <label>Due Date:</label>
          <input 
          type="date" 
          value={dueDate} 
          onChange={(e) => setDueDate(e.target.value)} />
        {errors.dueDate && <span>{errors.dueDate}</span>}
        </div>

        <div>
          <label>Priority:</label>
          <select value={priority} onChange={(e) => setPriority(e.target.value as 'low' | 'medium' | 'high')}>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
          </select>
        </div>
        <div>
        <label>Status:</label>
        <select value={status} onChange={(e) => setStatus(e.target.value as 'pending' | 'in-progress' | 'completed')}>
          <option value="pending">Pending</option>
          <option value="in-progress">In Progress</option>
          <option value="completed">Completed</option>
          </select>
        </div>
        <button type="submit">Add Task</button>
    </div>
    </form>  
  );
}

