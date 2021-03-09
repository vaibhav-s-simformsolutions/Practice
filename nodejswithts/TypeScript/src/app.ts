import express, { Request, Response, NextFunction } from "express";
import todosRoutes from "./routers/todos";
import todosRoutesdb from "./routers/todosdb";
import { json } from "body-parser";
import { connection, dbconnection } from "./db/db";
// import { Pool } from 'pg';
import { Sequelize, DataTypes } from "sequelize";

const app = express();
app.use(json());

//connection with db
dbconnection();

// app.use("/todos", todosRoutes);
app.use("/todos", todosRoutesdb);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({
    message: err.message,
  });
});

const port = process.env.PORT || 3002;
app.listen(port, () => {
  console.log(`Connected on ${port}`);
});
