const express = require("express");
const app = express();
const port = 3000;
const { randomBytes } = require("crypto");
const bodyParser = require("body-parser");

app.use(bodyParser.json());

app.get("/posts", (req, res) => {
  res.send(posts);
});

app.post("/posts", function (req, res) {
  const id = randomBytes(4).toString("hex");
  const { title } = req.body;
  posts[id] = {
    id,
    title,
  };
  res.send(posts[id]);
});
app.listen(port, () => console.log(`Example app listening on port port!`));
