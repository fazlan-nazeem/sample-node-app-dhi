const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// In-memory data store (for demo purposes)
let tasks = [
  { id: 1, title: 'Learn Node.js', completed: false },
  { id: 2, title: 'Build an API', completed: false }
];

// GET - Homepage
app.get('/', (req, res) => {
  res.json({ 
    message: 'Welcome to the Task API',
    endpoints: {
      'GET /tasks': 'Get all tasks',
      'GET /tasks/:id': 'Get a specific task',
      'POST /tasks': 'Create a new task',
      'PUT /tasks/:id': 'Update a task',
      'DELETE /tasks/:id': 'Delete a task'
    }
  });
});

// GET - Get all tasks
app.get('/tasks', (req, res) => {
  res.json(tasks);
});

// GET - Get a specific task
app.get('/tasks/:id', (req, res) => {
  const task = tasks.find(t => t.id === parseInt(req.params.id));
  if (!task) {
    return res.status(404).json({ error: 'Task not found' });
  }
  res.json(task);
});

// POST - Create a new task
app.post('/tasks', (req, res) => {
  const { title } = req.body;
  if (!title) {
    return res.status(400).json({ error: 'Title is required' });
  }
  
  const newTask = {
    id: tasks.length > 0 ? Math.max(...tasks.map(t => t.id)) + 1 : 1,
    title,
    completed: false
  };
  
  tasks.push(newTask);
  res.status(201).json(newTask);
});

// PUT - Update a task
app.put('/tasks/:id', (req, res) => {
  const task = tasks.find(t => t.id === parseInt(req.params.id));
  if (!task) {
    return res.status(404).json({ error: 'Task not found' });
  }
  
  const { title, completed } = req.body;
  if (title !== undefined) task.title = title;
  if (completed !== undefined) task.completed = completed;
  
  res.json(task);
});

// DELETE - Delete a task
app.delete('/tasks/:id', (req, res) => {
  const index = tasks.findIndex(t => t.id === parseInt(req.params.id));
  if (index === -1) {
    return res.status(404).json({ error: 'Task not found' });
  }
  
  tasks.splice(index, 1);
  res.status(204).send();
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

// Error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

module.exports = app;