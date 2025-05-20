const Todo = require('../models/Todomodel')



const  getTodo= async(req,res)=>{
   const  todos= await Todo.find()
   if(!todos){
    res.status(400)
    res.json({message:'no todo'})
   }
   res.status(200)
   res.json(todos)
}
const singletodo= async(req,res)=>{
    const todo= await Todo.findById(req.params.id)
    if(!todo){
        res.status(400)
        res.json({message:'single todo no '})
       }
       res.status(201)
       res.json(todo)
} 
const addTodo=async (req,res)=>{
    const {title,description}=req.body
   if(!title ||!description){
    res.status(400)
    res.json({
        message:'please fill all detail'
    })
   }

const todo = await Todo.create({title,description})
if(!todo){
    res.status(400)
    res.json({
        message:' todo not create'
    })
   
}
res.status(201)
res.json(todo)


}
const updata= async (req,res)=>{
   const updatTodos = await Todo.findByIdAndUpdate( req.params.id ,  req.body, {new:true})
   if(!updatTodos){
    res.status(400)
    res.json({message:'TOdo not updata'})
   }
   res.status(200)
   res.json(updatTodos)
} 
const deletet= async(req,res)=>{
await  Todo.findByIdAndDelete(req.params.id)
res.status(201).json({
    message:' todo delete'
})
}


module.exports={getTodo ,addTodo ,updata ,deletet,singletodo}