const router = require("express").Router();
// Here this allow me to export to all my files.

router.get("/", (req, res) => {
  res.send("This is the users page");
});
module.exports = router;
