const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const Schema = mongoose.Schema;
const jwt = require('jsonwebtoken');
const userSchema = new Schema({
  username: String,
  email: {
    type: String,
    unique: true,
  },
  password: String,
});

userSchema.pre("save", async function (next) {
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

userSchema.statics.findByEmailAndPsw = async function (email, password) {
  const user = await User.findOne({ email });
  let isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    throw new Error("email or password is wrong!");
  }
  return user;
};

userSchema.methods.genJWT = function ({ username, email }) {
  return jwt.sign({ username, email }, process.env.JWT_KEY);
};

const User = mongoose.model("User", userSchema);
module.exports = User;
