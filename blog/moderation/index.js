const express = require("express");
const bodyParser = require("body-parser");
const { randomBytes } = require("crypto");
const axios = require("axios");

const app = express();
app.use(bodyParser.json());

app.post("/events", function (req, res) {});

app.listen(4003, () => {
  console.log("Listening on 4003");
});
