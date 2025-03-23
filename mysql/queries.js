module.exports = {
  addUser: (name, email, password) => {
    return `INSERT INTO user (name, email, password) VALUES ("${name}", "${email}", "${password}")`;
  },
};

// queries.js
