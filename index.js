const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");

mongoose.connect(process.env.MONGO_URL, { useNewUrlParse: true }, () => {
  console.log("Connected to MongoDB");
});

app.listen(8800, () => {
  console.log("Backend server Running in PORT 8080");
});
