const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hi from back end");
});

app.listen(9000, () => {
  console.log("Running in port 9000");
});
