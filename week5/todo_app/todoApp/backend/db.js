/*
todo {
title: string,
description: string,
completed: boolean,
}
*/

const mongoose = require("mongoose");
//mongodb+srv://rekhajakhar10:Pm1dUp6Z8hhsByvw@cluster0.jrej5.mongodb.net/todos
mongoose.connect("mongodb+srv://rekhajakhar10:Pm1dUp6Z8hhsByvw@cluster0.jrej5.mongodb.net/todosApp ")

const todoSchema = mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean
})

const todo = mongoose.model('todos',todoSchema);
module.exports = {
  todo
}