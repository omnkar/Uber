const dotenv = require('dotenv');
dotenv.config();

const express=require('express');
const app=express();
const cookieParser = require('cookie-parser');
const cors = require('cors');
const port = process.env.PORT || 3000;
const connectTodb=require('./db/db');
const userRoutes=require('./Routes/user.routes');
const  loginUser=require('./Routes/user.routes');

const  userProfile=require('./Routes/user.routes');

connectTodb();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})
app.get('/',(req,res)=>{
    res.send('Hello World');
})

app.use("/users",userRoutes);
app.use("/login",loginUser);
app.use("/profile",userProfile)



module.exports=app;