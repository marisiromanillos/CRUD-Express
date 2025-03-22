const express = require("express");
const router = express.Router();

router.patch("/character/:id", (req, res) => {
  console.log("Received body:", req.body); // Debug: log the request body
  const _simpsons = [...req.simpsons];
  const id = Number(req.params.id);

  const index = _simpsons.findIndex((character) => character.id === id);

  if (index === -1) {
    return res.status(404).json({ message: "character not found" });
  }

  const updatedCharacter = { ..._simpsons[index], ...req.body };

  _simpsons[index] = updatedCharacter;
  simpsons = _simpsons;
  console.log(simpsons);

  res.status(202).json({
    message: "character updated",
    character: updatedCharacter,
  });
});

module.exports = router;
