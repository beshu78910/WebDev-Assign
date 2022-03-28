const mongoose = require("mongoose");
const uri =
  "mongodb+srv://dan5299:Vmsgmsrms12@testcluster.3qp4v.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
mongoose.connect(
  uri,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (error, client) => {
    if (error) {
      return console.log(error);
    }
    console.log("connect to db");
    return client
   
  }
);
