"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const app = express();
app.use("/", (req, res, next) => {
    res.send("Hi Testing  !!!");
});
app.use(helmet());
app.use(cors());
app.use(express.json());
const port = process.env.PORT;
app.listen(3000, () => {
    console.log("Connnected with port : " + 3000);
});
