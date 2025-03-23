const express = require("express");
const router = express.Router();
const asyncMySQL = require("../mysql/dbConnection");
const sha256 = require("sha256");
const { addUser } = require("../mysql/queries");
const e = require("express");

router.post("/user", async (req, res) => {
  const { name, email, password } = req.body;
  console.log("Received data:", { name, email, password });
  try {
    const sha256Password = sha256(password);
    const user = await asyncMySQL(addUser(name, email, sha256Password));
    res.status(201).send(user);
  } catch (error) {
    console.error(error);
    res.status(400).send({ reason: "Error inserting user", error });
  }
});

module.exports = router;
