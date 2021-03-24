import { RequestHandler } from "express";

export const welcomepage:RequestHandler = (req,res,next)=> {
    res.send('Welcome !!!');
};