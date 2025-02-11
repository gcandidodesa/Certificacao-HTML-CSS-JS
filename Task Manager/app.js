//USE NPM PACKAGE better-sqlite3

const express = require('express');
const db = require('./database');
const app = express();
const port = 3000;

app.use(express.json());

app.listen(port, () => {
 console.log(`App is running on port ${port}`);
});

app.get("/tasks/:id", (req, res) => {
  const taskId = req.params.id;
  const task = db.prepare('SELECT * FROM tasks WHERE id = ?').get(taskId);

  if (!task) {
    return res.status(404).json({ error: "Task not found" });
  }

  res.status(200).json({
    task: task,
  });
});

app.post("/tasks", (req, res) => {
  const { title, description } = req.body;
  if (!title) {
    return res.status(400).json({ error: "Title is required" });
  }

  const stmt = db.prepare("INSERT INTO tasks (title, description, status) VALUES (?, ?, 'pending')");
  const result = stmt.run(title, description);

  res.status(201).json({ taskId: result.lastInsertRowid, message: "Task added" });
});

app.put("/tasks/:id", (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  if (status !== "completed" && status !== "pending") {
    return res.status(400).json({ error: "Invalid status" });
  }

  const stmt = db.prepare("UPDATE tasks SET status = ? WHERE id = ?");
  const result = stmt.run(status, id);

  if (result.changes === 0) {
    return res.status(404).json({ error: "Task not found" });
  }

  res.status(200).json({ message: `Task with id ${id} updated successfully.`, updatedStatus: status });
});