module.exports = (roles) => {
    return (req, res, next) => {
      const userRoles = req.user.roles;
      if (!roles.some((role) => userRoles.includes(role))) {
        return res.status(403).render('error', { message: 'Forbidden access' });
      }
      next();
    };
  };
  