const express = require("express");
const app = express();
const port = 4005;
const bodyParser = require("body-parser");
const axios = require("axios");

app.use(bodyParser.json());

app.post("/events", function (req, res) {
  const event = req.body;

  axios.post("http://localhost:4000/events", event);
  axios.post("http://localhost:4001/events", event);
  axios.post("http://localhost:4002/events", event);

  res.send({ status: "OK" });
});

app.listen(port, () => console.log(`Listening on 4005`));
