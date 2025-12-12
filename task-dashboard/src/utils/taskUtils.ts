import { Task, TaskStatus } from '../types/index'

// Date formatting utility function
export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString();
}
export function isOverdue(dueDate: string): boolean {
  const taskDate = new Date(dueDate);
  const currentDate = new Date();
  return taskDate < currentDate;
}
// Validation utility functions
export function validateTitle(title: string): boolean {
  return title.trim().length > 0;
}
export function validateDueDate(date: string): boolean {
  if (!date) return false;
  const taskDate = new Date(date);
  return !isNaN(taskDate.getTime());
}
export function validateTask(task: { title: string; description: string; dueDate: string }): boolean {
  return validateTitle(task.title);
}
// Filter utility functions
export function filterByStatus(tasks: Task[], status: TaskStatus | 'all'): Task[] {
  if (status === 'all') {
    return tasks;
  }
  return tasks.filter(task => task.status === status);
}

export function filterByPriority(tasks: Task[], priority: 'low' | 'medium' | 'high' | 'all'): Task[] {
  if (priority === 'all') {
    return tasks;
  }
  return tasks.filter(task => task.priority === priority);
}