const express = require("express");
const path = require("path");
const app = express();
const session = require("express-session");
const { v4: uuidv4 } = require("uuid");
const FileStore = require("session-file-store")(session);
const auth = require("./middleware/auth");
const passport = require('passport');
const flash = require('express-flash')
// const session = require('express-session')

const initializePassport = require('./passport-config')
initializePassport(
  passport,
  email =>  users.find(user => user.email === email),
  id => users.find(user => user.id === id)
)

require("./db");
const { UserRouter } = require("./router/UserController");
const { ItemRouter } = require("./router/ItemController");

const publicPath = path.join(__dirname, "/public");

app.set('view-engine', 'ejs')
app.use(express.json());
app.use(
  session({
    name: "SESSIONID",
    secret: "SECRET KEY",
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 1000 * 60 * 60 * 24 },
    store: new FileStore({ path: path.join(__dirname, "/session") }),
    genid: function (req) {
      return uuidv4(); // use UUIDs for session IDs
    },
    
  })
);

app.use(passport.initialize())
app.use(passport.session())
app.use(auth);

app.use(UserRouter);
app.use(ItemRouter);
app.use(express.static(publicPath));

module.exports = app;
