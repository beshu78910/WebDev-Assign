const express = require("express");
const router = new express.Router();

router.get("/index", (req, res) => {
  res.status(200);

  // <h3>Welcome ${req.session.username}</h3>
  res.send(
    `<html>
      <body>
        <h2>Index page</h2>
        <hr/>
        <h3>Welcome ${req.session.username}</h3>
      </body>
    </html>`
  );
});
module.exports = { ItemRouter: router };


// Cookie: SESSIONID={s%3A31d6d71f-916f-4936-a700-84d4fb62f9e7.TGThWzQaC%2FBJnUsyN6RvGGsKzFOYt39DGWUP5cmKeZo}