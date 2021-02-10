const express = require('express');
const User = require('../models/user');
const auth = require('../middlewear/auth');
const router = express.Router();
const multer = require('multer');

// router.get('/fetchdata',async (req,res)=>{

//     try{
//         const  user = await User.find({})
//         res.status(200).send(user)
//     }catch{
//         res.status(500).send(e);
//     }

//     //-----------------------------------------------------------
//     // User.find({}).then((users)=>{
//     //     res.status(200).send(users)
//     // }).catch((e)=>{
//     //     res.status(500).send(e);
//     // })
// })


// router.get('/fetchdata/:id',(req,res)=>{
//     User.findById(req.body.id).then((user)=>{  //query with model
//         // console.log(user);
//         res.status(200).send(user)
//     }).catch((e)=>{
//         res.status(404).send('Not Found!!!');
//     })
// })



router.post('/users',async (req,res)=>{
    const user = new User(req.body);
    try{
        await user.save();
        const token = await user.generatetokens()
        console.log({user,token})
        res.status(200).send({user,token});
    }catch(err){
        res.status(400).send(err.message);
    }
    //---------------------------------------------------
    // user.save().then(()=>{
    //     res.status(201).send(user);
    // }).catch((err)=>{
    //     res.status(400).send(err.message);
    // })
})

router.get('/users/me',auth,async (req,res)=>{
   try{
    res.send(req.user);
   }catch(e){
       res.send(e);
   }
})

router.post('/users/login',async (req,res)=>{
    try{
        const user = await User.findByCredentials(req.body.email,req.body.password);
        const token = await user.generatetokens();
        res.status(200).send({user,token});
    }catch(err){
        res.status(400).send(err.message);
    }
})



router.post('/users/logout',auth,async (req,res)=>{
    // console.log(req.token)
    try{
        req.user.tokens = req.user.tokens.filter((token)=>{
            return token.token != req.token;
        })
        await req.user.save();
        res.send(req.user);
    }catch(e){
        res.status(500).send(e); 
    }
})

router.post('/users/logoutall',auth,async (req,res)=>{

    try{
        req.user.tokens = []
        await req.user.save();
        res.send(req.user);
    }catch(e){
        res.status(500).send(e); 
    }
})


router.patch('/users/me',auth,async (req,res)=>{
    //for unmatch changes
    const updates = Object.keys(req.body);
    const value = ['name','email','age','password'];

    const isvalid = updates.every((update)=>value.includes(update));
    if(!isvalid){
        return res.status(400).send({error:'Invalid Updates'});
    }

    try{
        // const user = await User.find(req.body.id);
        updates.forEach((update)=>{
            req.user[update] = req.body[update];
        })
        await req.user.save();
        // const user = await User.findByIdAndUpdate(req.params.id,req.query,{new:true,runValidators:true});
        // if(!user){
        //     return res.status(404).send();
        // }
        res.status(200).send(user);
    }catch(e){
        res.status(500).send(e); 
    }
})

const upload = multer({
    // dest:'avatars', //for store in server 
    limits:{
        fileSize:1000000  //1 MB (it's in Bytes)
    },
    fileFilter(req,file,cb){ //constraint and bound the libraries...
        if(!file.originalname.match(/\.(jpg|jpeg|png)$/)){   //RegEx -> \.(doc|docx)$ 
            return cb(new Error('Please Upload png or jpeg or jpg'));
        }
        cb(undefined,true);
    }
})
router.post('/users/me/avatar',auth,upload.single('avatar'),async (req,res)=>{
    //you can formatting by sharp module
    req.user.avatar = req.file.buffer;
    await req.user.save();
    res.send('Successfully Sended !!!');
},(err,req,res,next)=>{
    res.send(err.message);
})

router.delete('/users/me/avatar',auth,async (req,res)=>{
    req.user.avatar = undefined;
    await req.user.save();
    res.send('Successfully Deleted !!!');
})

router.delete('/users/me',auth,async (req,res)=>{
    try{
        // const user = await User.findByIdAndDelete(req.user._id);
        // if(!user){
        //     return res.status(404).send('Not Found');
        // }
        // res.status(200).send(user);
        await req.user.remove();
        res.status(200).send(req.user);

    }catch(e){
        res.status(500).send(e); 
    }
})

module.exports = router;









// multiple async request

//updateandcount with async and await
// const updateandcount = async (id,age) => {
//     const user = await User.findByIdAndUpdate(id,{age : age});
//     const count = await User.countDocuments({age : age})
//     return count;
// }
// updateandcount('601b81b426b09c73ce577c11',1).then((count)=>{
//     console.log(count);
// }).catch((e)=>{
//     console.log('Error');
// })
