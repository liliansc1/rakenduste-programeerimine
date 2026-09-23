import { useState } from 'react';
import { Header } from './components/Header';
import { TaskCard } from './components/TaskCard';
import { TaskForm } from './components/TaskForm';
import { PageSection } from './components/PageSection';
import { Link, Routes, Route } from 'react-router-dom';
import { TasksPage } from './pages/TasksPage';
import { AboutPage } from './pages/AboutPage';

const initialTasks = [
  { id: 1, title: 'Learn JSX', completed: true },
  { id: 2, title: 'Practise React state', completed: false },
  { id: 3, title: 'Build a Node.js API', completed: false },
];

function App() {
  const [tasks, setTasks] = useState(initialTasks);
  const [filter, setFilter] = useState('all');

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'completed') return task.completed;
    if (filter === 'incomplete') return !task.completed;
    return true;
  });

  function addTask(title) {
    const newTask = {
      id: Date.now(),
      title,
      completed: false,
    };

    setTasks((currentTasks) => [...currentTasks, newTask]);
  }

  function toggleTask(id) {
    setTasks((currentTasks) =>
      currentTasks.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  }

  function deleteTask(id) {
    setTasks((currentTasks) =>
      currentTasks.filter((task) => task.id !== id)
    );
  }

  return (
    <div>
      <Header />

      <nav>
        <Link to="/">Home</Link> | <Link to="/tasks">Tasks</Link> |{' '}
        <Link to="/about">About</Link>
      </nav>

      <Routes>
        <Route path="/tasks" element={<TasksPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>

      <TaskForm onAddTask={addTask} />

      <button onClick={() => setFilter('all')}>All</button>
      <button onClick={() => setFilter('completed')}>Completed</button>
      <button onClick={() => setFilter('incomplete')}>Incomplete</button>

      <PageSection title="My tasks">
        {filteredTasks.length === 0 ? (
          <p>No tasks found</p>
        ) : (
          filteredTasks.map((task) => (
            <TaskCard
              key={task.id}
              task={task}
              onToggle={toggleTask}
              onDelete={deleteTask}
            />
          ))
        )}
      </PageSection>
    </div>
  );
}

export default App;