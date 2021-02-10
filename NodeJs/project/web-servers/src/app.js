const { publicEncrypt } = require("crypto");
const { request } = require("express");

const express = require('express');
const path = require('path');
const hbs = require('hbs');
const {geolocation,weatherapi} = require('./location');

//create a app with express
const app = express();

//generate path var
const publicDirectoryPath = path.join(__dirname,'../public');
const viewspath = path.join(__dirname,'../templates/views');
const partialpath = path.join(__dirname,'../templates/partial');

//set a default property...
app.set('view engine','hbs'); //selection template engine
app.set('views',viewspath) //change with defaults ...
hbs.registerPartials(partialpath);

//for route path
app.use(express.static(publicDirectoryPath));

// route pages
app.get('/',(req,res)=>{
    // res.send("Hello There !!!");
    res.render('index',{
        title : 'Index Page',
        name : 'Vaibhav Shiroya',
        creator : 'Vaibhav',
    });
})
app.get('/jaimeen',(req,res)=>{
    // res.send("Hello There !!!");
    res.render('index',{
        title : 'friend Page',
        name : 'Jaimeen',
        creator : 'Vaibhav',
    });
})
app.get('/dhruvin',(req,res)=>{
    // res.send("Hello There !!!");
    res.render('index',{
        title : 'friend Page',
        name : 'Dhruvin',
        creator : 'Vaibhav',
    });
})

app.get('/jaimeen/*',(req,res)=>{
    res.send('<h1>Jaimeen sub page not founded</h1>');
})
app.get('/weather',(req,res)=>{
    // console.log(req.query.location)
    geolocation(req.query.location,(err,{latitude,longitude})=>{
        if(err){
            return "Network";
        }
        weatherapi(latitude,longitude,(err,data)=>{
            if(err) return "Network";
            else{
                // const data = `<p>` +  data + `</p>`;
                // console.log(data);
                data.location = req.query.location;
                res.send(data);
            }
        })
    });
    // console.log(apidata);
})


//404
app.get('*',(req,res)=>{ //'*' for anything for matching....
    res.send('<h1>404</h1>');
})

//port selection ...
app.listen(3000,()=>{console.log("Hi Server is Started");})