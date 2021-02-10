const mongoose = require('mongoose');

mongoose.connect(process.env.MONGOURL,{
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology: true
},(err)=>{
    if(err){
        console.log('Database not connected !!!' + err);
    }else{
        console.log('Database Connected Sucessfully ... ');
    }
})