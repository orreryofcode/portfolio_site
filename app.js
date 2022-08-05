const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const app = express();
app.use(express.static("public"));
app.set("view engine", "ejs");

// const posts = [
//   {
//     title: "My Start In Web Development",
//     body: ["", ""],
//   },
// ];

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/works", (req, res) => {
  res.render("works");
});

// app.get("/blog", (req, res) => {
//   res.render("blog", { blogContent: posts });
// });

// app.get("/blog/:postTitle", (req, res) => {
//   const requestedTitle = req.params.postTitle;

//   posts.forEach((post) => {
//     const storedTitle = post.title;

//     if (storedTitle === requestedTitle) {
//       res.render("post", { title: post.title, body: post.body });
//     }
//   });
// });

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
