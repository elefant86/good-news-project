const checkSession = (req, res, next) => {
  if (req.session?.userid) {
    res.locals.user = {
      name: req.session.userName,
      id: req.session.userid,
    };
    return next();
  }
  return res.redirect('/');
};

const checkLogin = (req, res, next) => {
  if (req.session.userid) {
    return res.redirect('/');
  }
  next();
};

module.exports = {
  checkSession,
  checkLogin,
};
