const mysl = require("mysql2");

// connnection

const connection = mysl.createConnection({
  user: "root",
  password: "",
  host: "localhost",
  port: 3305,
  database: "crud",
});

function asyncMySQL(query) {
  return new Promise((resolve, reject) => {
    connection.query(query, (error, results) => {
      if (error) {
        reject(error);
      }
      resolve(results);
    });
  });
}

module.exports = asyncMySQL;
