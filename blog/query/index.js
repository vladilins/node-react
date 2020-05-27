const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(bodyParser.json());
app.use(cors());

const posts = {};
const comments = {};

app.get("/posts", (req, res) => {});

app.post("/events", (req, res) => {});

app.listen(port, () => console.log(`Example app listening on port 4002!`));
