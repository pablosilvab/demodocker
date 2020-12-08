const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.status(200).send({
    message: "Hello World",
  });
});

app.use(require("./books"))

module.exports = app;
