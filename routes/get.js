const express = require("express");
const router = express.Router();
const asyncMySQL = require("../mysql/dbConnection");
const e = require("express");

// GET all characters

router.get("/characters", async (req, res) => {
  try {
    const results = await asyncMySQL(`SELECT * FROM simpsons`);
    if (results.length > 0) {
      res.status(200).send(results); // Use 200 for a successful GET
    } else {
      res.status(404).send({ status: 0, reason: "No characters found" });
    }
  } catch (error) {
    res.status(500).send({ status: 0, reason: "Database error", error });
  }
});

// get character by ID
router.get("/character/:id", async (req, res) => {
  const id = Number(req.params.id);
  if (Number.isNaN(id)) {
    res.send({ status: 0, reason: "Invalid id" });
    return;
  }

  try {
    const results = await asyncMySQL(
      `SELECT quote, name, image, characterDirection FROM simpsons WHERE id = ${id};`
    );

    if (results.length > 0) {
      res.send({ status: 1, results });
    } else {
      res.send({ status: 0, reason: "id not found" });
    }
  } catch (error) {
    res.send({ status: 0, reason: "Error querying database", error });
  }
});

module.exports = router;
