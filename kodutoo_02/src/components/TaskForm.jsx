import { useState } from 'react';

export function TaskForm({ onAddTask }) {
  const [title, setTitle] = useState('');
  const [error, setError] = useState('');

  function handleSubmit(event) {
    event.preventDefault();

    const trimmedTitle = title.trim();

    if (!trimmedTitle) {
      setError('Title is required');
      return;
    }

    onAddTask(trimmedTitle);
    setTitle('');
    setError('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">Task title: </label>

      <input
        id="title"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />

      <button type="submit">Add task</button>

      {error && <p>{error}</p>}
    </form>
  );
}