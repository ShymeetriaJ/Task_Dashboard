import { useState} from "react";
import { validateDueDate, validateTitle } from "../../utils/taskUtils";

export function TaskForm({ onSubmit }: TaskFormProps) {
  const [title, setTitle] = useState('');


  const handleSubmit = (e:React.FormEevent) => {
    e.preventDefault();

    const titleError = !validateTitle(title) ? 'Title required' : '';
    const dateError = !validateDueDate(dueDate) ? 'Date required' : '';

    if (titleError || dateError) {
        setErrors({ title: titleError, dueDate: dateError});
        return;
    }
  }

}

