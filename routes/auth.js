const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("Auth for users here ");
});
module.exports = router;
