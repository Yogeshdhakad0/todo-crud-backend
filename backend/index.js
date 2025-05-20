//  const express =require('express')
// const conntectDB = require('./config/db_config')
// const cors = require('cors');
//    const app=express()
//    require('dotenv').config()
//    // require('dotenv').config();

//    const PROT=process.env.PROT

//    conntectDB()

// app.use(cors());

//  app.get('/',(req,res)=>{
//     res.send('welcome to  todo')
//  })
//  app.use(express.json())
//  app.use(express.urlencoded({extended:true}))

// app.use('/api/todo',require('./routers/todorouters'))


//    app.listen(PROT,()=>console.log('yas runging'))



const express = require('express');
const connectDB = require('./config/db_config');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000; // ✅ Corrected

connectDB();

app.use(cors({
  origin: ["http://localhost:5173", "https://your-frontend.onrender.com"],
  credentials: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Welcome to TODO API');
});

app.use('/api/todo', require('./routers/todorouters'));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
