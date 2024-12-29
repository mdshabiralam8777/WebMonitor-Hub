// controllers/taskController.js

const Task = require('../models/taskModel');

// @desc    Create a new task
// @route   POST /api/tasks
// @access  Private
const createTask = async (req, res) => {
    try {
        const { title, description } = req.body;

        // Create a new task
        const task = new Task({
            title,
            description,
            user: req.user.id,
        });

        await task.save();

        res.status(201).json({
            message: 'Task created successfully',
            task,
        });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

// @desc    Get all tasks for the logged-in user
// @route   GET /api/tasks
// @access  Private
const getTasks = async (req, res) => {
    try {
        const tasks = await Task.find({ user: req.user.id });
        res.status(200).json(tasks);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

// @desc    Update a task by ID
// @route   PUT /api/tasks/:id
// @access  Private
const updateTask = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, description, completed } = req.body;

        // Find and update the task
        const task = await Task.findOneAndUpdate(
            { _id: id, user: req.user.id },
            { title, description, completed },
            { new: true }
        );

        if (!task) {
            return res.status(404).json({ message: 'Task not found' });
        }

        res.status(200).json({
            message: 'Task updated successfully',
            task,
        });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

// @desc    Delete a task by ID
// @route   DELETE /api/tasks/:id
// @access  Private
const deleteTask = async (req, res) => {
    try {
        const { id } = req.params;

        // Find and delete the task
        const task = await Task.findOneAndDelete({ _id: id, user: req.user.id });

        if (!task) {
            return res.status(404).json({ message: 'Task not found' });
        }

        res.status(200).json({ message: 'Task deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

module.exports = { createTask, getTasks, updateTask, deleteTask };
