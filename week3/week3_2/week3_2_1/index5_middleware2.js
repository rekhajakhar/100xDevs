const express = require('express');
const app = express();

// middleware
function agecorrectMiddleware(req,res,next) {
  if(req.query.age>14) {
    next();
  } else {
    res.json({
      msg: "not correct age"
    })
  }
}
app.use(agecorrectMiddleware); //this can be used to use agecorrectMiddleware for all routes after this line

app.get("/ride1", function(req,res) { // next is here also but not required as last function
  res.json({
    msg: "success ride 1"
  })
})

app.get("/ride2", function(req,res) {
  res.json({
    msg: "success ride 2"
  })
})

app.listen(3000);
