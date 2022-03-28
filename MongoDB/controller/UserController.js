const express = require("express");
const router = new express.Router();
const bodyParser = require('body-parser');
const User = require("../model/User");
// const song = require("../model/Songs");
const Artist = require("../model/Artists");
const bcrypt = require("bcryptjs");
const fs = require("fs");
//Middlewares
// a function that will alaways execute when a router is reached
// router.use('/songs', () => {
//   console.log('This is a middleware running');
// })
const currentUser = fs.readFileSync('users.json', 'utf8')
const song = ([
  {
     id: "1",
      name: "Engsong",
      language: "English",
      category: "jazz"
  },
  {
     id: "2",
      name: "Frenchsong",
      language: "French",
      category: "pop"
  },
  {
     id: "3",
      name: "Chinisesong",
      language: "Chinise",
      category: "lofi"
  },
  {
    id: "4",
      name: "Vietsong",
      language: "Vietnamese",
      category: "rock"
  },
  {
    id: "6",
    name: "Hindusong",
    language: "Hindu",
    category: "rock"
  },
  {
    id: "7",
    name: "Hindusong1",
    language: "Hindu",
    category: "rock"
}
]);
const artist = ([
  {
    name: "artist1"
  },
  {
     name: "artist2"
  },
  {
    name: "artist3"
  },
  {
   name: "artist4"
  },

]);
router.post("/register", async function (req, res) {
  
  try {
    req.body.password = bcrypt.hashSync(req.body.password, 10);
    let userDB = new User(req.body);
    const savedUser = await userDB.save();
    // res.json(savedUser);
    res.send({message: 'Register successfully and password change to harsh, please log in with your new account. '})
  } catch (err) {
    res.status(404).json({ message: err });
    }
  // res.send(userDB);
});

router.post('/login', async function (req, res) {
  const info = req.body;
  try {
    const users = await User.findOne({
      email: req.body.email,
      password: req.body.password
    });
    // console.log(req.body.email);
    if (!bcrypt.compare(info.password, users.password)) {
      res.status(400).send({ message: "Password is invalid", password1: info.password, password2: users.password });
     }
    else {
      const userString = JSON.stringify(users);
      fs.writeFileSync('users.json', userString);
      // console.log(currentUser.id);
      console.log(users);
        res.json({ message: 'Login successfully'});
    }
  }
  catch (err) {
    return res.status(404).send({ error: 'does not found email or password' });
  }
 

})
router.get('/songs', async (req, res) => {
  
  if (Object.keys(req.query).length !== 0) {
    const foundLanguage = song.filter((song) => song.language === req.query.language);
    // console.log(likedSong);
   
  
    res.send(foundLanguage);
    
  } else {
    {
      const parsedCurrent = JSON.parse(currentUser);
      const foundUser = await User.findOne({
        email: parsedCurrent.email,
      })
      
      res.send(foundUser.favSong)
    }
 
   
  }
    
})

router.post('/songs/:songs_id', async (req, res) => {
  // console.log(req.params.songs_id);
  const likedSong = song.filter((song) => {
    return song.id === req.params.songs_id
  });
  console.log(likedSong);
  if (likedSong.length === 0) {
    return res.send('Song does not exist');
  }

  const parsedCurrent = JSON.parse(currentUser);
  // console.log(parsedCurrent);
  try {
    const foundUser = await User.findOne({
      email: parsedCurrent.email,
    })
    const updateUser = await User.findOneAndUpdate(
      { email: parsedCurrent.email },
      { $push: { favSong: likedSong}}
      )
 
    res.send({ message: 'Succesfully liked new Song' });

  }
  
  catch (err) {
    console.log(err);
    return res.status(404).send({ error: 'song does not exist' });
  }
 
})
router.post('/artist/:artist_name', async (req, res) => {
  // console.log(req.params.songs_id);
  const folArtist = artist.filter((artist) => artist.name === req.params.artist_name);
  if (folArtist.length === 0) {
    return res.send('Artist does not exist');
  }
  console.log(folArtist);
  const parsedCurrent = JSON.parse(currentUser);
  // console.log(parsedCurrent);
  try {
    const foundUser = await User.findOne({
      email: parsedCurrent.email,
    })
    const updateUser = await User.findOneAndUpdate(
      { email: parsedCurrent.email },
      { $push: { folArtist: folArtist}}
      )
 
    res.send({ message: 'Successfully follow that artist' });
   
  }
  catch (err) {
    console.log(err);
    return res.status(404).send({ error: 'artist does not exist' });
  }
 
})

// const check = JSON.parse(currentUser);
// console.log(check);
router.post('/user/info', async (req, res) => {
 
  const parsedCurrent = await JSON.parse(currentUser);
  try {
    const users = await User.findOne({
      name: parsedCurrent.name,
      password: parsedCurrent.password
    })
    req.body.password = bcrypt.hashSync(req.body.password, 10);
    const updateUser = await User.findByIdAndUpdate(users.id, req.body);
    const stringUpdateUser = JSON.stringify(updateUser);
    fs.writeFileSync('users.json', stringUpdateUser);
    console.log(stringUpdateUser);
    res.json({ message: 'Info changed. Please re-login with the new information'});
    
  }
  catch (err) {
    console.log(err);
    return res.status(404).send({ error: 'does not found name or password' });
  }

  
})

router.get('/songs/:category', async function(req, res, next) {
 
  let test = [];

  const foundCategory = song.filter((song) => song.category === req.params.category);
  
    res.send(foundCategory);
     
})

module.exports = { UserController: router };
