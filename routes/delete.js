const express = require("express");
const router = express.Router();

router.delete("/character/:id", (req, res) => {
  const _simpson = [...req.simpsons]; // Create a copy of the simpsons array
  const id = Number(req.params.id); // Get the ID from URL parameters

  const index = _simpson.findIndex((character) => character.id === id);

  if (index === -1) {
    return res.status(404).json({ message: "Character not found" });
  }

  _simpson.splice(index, 1); // Remove the character at found index
  simpsons = _simpson; // Update the original array

  res.status(200).json({
    message: "Character deleted successfully",
    deletedId: id,
    remainingCharacters: simpsons,
  });
});

module.exports = router;
