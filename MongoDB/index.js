const app = require("./app");
const port = 3000;

app.listen(port, () => {
  console.log("server is up on " + port);
});

// app.get('/songs', (req, res) => {
//   res.send('we are on home');
// })