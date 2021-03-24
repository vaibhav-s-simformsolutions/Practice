import { Request, RequestHandler, Response } from 'express';
import { User } from '../models/user';
import bcrypt from 'bcryptjs';

export const Register = async (req: Request, res: Response) => {
    try {
        const email = req.body.email;
        const data = await User.findOne({ email });

        
        if (data) {
            throw new Error('Email Exist ... ');
        }
        // bcrypt.genSalt(10, (err,salt ) => {
        //     // if(err) throw err;
        //     bcrypt.hash(req.body.password , salt , (err,hash)=>{
        //         // if(err) throw err;
        //         req.body.password = hash;
        //     })
        // })

        // let x;
        req.body.password = await bcrypt.hash(req.body.password ,10)
        // console.log(x,req.body);
        
        const user  = new User(req.body);
        // console.log(user,req.body);
        
        await user.save();
        res.send({
            Msg: 'Succesfully Register',
            data: user
        });
    } catch (err) {
        res.status(401).send(err.message);
    }
};

export const Login: RequestHandler = (req, res, next) => {
    res.send('login !!!');
};
