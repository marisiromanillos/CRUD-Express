const express = require("express");
const dotenv = require("dotenv").config();
const app = express();
const PORT = process.env.PORT || 5002;
const simpsons = require("./simpsons.json");

// make simpsons available globally

app.use((req, res, next) => {
  req.simpsons = simpsons;
  next();
});

// get route
app.use("/get", require("./routes/get"));
app.use("/delete", require("./routes/delete"));

//convert the body to json
app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
