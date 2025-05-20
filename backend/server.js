 const express =require('express')
const conntectDB = require('./config/db_config')
const cors = require('cors');
   require('dotenv').config()
   // require('dotenv').config();

   const PROT=process.env.PROT

   conntectDB()

app.use(cors());
   const app=express()
 app.get('/',(req,res)=>{
    res.send('yas tart')
 })
 app.use(express.json())
 app.use(express.urlencoded({extended:true}))

app.use('/api/todo',require('./routers/todorouters'))


   app.listen(PROT,()=>console.log('yas runging'))
