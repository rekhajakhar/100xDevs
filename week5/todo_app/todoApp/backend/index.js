const express = require("express");
const cors = require('cors');
const app = express();
const {createTodo, updateTodo} = require("./types");
const {todo} = require( "./db");
app.use(express.json());
app.use(cors());

//body {
//title: string;
//description: string;
//}
app.post("/todo",async function(req,res) {
  const createPayload = req.body;
  const parsedPaylod = createTodo.safeParse(createPayload);
  if(!parsedPaylod.success) {
    res.status(411).json({
      msg: "wrong inputs",
    })
    return;
  }
  //put in mongo db
  await todo.create({
    title: parsedPaylod.data.title,
    description: parsedPaylod.data.description,
    completed: false
  })
  res.json({
    msg: "todo created"
  })
})

app.get("/todos", async function(req, res) {
  const todos = await todo.find({});
  res.json({
    todos
  })
})

app.put("/completed", async function(req, res) {
  const updatePayload = req.body;
  const parsedPaylod = updateTodo.safeParse(updatePayload);
  if(!parsedPaylod.success) {
    res.status(411).json({
      msg: "wrong inputs",
    })
    return;
  }
  //update in mongo db
  await todo.update({
    _id: req.body.id
  }, {
    completed: true
  })
  res.json({
    msg: "todo marked as completed"
  })
})

app.listen(3000);
