import {
  getAllTasks,
  getTaskById,
  getCompletedTasks,
} from './taskFunctions.js';

const tasks = [
  { id: 1, title: 'Learn Node.js', completed: true },
  { id: 2, title: 'Learn Express', completed: false },
];

console.log('All tasks:', getAllTasks(tasks));
console.log('Task 1:', getTaskById(tasks, 1));
console.log('Completed:', getCompletedTasks(tasks));
console.log('Unknown task:', getTaskById(tasks, 99));