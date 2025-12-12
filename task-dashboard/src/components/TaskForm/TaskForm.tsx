import { useState} from "react";
import { TaskFormProps } from "../types/index";
import { validateDueDate, validateTitle } from "../../utils/taskUtils";

export function TaskForm({ onSubmit }: TaskFormProps) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [priority, setPriority] = useState<'low' | 'medium' | 'high'>('medium');
  const [status, setStatus] = useState<'pending' | 'in-progress' | 'completed'>('pending');
  const [errors, setErrors] = useState({ title: '', dueDate: '' });




  const handleSubmit = (e:React.FormEevent) => {
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
        <div></div>
    </form>
  )

}

