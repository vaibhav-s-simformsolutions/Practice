// const { request } = require("express");
require('./db/mongoose');
const User = require('./models/user');
const UserRouter = require('./routers/user');
const express = require('express');

const app = express();




app.use(express.json()); //req convert into json...

app.use(UserRouter);


//middlewear
// app.use((req,res,next)=>{
//     console.log(req.method);
//     res.status(502).send('Service is not available temprarory');
//     //-----------login(Auth)----------
//     //next();
// })


const port = process.env.PORT
app.listen(3000,()=> console.log('Server started on '+ port +'.'))