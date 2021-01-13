const express = require("express");

const app = express();

app.get("/", function (req, res) {
  res.end("You're a nive hooman!");
});

app.get("/lmao", function (req, res) {
  res.end("Fuck yourself");
});

app.listen(3000);
console.log("listening at http://localhost:3000");
