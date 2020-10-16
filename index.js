const exprees = require("express");
const app = exprees();

app.get("/", function (req, res) {
  return res.send("Hello, world!!!");
});

app.listen(3000, function () {
  console.log("Server running at port 3000");
});
