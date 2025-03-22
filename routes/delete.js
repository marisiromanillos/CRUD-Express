const express = require("express");
const router = express.Router();

router.delete("/character/:id", (req, res) => {
  const _simpsons = [...req.simpsons];
  const index = Number(req.params.id);
  if (index === -1) {
    return res.status(404).send.json({ message: "not character found" });
  }
  _simpsons.splice(index, 1);
  simpsons = _simpsons;

  res.status(202).json({
    message: "sucessful deteled id",
  });
});

router.delete("/pop/character", (req, res) => {
  const _simpsons = [...req.simpsons];
  _simpsons.pop();
  simpsons = _simpsons;
  res.status(202).json({
    message: "remove the last element of the array",
    remainingCharacters: simpsons,
  });
});

module.exports = router;
