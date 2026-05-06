const express = require("express");
const router = express.Router();

router.post("/apply", (req, res) => {
  console.log("🔥 APPLY HIT:", req.body);

  res.status(200).json({
    message: "Application received successfully",
    data: req.body,
  });
});

module.exports = router;