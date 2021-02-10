const mongoose = require('mongoose');
const validator = require('validator');

mongoose.connect('mongodb://127.0.0.1:27017/mongotest',{
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology: true
},(err,res)=>{
    if(err){
        console.log('Database not connected !!!');
    }else{
        console.log('Database Connected Sucessfully ... ');
    }
})


const User = mongoose.model('User',{
    name : {
        type : String,
        required : true,
        trim:true,
        lowercase : true,
        minlength : 5,
    },
    email:{
        type : String,
        required : true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error('Email is not Valid !!!');
            }
        }
    },
    age : {
        type : Number,
        default : 0,
        validate(value){
            if(value < 0){
                throw new Error('Age Must be positive...')
            }
        }
    }
})


const me = new User({
    name : 'Vaibhav',
    email : 'xyz@gmail.com',
})

me.save().then(()=>{
    console.log(me)
}).catch(()=>{
    console.log('Error : ',error);
})