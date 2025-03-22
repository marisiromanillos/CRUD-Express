const express = require("express");
const router = express.Router();

router.post("/character", (req, res) => {
  // destructure the content
  const { character, characterDirection, quote } = req.body;

  if (
    !character ||
    !characterDirection ||
    !quote ||
    typeof character !== "string" ||
    typeof characterDirection !== "string" ||
    typeof quote !== "string"
  ) {
    res.send({ status: 0, reason: "you are missing content" });
    return;
  }
  // generate automatic id
  req.simpsons.push({
    id: Math.round(Math.random() * 1000000),
    character,
    characterDirection,
    quote,
  });
  res.send({ status: 1 });
});

module.exports = router;
