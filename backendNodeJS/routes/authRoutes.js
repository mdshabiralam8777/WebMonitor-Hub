// routes/authRoutes.js

const express = require('express');
const { signup, login } = require('../controllers/authController');
const router = express.Router();

// @route   POST /api/auth/signup
// @desc    Register a new user
// @access  Public
router.post('/signup', signup);

// @route   POST /api/auth/login
// @desc    Authenticate user and return JWT token
// @access  Public
router.post('/login', login);

module.exports = router;
