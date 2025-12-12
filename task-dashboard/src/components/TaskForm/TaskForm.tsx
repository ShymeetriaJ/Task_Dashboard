import { useState} from "react";

export function TaskForm({ onSubmit }: TaskFormProps) {
  const [title, setTitle] = useState('');


  const handleSubmit = (e:React.FormEevent) => {
    e.preventDefault();
  }

}

