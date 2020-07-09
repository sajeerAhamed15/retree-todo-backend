module.exports = app => {
  const user = require("../controllers/user.controller.js");

  // Retrieve a single Customer with phone and password
  app.get("/user/:phone/:password", user.loginCheck);

  // // Create a new Customer
  // app.post("/user", user.create);

};
