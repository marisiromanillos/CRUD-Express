const express = require("express");
const router = express.Router();

router.delete("/character/:id", (req, res) => {
  const id = Number(req.params.id);

  const indexOf = req.simpsons.findIndex((item) => {
    return item.id === id;
  });
  if (indexOf < 0) {
    res.send({ status: 0, reason: "id not found" });
  }

  req.simpsons.splice(indexOf, 1);

  res.send({ satus: 1 });
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
