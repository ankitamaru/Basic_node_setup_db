const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  fName: {
    type: String,
    required: true,
    unique: true,
  },
  lName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  mobile: {
    type: Number,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    unique: true,
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
