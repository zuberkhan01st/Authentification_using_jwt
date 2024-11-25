const jwt = require('jsonwebtoken');

function authenticate(req, res, next) {
  if (!req.session.user) {
    return res.redirect('/login');
  }
  next();
}

function authorize(role) {
  return (req, res, next) => {
    if (req.session.user.role !== role) {
      return res.status(403).render('error', { message: 'Access Denied' });
    }
    next();
  };
}

module.exports = { authenticate, authorize };
