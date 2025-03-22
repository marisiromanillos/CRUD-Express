const mysl = require("mysql");

// connnection

const connnection = mysl.createConnection({
  user: process.env.USER,
  password: process.env.PASSWORD,
  host: process.env.HOST,
  port: process.env.PORT,
  database: process.env.DATABASE,
});

connnection.query();
