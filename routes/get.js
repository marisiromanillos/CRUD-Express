const express = require("express");
const router = express.Router();

// gets all the characters
router.get("/characters", (req, res) => {
  res.send(req.simpsons);
});

// get a single character
router.get("/character/:id", (req, res) => {
  // create simpsons copy
  const _simpson = [...req.simpsons];
  const character = _simpson.find((char) => {
    return char.id === Number(req.params.id);
  });
  res.send(character);
});

module.exports = router;
