const express = require("express");
const path = require("path");
const dotenv = require("dotenv").config();

const PORT = process.env.PORT;
const app = express();

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/index.html"));
});

app.get("/works", (req, res) => {
  res.sendFile(path.join(__dirname + "/works.html"));
});

app.listen(PORT || 3000, () => {
  console.log("Server started");
});
