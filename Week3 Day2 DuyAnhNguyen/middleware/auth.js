const auth = (req, resp, next) => {
  const protectList = new Set()
  protectList.add('/item')
  console.log('this being invoked'+ req.url)
  if (protectList.has(req.url) && !req.session.username) {
    resp.redirect("/login.html");
  } else {
    next();
  }

};

module.exports = auth;
