const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const userRouter = require("./routes/users");
// This way I fixed the error of requesting for string variable
const newLocal = `"${process.env.MONGO_URL}"`;
mongoose.connect(
  newLocal,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("Connected to MongoDB");
  }
);

// middleware

app.use(express());
app.use(helmet());
app.use(morgan("common"));

// Always check each of the letters here

app.use("/api/users", userRouter);

// Home page here The right way to
app.get("/", (req, res) => {
  res.send("Welcome home page here ");
});

app.listen(8800, () => {
  console.log("Backend server Running in PORT 8080");
});
