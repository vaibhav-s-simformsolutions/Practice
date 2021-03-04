"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const app = express();
app.use('/', (req, res, next) => {
    res.send('Hi Testing !!!');
});
app.use(helmet());
app.use(cors());
app.use(express.json());
const port = 3000;
app.listen(3000, () => {
    console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});
