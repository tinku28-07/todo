const express = require('express');
const app = express()
const port = process.env.PORT || 3000

//const dotenv = require('dotenv');
require('dotenv').config();

app.use(express.json());

let tasks = [
    {id: 1, title: 'Task 1', completed: false},
    {id: 2, title: 'Task 2', completed: true},
    {id: 3, title: 'Task 3', completed: false}  
];

app.get("/api/tasks", (req, res) => {
    res.json(tasks);
});

app.post("/api/tasks", (req, res) => {
    const newTask = {
        id : tasks.length + 1,
        title: req.body.title,
        completed: false
    };
    tasks.push(newTask);
    res.status(201).json(newTask);
});

app.delete("/api/tasks/:id", (req, res) => {
    const taskId = parseInt(req.params.id);
    tasks = tasks.filter(task => task.id !== taskId);
    res.status(200).json({ message: 'Task deleted successfully' });
});

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})