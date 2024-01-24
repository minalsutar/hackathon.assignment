 const express = require('express');
 const cors = require('cors');   //it allow other server requrest, npm install cors
 const bodyParser = require('body-parser');
 const mongoose = require('mongoose'); //npm install mongoose
 const jwt = require("jsonwebtoken")
//  const cookieParser = require("cookie-parser")
 main().catch(err => console.log(err));


 async function main() {
   await mongoose.connect('mongodb://127.0.0.1:27017/test');  //27017-portno,127.0.0.1-
     // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
      console.log('db connected')
    }

    const userSchema = new mongoose.Schema({   //which type of data we send
        username: String,
        password: String
      });

      const User = mongoose.model('User', userSchema);


const server = express();
  
server.use(cors());
server.use(bodyParser.json());  //to get the reactjs body.
// server.use(cookieParser())

//create data
server.post ("/demo",async(req,res)=>{
     //res.send("hello");
     //console.log(req.body);
     //res.json(req.body);
     
    let user = new User();
    user.username = req.body.username;
    user.password = req.body.password;
    const doc = await  user.save();
    const token =jwt.sign({username: user.username},"jwt-secret-key",{expiresIn:"1d"})
    res.cookie("token",token);

    console.log(doc);
    res.json(doc); 
})

//read data
server.get('/demo',async(req,res)=>{
  const docs = await User.find({});
  res.json(docs);
})
server.listen(8080,()=>{
    console.log("started");
})