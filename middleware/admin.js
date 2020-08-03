module.exports = (req, res, next) => {
  // Get token from header
  if (req.user.isAdmin) {
    next();
  } else {
    return res.status(401).json({ msg: 'Authorization denied' });
  }
};
