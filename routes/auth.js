const router = require("express").Router();
const User = require("./models/User/User");

// Register here Please

// Found bug here connecting to DB Mongo

router.post("/register", async (req, res) => {
  const user = await new User({
    username: "enmanuel",
    email: "enmanuel@gmail.com",
    password: "123456",
  });

  await user.save();
  res.send("User saved");
});
module.exports = router;
