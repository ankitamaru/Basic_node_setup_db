const User = require("../models/User");

const getAllUsers = (req, res) => {
  User.find({})
    .then((result) => {
      res.json({ message: result });
    })
    .catch((err) => {
      console.log({ message: err });
    });
};

const createUser = (req, res) => {
  const { fName, lName, email, mobile, password } = req.body;
  // console.log(req.body);
  const newUser = new User({
    fName,
    lName,
    email,
    mobile,
    password,
  });
  newUser
    .save()
    .then(() => {
      res.json({ message: "Users created Successfully..." });
    })
    .catch((err) => {
      res.json({ message: "Error saving the data." });
    });
};

module.exports = {
  getAllUsers,
  createUser,
};
