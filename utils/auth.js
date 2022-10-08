const withAuth = (req, res, next) => {
  if (!req.session.loggedIn) {
    req.session.returnTo = req.originalUrl
    res.redirect("/login");
    console.log(req.session)
  } else {
    next();
  }
};

module.exports = withAuth;
