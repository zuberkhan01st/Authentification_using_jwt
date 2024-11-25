const express = require('express');
const bcrypt = require('bcrypt');
const User = require('../models/User');
const router = express.Router();

// Render login page
router.get('/login', (req, res) => res.render('login'));

// Render register page
router.get('/register', (req, res) => res.render('register'));

// Handle registration
router.post('/register', async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const user = new User({ username, email, password });
    await user.save();
    req.session.user = user;
    res.redirect('/dashboard');
  } catch (err) {
    res.render('error', { message: 'Error registering user.' });
  }
});

// Handle login
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.render('error', { message: 'Invalid credentials' });
    }
    req.session.user = user;
    res.redirect('/dashboard');
  } catch (err) {
    res.render('error', { message: 'Error logging in.' });
  }
});

// Dashboard
router.get('/dashboard', (req, res) => {
  if (!req.session.user) return res.redirect('/login');
  res.render('dashboard', { user: req.session.user });
});

// Logout
router.get('/logout', (req, res) => {
  req.session.destroy();
  res.redirect('/login');
});

module.exports = router;
