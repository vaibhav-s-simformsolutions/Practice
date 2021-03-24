"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Login = exports.Register = void 0;
const user_1 = require("../models/user");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const Register = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const email = req.body.email;
        const data = yield user_1.User.findOne({ email });
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
        req.body.password = yield bcryptjs_1.default.hash(req.body.password, 10);
        // console.log(x,req.body);
        const user = new user_1.User(req.body);
        // console.log(user,req.body);
        yield user.save();
        res.send({
            Msg: 'Succesfully Register',
            data: user
        });
    }
    catch (err) {
        res.status(401).send(err.message);
    }
});
exports.Register = Register;
const Login = (req, res, next) => {
    res.send('login !!!');
};
exports.Login = Login;
