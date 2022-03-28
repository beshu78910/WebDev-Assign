const path = require("path");
const express = require("express");
const app = express();
const bodyParser = require('body-parser');

const publicPath = path.join(__dirname, "/public");
require("./db");

const { UserController } = require("./controller/UserController");
// const { Song } = require("./model/Songs");
// const { Artist } = require("./model/Artists");

// app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodyParser.json());
app.use(express.static(publicPath));
app.set("view engine", "hbs");
app.use(UserController);

// app.use('/registers', UserController);
// console.log(UserController);
module.exports = app;
