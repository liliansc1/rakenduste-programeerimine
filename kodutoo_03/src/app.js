import express from 'express';

export const app = express();

app.use(express.json());

let tasks = [
  { id: 1, title: 'Learn Node.js', completed: true },
  { id: 2, title: 'Learn Express', completed: false },
];

// Request logging
app.use((req, res, next) => {
  console.log(req.method, req.url);
  next();
});

// Health
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});

// GET tasks + completed filter
app.get('/api/tasks', (req, res) => {
  const { completed } = req.query;

  if (completed === undefined) {
    return res.json(tasks);
  }

  if (completed !== 'true' && completed !== 'false') {
    return res.status(400).json({ error: 'Invalid completed value' });
  }

  const value = completed === 'true';

  res.json(tasks.filter((task) => task.completed === value));
});

// GET one task
app.get('/api/tasks/:id', (req, res) => {
  const id = Number(req.params.id);
  const task = tasks.find((task) => task.id === id);

  if (!task) {
    return res.status(404).json({ error: 'Task not found' });
  }

  res.json(task);
});

// POST
app.post('/api/tasks', (req, res) => {
  const { title } = req.body;

  if (typeof title !== 'string' || !title.trim()) {
    return res.status(400).json({ error: 'Valid title is required' });
  }

  const task = {
    id: tasks.length ? Math.max(...tasks.map((task) => task.id)) + 1 : 1,
    title: title.trim(),
    completed: false,
  };

  tasks.push(task);

  res.status(201).json(task);
});

// PATCH
app.patch('/api/tasks/:id', (req, res) => {
  const id = Number(req.params.id);
  const task = tasks.find((task) => task.id === id);

  if (!task) {
    return res.status(404).json({ error: 'Task not found' });
  }

  const { title, completed } = req.body;

  if (
    (title !== undefined &&
      (typeof title !== 'string' || !title.trim())) ||
    (completed !== undefined && typeof completed !== 'boolean')
  ) {
    return res.status(400).json({ error: 'Invalid update' });
  }

  if (title !== undefined) task.title = title.trim();
  if (completed !== undefined) task.completed = completed;

  res.json(task);
});

// DELETE
app.delete('/api/tasks/:id', (req, res) => {
  const id = Number(req.params.id);
  const index = tasks.findIndex((task) => task.id === id);

  if (index === -1) {
    return res.status(404).json({ error: 'Task not found' });
  }

  tasks.splice(index, 1);

  res.status(204).send();
});

// Unknown route
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

// Error handler
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: 'Internal server error' });
});