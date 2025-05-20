const e = require('express')
const express =require('express')
const { getTodo, addTodo, updata,deletet,singletodo } = require('../controllers/todocontrollers')


const app=express.Router()

app.get('/',getTodo)
app.post('/',addTodo)

app.put('/:id',updata)

app.delete('/:id',deletet)

app.get('/:id',singletodo)


module.exports=app