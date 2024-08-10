const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.json())

mongoose.connect("mongodb+srv://rekhajakhar10:Pm1dUp6Z8hhsByvw@cluster0.jrej5.mongodb.net/userappnew?retryWrites=true&w=majority")

const User = mongoose.model('Users', { name: String, email: String, password: String });

app.post("/signup", async function(req,res) {
  const username = req.body.username;
  const emailaddress = req.body.emailaddress;
  const password = req.body.password;

  const existingUser = await User.findOne({emailaddress: emailaddress});
  if(existingUser) {
    return res.status(400).send("User already exists");
  }

  const user = new User({
    name: username, 
    email: emailaddress, 
    password: password 
  });

  user.save();
  res.json({
    "msg":"User created successfully"
  })

})


