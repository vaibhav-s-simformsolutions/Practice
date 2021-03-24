import express, { Request } from 'express';
import indexrouter from './routes/index';
import userrouter from './routes/user';
import mongoose from 'mongoose';
import session from 'express-session';
import flash from 'connect-flash';

const app = express();

const PORT = 3000;

// db
mongoose.connect(
    'mongodb://localhost:27017/Passport',
    { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true },
    () => {
        console.log('Connected');
    }
);

app.use(express.json());

//express session
app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: true,
}))


// middleware
// app.use(flash())
// app.use(function(req, res, next) {
//     res.locals.success_msg = req.flash('success_msg');
//     res.locals.error_msg = req.flash('error_msg');
//     res.locals.error = req.flash('error');
//     next();
// })


 
app.use(indexrouter);
app.use('/user', userrouter);

app.listen(PORT, () => {
    console.log(`Server started on ${PORT}`);
});
