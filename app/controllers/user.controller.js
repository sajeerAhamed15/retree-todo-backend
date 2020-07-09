const User = require("../models/user.model.js");

// check for password with corresponding username
exports.loginCheck = (req, res) => {
  User.loginCheck(req.params.mobile,req.params.password, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found User with name ${req.params.name}.`
        });
      } else {
        res.status(500).send({
          message: "Error retrieving User with id " + req.params.name
        });
      }
    } else res.send(data);
  });
};

// // Create and Save a new Customer
// exports.create = (req, res) => {
//   // Validate request
//   if (!req.body) {
//     res.status(400).send({
//       message: "Content can not be empty!"
//     });
//   }

//   // Create a Customer
//   const user = new User({
//     mobile: req.body.mobile,
//     password: req.body.password
//   });

//   // Save Customer in the database
//   User.create(user, (err, data) => {
//     if (err)
//       res.status(500).send({
//         message:
//           err.message || "Some error occurred while creating the user."
//       });
//     else res.send(data);
//   });
// };
