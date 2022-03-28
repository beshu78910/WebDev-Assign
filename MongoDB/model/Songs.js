const express = require("express");
const router = new express.Router();


const mongoose = require("mongoose");
// const song = (
//     {
//         name: "Engsong",
//         language: "English",
//         category: "jazz"
//     },
//     {
//         name: "Frenchsong",
//         language: "French",
//         category: "pop"
//     },
//     {
//         name: "Chinisesong",
//         language: "Chinise",
//         category: "lofi"
//     },
//     {
//         name: "Vietsong",
//         language: "Vietnamsese",
//         category: "rock"
//     },
//     {
//         name: "Hindusong",
//         language: "Hindu",
//         category: "rock"
//     }
// );

// userSchema.pre("save", async function (next) {
//   console.log("this being invoked");
//   this.password = await bcrypt.hash(this.password, 10);
//   next();
// });

// const Songs = song;
// const User = require("../model/User");
// router.get('/songs', (req, res) => {
//     try {
//         const likedSongs = await User.find();
//         res.json(likedSongs);
//     } catch (err) {
//         res.json({ message: err });
//     }
//     // res.send('we are on songs');
// })

// router.get('/', (req, res) => {

// })
// const Song = mongoose.model("Song", userSchema);
module.exports = song;