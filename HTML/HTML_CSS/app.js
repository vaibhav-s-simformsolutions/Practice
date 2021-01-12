const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');


const app = express();



app.set('view engine', 'hbs');
app.set('views', 'views');

app.use('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'views','index.html'));
})

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.listen(3000,()=>{
    console.log('Listening on 3000 port')
});