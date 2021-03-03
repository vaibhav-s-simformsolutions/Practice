// import express from 'express';
// const express = require('express');

import * as dotenv from "dotenv";
import * as express from "express";
import * as cors from "cors";
import * as helmet from "helmet";
import { Application } from "express-serve-static-core";
import { NextFunction } from "connect";

const app: Application = express();

app.use("/", (req, res, next: NextFunction) => {
  res.send("Hi Testing  !!!");
});

// if (!process.env.PORT) {
//     process.exit(1);
// }

//app Configuration
//---MIDDLEWARE---

app.use(helmet());
app.use(cors());
app.use(express.json());

const port = process.env.PORT;
app.listen(3000, () => {
  console.log("Connnected with port : " + 3000);
});
