const express = require('express');
const dotenv = require('dotenv');
const adminRoutes = require('./routes/adminRoutes');
const app = express();

// Middleware to parse JSON request bodies
app.use(express.json());

// Load environment variables from .env file
dotenv.config();

// Default route to check server status
app.get('/', async (req, res) => {
  res.send("Working!!!");
});

// Admin routes
app.use('/admin', adminRoutes);

// Start the server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
