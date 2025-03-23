const express = require("express");
const dotenv = require("dotenv").config();
const app = express();
const PORT = process.env.PORT || 5002;

//convert the body to json
app.use(express.json());

app.use((req, res, next) => {
  console.log("new request");
  next();
});

// get route
app.use("/get", require("./routes/get"));
// delete route
// app.use("/delete", require("./routes/delete"));
// // update
// app.use("/update", require("./routes/update"));
// // create
// app.use("/add", require("./routes/create"));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
