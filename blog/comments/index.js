const express = require("express");
const app = express();
const port = 4001;
const bodyParser = require("body-parser");
const { randomBytes } = require("crypto");

app.use(bodyParser.json());

const commentsByPostsId = {};

app.get("posts/:id/comments", (req, res) => {
  res.send(commentsByPostsId[req.params.id] || []);
});

app.post("/posts/:id/comments", function (req, res) {
  const commentId = randomBytes(4).toString("hex");
  const { content } = req.body;

  const comments = commentsByPostsId[req.params.id] || [id];

  comments.push({ id: commentId, content });

  commentsByPostsId[req.params.id] = comments;

  res.status(201).send(comments);
});

app.listen(port, () => console.log(`Example app listening on port port!`));
