const express = require("express");
const dotenv = require("dotenv").config();
const app = express();
const PORT = process.env.PORT || 5002;
const simpsons = require("./simpsons.json");

//convert the body to json
app.use(express.json());
// make simpsons available globally

app.use((req, res, next) => {
  req.simpsons = simpsons;
  next();
});

// get route
app.use("/get", require("./routes/get"));
// delete route
app.use("/delete", require("./routes/delete"));
// update
app.use("/update", require("./routes/update"));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
