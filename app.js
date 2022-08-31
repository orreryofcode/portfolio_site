const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const app = express();
app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/works", (req, res) => {
  res.render("works");
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
