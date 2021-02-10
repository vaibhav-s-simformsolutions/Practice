const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

userSchema = mongoose.Schema({   
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
        unique:true,
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
    },
    password :{
        type : String,
        minlength : 7
    },
    tokens : [
        {
            token :{
                type : String,
            }
        }
    ],
    avatar : {
        type : String,
    }

},{
    timestamps : true,
})

userSchema.methods.generatetokens = async function(){
    const user = this;
    const token = jwt.sign({ _id: user._id.toString() }, process.env.SECRETKEYFORJWT);
    user.tokens = user.tokens.concat([{token}]);
    await user.save();
    return token
}

userSchema.methods.toJSON = function(){
    const user = this;
    // console.log(user)
    // console.log('--------------------');
    delete user.password;
    delete user.tokens;
    console.log(user)
    return user;
}

userSchema.statics.findByCredentials = async (email,password) => {
    
    const user = await User.findOne({email});
    
    if(!user){
        throw new Error('User Not Found');
    }
    upass = await bcrypt.hash(user.password,8);
    const isvalid = await bcrypt.compare(password,user.password);
    
    if(!isvalid){
        throw new Error('Wrong Password!!!');
    }
    return user;
}

userSchema.pre('save',async function(next){
    const user = this;
    if(user.isModified('password')){
        user.password = await bcrypt.hash(user.password,8);
    }
    next();
})

//first arg = collection name ,second = Schema
const User = mongoose.model('User',userSchema);
module.exports = User;




//save a data
// const me = new User({
//     name : 'Vaibhav',
//     email : 'xyz@gmail.com',
// })

// me.save().then(()=>{
//     console.log(me)
// }).catch(()=>{
//     console.log('Error : ',error);
// })