// routes/taskRoutes.js

const express = require('express');
const { createTask, getTasks, updateTask, deleteTask } = require('../controllers/taskController');
const { authenticateUser } = require('../middlewares/authMiddleware');
const router = express.Router();

// @route   POST /api/tasks
// @desc    Create a new task
// @access  Private
router.post('/', authenticateUser, createTask);

// @route   GET /api/tasks
// @desc    Get all tasks for the logged-in user
// @access  Private
router.get('/', authenticateUser, getTasks);

// @route   PUT /api/tasks/:id
// @desc    Update a task by ID
// @access  Private
router.put('/:id', authenticateUser, updateTask);

// @route   DELETE /api/tasks/:id
// @desc    Delete a task by ID
// @access  Private
router.delete('/:id', authenticateUser, deleteTask);

module.exports = router;
