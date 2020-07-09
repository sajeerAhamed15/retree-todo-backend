const sql = require("./db.js");

// constructor
const User = function(user) {
  this.mobile = user.mobile;
  this.password = user.password;
};

User.loginCheck = (mobile,password, result) => {
  sql.query(`SELECT * FROM user WHERE phone = ${mobile} and password = ${password}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found user: ", res[0]);
      result(null, res[0]);
      return;
    }

    // not found Customer with the id
    result({ kind: "Login failed" }, null);
  });
};

module.exports = User;

// User.create = (newUser, result) => {
//   sql.query("INSERT INTO user SET ?", newUser, (err, res) => {
//     if (err) {
//       console.log("error: ", err);
//       result(err, null);
//       return;
//     }

//     console.log("created user: ", { id: res.insertId, ...newUser });
//     result(null, { id: res.insertId, ...newUser });
//   });
// };
