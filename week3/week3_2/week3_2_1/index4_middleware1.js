const express = require('express');
const app = express();

function agecorrect(age) {
  if(age>14) {
    return true;
  } else {
    return false;
  }
}

// middleware
function agecorrectMiddleware(req,res,next) {
  if(age>14) {
    next();
  } else {
    res.json({
      msg: "not correct age"
    })
  }
}

app.get("/ride1", function(req,res) { // next is here also but not required as last function
  if(agecorrect(req.query.age)) {
    res.json({
     msg: "success ride 1"
    })
  } else {
    res.status(411).json({
      msg: "you are not allowed to ride 1 due to age"
    })
  }
})

app.get("/ride2", function(req,res) {
  if(agecorrect(req.query.age)) {
    res.json({
     msg: "success ride 2"
    })
  } else {
    res.status(411).json({
      msg: "you are not allowed to ride 2 due to age"
    })
  }
})

app.listen(3000);
