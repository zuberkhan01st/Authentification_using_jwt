const express = require('express');
const authController = require('../controllers/authController');

const router = express.Router();

// Root route to check server status
router.get('/', (req, res) => {
    return res.send("Server is working!");
});

// Route for login page
router.get('/login', (req, res) => res.render('login'));

// Route for register page
router.get('/register', (req, res) => res.render('register'));

// Handle register form submission
router.post('/register', authController.register);

// Handle login form submission
router.post('/login', authController.login);

// Logout route
router.get('/logout', authController.logout);

module.exports = router;
