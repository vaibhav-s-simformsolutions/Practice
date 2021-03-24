"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const index_1 = __importDefault(require("./routes/index"));
const user_1 = __importDefault(require("./routes/user"));
const mongoose_1 = __importDefault(require("mongoose"));
const express_session_1 = __importDefault(require("express-session"));
const app = express_1.default();
const PORT = 3000;
// db
mongoose_1.default.connect('mongodb://localhost:27017/Passport', { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }, () => {
    console.log('Connected');
});
app.use(express_1.default.json());
//express session
app.use(express_session_1.default({
    secret: 'secret',
    resave: false,
    saveUninitialized: true,
}));
// middleware
// app.use(flash())
// app.use(function(req, res, next) {
//     res.locals.success_msg = req.flash('success_msg');
//     res.locals.error_msg = req.flash('error_msg');
//     res.locals.error = req.flash('error');
//     next();
// })
app.use(index_1.default);
app.use('/user', user_1.default);
app.listen(PORT, () => {
    console.log(`Server started on ${PORT}`);
});
