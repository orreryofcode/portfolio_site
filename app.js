const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const app = express();
app.use(express.static("public"));
app.set("view engine", "ejs");

const PORT = process.env.PORT;

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/works", (req, res) => {
  res.render("works");
});

app.listen(PORT || 3000, () => {
  console.log("Server started");
});

module.exports = app