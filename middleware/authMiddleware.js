const jwt = require('jsonwebtoken');

const authenticate = (req, res, next) => {
  const token = req.headers['authorization']?.split(' ')[1];  // Get the token from Authorization header
  
  if (!token) {
    return res.status(401).json({ message: 'Access denied. No token provided.' });
  }
  
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);  // Verify the JWT
    req.user = decoded;  // Attach the decoded user data to the request object
    next();  // Proceed to the next middleware or route
  } catch (err) {
    return res.status(400).json({ message: 'Invalid token.' });
  }
};

module.exports = authenticate;
