module.exports = {
  addUser: (name, email, password) => {
    return `INSERT INTO user (name, email, password) VALUES ("${name}", "${email}", "${password}")`;
  },
  checkUserCreds: (email, sha256Password) => {
    return `SELECT id FROM user WHERE email LIKE "${email}"
                AND password LIKE "${sha256Password}"`;
  },
};

// queries.js
