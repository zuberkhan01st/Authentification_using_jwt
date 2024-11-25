const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const path = require('path');
const authRoutes = require('./controllers/authController');
const { connectDB } = require('./config/db');

// Initialize app
const app = express();

// Database connection
connectDB();

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
  secret: 'securekey',
  resave: false,
  saveUninitialized: false,
  store: MongoStore.create({ mongoUrl: process.env.MONGO_URI }),
}));


// Set up EJS as view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Set up static files (e.g., CSS)
app.use(express.static(path.join(__dirname, 'public')));

// Body parser middleware to handle form submissions
app.use(express.urlencoded({ extended: true }));

// Root route to check server status
app.get('/', (req, res) => {
    return res.send("Server is working!");
});

app.use('/', authRoutes);

// Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
