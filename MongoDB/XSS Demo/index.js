const express = require("express");
const app = express();
// const validator = require('validator');
app.listen(3000, () => {
  console.log("server is up on port 3000");
});

app.use(express.json());

app.get("/index", (req, resp) => {
  resp.setHeader("Content-Security-Policy", "script-src http://localhost:3000")
  // resp.setHeader("Content-Security-Policy", "script-src none")
  resp.sendFile("index.html", { root: __dirname });
});

app.get("/post", (req, resp) => {
  resp.setHeader("Content-Type", "text/html");
  // resp.setHeader("Content-Security-Policy", "script-src http://localhost:3000")
  resp.send(`welcome, ${req.query.input}`);
});
