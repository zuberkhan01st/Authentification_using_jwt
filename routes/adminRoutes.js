const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const authenticate = require('../middleware/authMiddleware');
const users = [
    {
      id: 1,
      username: 'admin',
      password: 'password123',
      role: 'admin'
    },
    {
      id: 2,
      username: 'user',
      password: 'password456',
      role: 'user'
    }
];

router.get('/', (req, res) => {
    res.send("Welcome to the Admin Route!");
  });

// Middleware to verify token
const authenticateToken = (req, res, next) => {
  // Get the token from the Authorization header
  const token = req.header('Authorization') && req.header('Authorization').split(' ')[1];
  
  if (!token) {
    return res.status(403).send('Access Denied: No token provided');
  }

  // Verify the token using the secret key
  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).send('Access Denied: Invalid token');
    }

    // Attach the user information to the request object
    req.user = user;
    next(); // Proceed to the next middleware or route handler
  });
};

// Route to login and generate token
router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const user = users.find(u => u.username === username && u.password === password);

    if (!user) {
        return res.status(401).send('Invalid username or password');
    }

    // Create a JWT token for the authenticated user
    const token = jwt.sign(
        { id: user.id, username: user.username, role: user.role },
        process.env.JWT_SECRET, // Secret key from .env file
        { expiresIn: '1h' } // Token expiry time (optional)
    );

    res.json({ token });
});

// Dashboard route (protected)
router.get('/dashboard', authenticate, async (req, res) => {
    // This route is now protected, and only users with a valid token can access it
    console.log("Here is the admin dashboard route");
    res.send('Welcome to the Admin Dashboard!');
});

module.exports = router;
