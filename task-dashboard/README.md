# Project Title: 
SBA React Task Management Dashboard


# Date Completed: 
December 11, 2025

# Project Description: 
 
In this assessment, I applied the skills I developed throughout my React training to build a functional, real-world dashboard application. This project tested my understanding of React components, state management, TypeScript integration, form handling, and component composition.

# Links, Usage, and Instructions:

Adding a New Task

Fill out the form fields: Title (required), Description, Due Date (required), Priority, and Status
Click the "Add Task" button to create the task
The form will clear automatically and your task will appear in the list below

Viewing Tasks

All your tasks are displayed in the "Your Tasks" section
Each task shows its title, description, priority, and current status
Use the "Sort by" dropdown to organize tasks by Priority or Status

Filtering Tasks

Use the Status dropdown to show only Pending, In Progress, or Completed tasks
Use the Priority dropdown to filter by Low, Medium, or High priority
Select "All" in either dropdown to remove that filter

Updating Task Status

Click the status dropdown next to any task
Select the new status (Pending, In Progress, or Completed)
The change saves automatically

Deleting Tasks

Click the "Delete" button next to any task to remove it permanently
The task will disappear immediately from your list

Data Persistence

All tasks are automatically saved to your browser's local storage
Your tasks will remain even after closing the browser or refreshing the page

# My process:

My process for this application was 

# My reflection:
I implemented the React and TypeScript features by creating interfaces and components. Doing so made my code reusable and reliable. The whole point of writing code is to make it reusable. Typscript provided type safety by defining interface for my data structure and component props. Typescripts compile-time checks and React's runtime behavior ensured that my features worked together in a reliable fashion throughout the entire application. My goal was to implement a top-down data flow within this application. React's declarative rendering with JSX was a helpful tool in this process utilizing it to control components to manage form inputs.  
It was challenging trying to figure which components to import to other components and also how to integrate everything into the dashboard. Typescript is very specific and I had a lot of swiggly lines to correct. This was very time consuming and frustrating. I am still trying to figure out css styling in React. However, I did learn something new upon researching. You can reference the form and the first div or the form and the first div then the second div. I think this will be handy once I fully understand it. I use it on this application.
I managed state by storing all tasks and filters in the Dashboard component using React's useState hook, then passed that data down to child components as props, providing callback functions to update the state when a user interacts with my application. I used React's component-based architecture to break the user interface into reusable pieces (Dashboard, TaskForm, TaskFilter, TaskList, TaskItem), with each component managing its own state using the useState hook and communicating through props.





# Acknowledgments:
My classmate Shakira helped me with resources that are still helping my understanding. My classmate Javon's code helped me dig into more research about the filter functionality. I watched a couple of videos from class and office hours for code examples and understanding. Youtube: Webstylepress, Bro Code, Code Stoic and dozens of other youtube channels.


# Resources:
learnjavascript.online 
https://react.dev/reference/react/useState
https://react.dev/reference/react/useCallback
https://devhints.io/reac
stackoverflow.com/sort-an-array
Discord group

# Troubleshooting:

 