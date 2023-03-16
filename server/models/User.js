const mongoose = require("mongoose");
const { Schema, model } = mongoose;
const userSchema = new Schema({
  name: String,
  email: String,
  password: String,
  kcal: String,
  days: { type: Object, default: {} },
  informations: {type: Object, default: {}},
});

const User = model("User", userSchema);
module.exports = User;
