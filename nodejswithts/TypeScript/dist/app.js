"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var todosdb_1 = __importDefault(require("./routers/todosdb"));
var body_parser_1 = require("body-parser");
var db_1 = require("./db/db");
var app = express_1.default();
app.use(body_parser_1.json());
//connection with db
db_1.dbconnection();
// app.use("/todos", todosRoutes);
app.use("/todos", todosdb_1.default);
app.use(function (err, req, res, next) {
    res.status(500).json({
        message: err.message,
    });
});
var port = process.env.PORT || 3002;
app.listen(port, function () {
    console.log("Connected on " + port);
});
