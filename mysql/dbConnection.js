const mysl = require("mysql2");
const { connect } = require("../routes/get");

// connnection

const connnection = mysl.createConnection({
  user: process.env.USER,
  password: process.env.PASSWORD,
  host: process.env.HOST,
  port: process.env.PORT,
  database: process.env.DATABASE,
});
function asyncMySQL(query) {
  return new Promise((resolve, reject) => {
    connnection.query(query, (error, results) => {
      if (error) {
        reject(error);
      }
      resolve(results);
    });
  });
}

module.exports = asyncMySQL;
