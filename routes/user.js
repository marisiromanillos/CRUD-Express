const express = require("express");
const router = express.Router();
const asyncMySQL = require("../mysql/dbConnection");
const sha256 = require("sha256");
const { addUser } = require("../mysql/queries");
const e = require("express");

// login user
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  // hash the pasword
  const sha256Password = sha256(password);
  // compare the hash version to the stored the one
  try {
    const results = await asyncMySQL(checkUserCreds(email, sha256Password));
    res.status(202).send(results);
  } catch (e) {}
  console.log(e);
});

// add user
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
