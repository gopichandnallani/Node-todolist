var express = require("express");
var app = express();
var bodyParser = require('body-parser');
require("dotenv").config();

app.use(bodyParser.json());

const PORT = process.env.PORT;
app.listen(PORT, (req, res) => {
  console.log(`Server running on port ${PORT} `);
});

const data = require("../todo-project/service/routers");

app.use("/", data);