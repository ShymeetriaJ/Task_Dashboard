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
