const mongoose = require("mongoose");

const db = mongoose
  .connect("mongodb://localhost:27017/cuvetteDB")
  .then(() => {
    console.log("Connected to MongoDB.");
  })
  .catch((error) => {
    console.log("Error connecting to MongoDB:", error);
  });

  module.exports = db;