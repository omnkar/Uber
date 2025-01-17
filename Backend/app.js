const dotenv = require('dotenv');
dotenv.config();

const express=require('express');
const app=express();

const cors = require('cors');
const port= 3000;


app.use(cors());
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})
app.get('/',(req,res)=>{
    res.send('Hello World');
})

module.exports=app;