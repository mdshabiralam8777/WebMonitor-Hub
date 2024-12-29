// middlewares/authMiddleware.js

const jwt = require('jsonwebtoken');

// Middleware to authenticate user based on JWT token
const authenticateUser = (req, res, next) => {
    const token = req.header('Authorization');

    // Check if token exists
    if (!token) {
        return res.status(401).json({ message: 'Access denied. No token provided.' });
    }

    try {
        // Verify token
        const decoded = jwt.verify(token.replace('Bearer ', ''), process.env.JWT_SECRET);
        req.user = decoded; // Add user info to request object
        next();
    } catch (error) {
        res.status(400).json({ message: 'Invalid token.' });
    }
};

module.exports = { authenticateUser };
