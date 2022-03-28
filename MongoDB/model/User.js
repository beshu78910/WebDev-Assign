const express = require("express");
const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
    require: true,
  },
  favSong: {
    type : Array,
    default: [],
    require: true,
  },
  folArtist: {
    type: Array,
    default: [],
    require: true,
  },
  
  desc: String,
}, {minimize: false});

// userSchema.pre("save", async function (next) {
//   console.log("this being invoked");
//   this.password = await bcrypt.hash(this.password, 10);
//   next();
// });

const User = mongoose.model("User", userSchema);

module.exports = User;
