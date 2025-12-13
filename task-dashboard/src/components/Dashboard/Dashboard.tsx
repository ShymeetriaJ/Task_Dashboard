import React, { useState } from 'react';
import type { Task, TaskStatus } from '../../types/index'
import { TaskFilter } from '../TaskFilter/TaskFilter';
import { TaskList } from '../TaskList/TaskList';
import { TaskForm } from '../TaskForm/TaskForm';

export function Dashboard() {
    const loadTasksFromStorage = (): Task[] => {
        const savedTasks = localStorage.getItem('tasks');
        if (savedTasks) {
            return JSON.parse(savedTasks);
        }
        return [];
    };

    const [tasks, setTasks] = useState<Task[]>(loadTasksFromStorage());
    const [filters, setFilters] = useState<{
        status?: TaskStatus;
        priority?: 'low' | 'medium' | 'high';}>({});

    const saveTasksToStorage = (taskList: Task[]) => {
        localStorage.setItem('tasks', JSON.stringify(taskList));
 };

    const handleAddTask = (taskData: Omit<Task, 'id'>) => {
    const newTask: Task = {
      ...taskData,
      id: `task-${Date.now()}`,
    };

    const updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks);
    saveTasksToStorage(updatedTasks);
  };

    const handleStatusChange = (taskId: string, newStatus: TaskStatus) => {
    const updatedTasks = tasks.map(task => 
      task.id === taskId ? { ...task, status: newStatus } : task
    );
    setTasks(updatedTasks);
    saveTasksToStorage(updatedTasks);
  };

    const handleDelete = (taskId: string) => {
        const updatedTasks = tasks.filter(task => task.id !== taskId);
        setTasks(updatedTasks);
        saveTasksToStorage(updatedTasks);
  };


    const handleFilterChange = (newFilters: { status?: TaskStatus; priority?: 'low' | 'medium' | 'high' }) => {
    setFilters(newFilters);
  };

    const totalTasks = tasks.length;
    const completedTasks = tasks.filter(task => task.status === 'completed').length;
    const pendingTasks = tasks.filter(task => task.status === 'pending').length;

    const filteredTasks = tasks.filter(task => {
    if (filters.status && task.status !== filters.status) return false;
    if (filters.priority && task.priority !== filters.priority) return false;
    return true;
});

    return (
        <div>
      <h1>Task Management Dashboard</h1>

      <div>
        <h2>Statistics</h2>
        <p>Total Tasks: {totalTasks}</p>
        <p>Completed: {completedTasks}</p>
        <p>Pending: {pendingTasks}</p>
      </div>

      <div>
        <h2>Add New Task</h2>
        <TaskForm onSubmit={handleAddTask} />
      </div>

      <div>
        <h2>Filter Tasks</h2>
        <TaskFilter onFilterChange={handleFilterChange} />
      </div>

      <div>
        <h2>Your Tasks</h2>
        <TaskList 
          tasks={filteredTasks} 
          onStatusChange={handleStatusChange} 
          onDelete={handleDelete} 
        />
      </div>
    </div>
    );
}