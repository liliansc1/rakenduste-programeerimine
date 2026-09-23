import { useEffect, useState } from 'react';
import { getTasks } from '../services/taskApi';

export function TasksPage() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    let active = true;

    getTasks()
      .then((data) => {
        if (active) {
          setTasks(data);
        }
      })
      .catch(() => {
        if (active) {
          setError('Failed to load tasks');
        }
      })
      .finally(() => {
        if (active) {
          setLoading(false);
        }
      });

    return () => {
      active = false;
    };
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (tasks.length === 0) {
    return <p>No tasks found</p>;
  }

  return (
    <div>
      <h2>Tasks Page</h2>

      {tasks.map((task) => (
        <p key={task.id}>
          {task.title} - {task.completed ? 'Completed' : 'Not completed'}
        </p>
      ))}
    </div>
  );
}