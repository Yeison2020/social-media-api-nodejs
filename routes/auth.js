const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("Auth for Users here ");
});
module.exports = router;
