const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const string_Url = process.env.MONGO_URL;
mongoose.connect(string_Url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

app.listen(8800, () => {
  console.log("Backend server Running in PORT 8080");
});
