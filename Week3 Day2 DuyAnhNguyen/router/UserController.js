const express = require("express");
const router = new express.Router();
const User = require("../model/User");

const passport = require('passport');

router.post("/user/signin", async (req, resp) => {
  try {
    const user = await User.findByEmailAndPsw(
      req.body.email,
      req.body.password
    );
    const jwt = user.genJWT(user);
    resp.setHeader("JWT", jwt);
    req.session.username = user.username; 
    // resp.render('index.ejs', {name: 'dan'});
    resp.redirect(200, '/index');
    console.log('success')
    // resp.send({  errorMsg: "Successfully sign in", redirect: "/index" });
 
  } catch (e) {
    // 401: Unauthorized
    resp.status(401);
    resp.send({  errorMsg: e.message, redirect: "/login"});
  }
});

router.get("/login", async (req, resp) => {
  // try {
  //   const user = await User.findByEmailAndPsw(
  //     req.body.email,
  //     req.body.password
  //   );

  //   req.session.username = user.username;
  //   resp.send({  errorMsg: "", redirect: "/item" });
  // } catch (e) {
  //   // 401: Unauthorized
  //   resp.status(401);
  //   resp.send({  errorMsg: e.message, redirect: "/login.html"});
  // }
  resp.render('login.ejs')
});

router.post('/login', passport.authenticate('local', {
  successRedirect: '/index',
  failureRedirect: '/login',
  failureRedirect: true
}))

// router.get('/index', (req, res) => {
//   res.render('index.ejs', {name: req.user.name})
// })

router.post("/user/signup", async (req, resp) => {
  const user = new User(req.body);
  user
    .save()
    .then((data) => {
      resp.status(201);
     
      resp.send('success');
    })
    .catch((e) => {
      console.log(e);
      resp.status(400);
      resp.send(e);
    });
});

module.exports = { UserRouter: router };
