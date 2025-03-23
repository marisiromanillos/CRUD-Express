const express = require("express");
const router = express.Router();
const asyncMySQL = require("../mysql/dbConnection");
const e = require("express");

// GET all characters

router.get("/characters", async (req, res) => {
  const results = await asyncMySQL(`SELECT * FROM simpsons`);
  if (results.length > 0) {
    res.send({ status: 1, results });
    return;
  }
});

// get character by ID
router.get("/character/:id", async (req, res) => {
  const id = Number(req.params.id);
  if (Number.isNaN(id)) {
    res.send({ status: 0, reason: "Invalid id" });
    return;
  }
  // ask sql for the data
  const results = await asyncMySQL(
    `SELECT quote, name, image, characterDirection FROM simpsons WHERE id = ${id};`
  );

  if (results.length > 0) {
    res.send({ status: 1, results });
    return;
  }
  res.send({ status: 0, reason: "id not found" });
});

module.exports = router;
