import React, ( useState) from "react";
import { TaskFilterProps } from "../../types";

export function TaskFilter({ onFilterChange }: TaskFilterProps) {
  const [status, setStatus] = useState<TaskStatus | 'all'>('all');
  const [priority, setPriority] = useState<'low' | 'medium' | 'high' | 'all'>('all');

  
}