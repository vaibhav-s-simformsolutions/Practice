import { RequestHandler } from "express";
import { connection } from "../db/db";
import Tododb from "../models/tododb";

// const TODOS: Todo[] = [];

export const createtodosdb: RequestHandler = async (req, res, next) => {
  try {
    const text = (req.body as { text: string }).text;
    const newTodo = await Tododb.create({ text });
    if (!newTodo) {
      throw new Error("Not Created");
    }
    res.status(201).json({
      message: "Created Todo",
      data: newTodo,
    });
  } catch (err) {
    res.send(err.message);
  }
};

export const gettodoesdb: RequestHandler = async (req, res, next) => {
  try {
    const todos = await Tododb.findAll();
    res.status(200).json({ todos });
    if (!todos) {
      throw new Error("No User !!!");
    }
  } catch (err) {
    res.send(err.message);
  }
};

export const updatetodosdb: RequestHandler<{ id: string }> = async (
  req,
  res,
  next
) => {
  try {
    const reqid = req.params.id;
    const text = (req.body as { text: string }).text;
    //   }
    // console.log(reqid, text);

    const todos = await Tododb.findOne({
      where: {
        uuid: reqid,
      },
    });
    if (!todos) {
      throw new Error("Todo Not Founded");
    }

    // console.log(todos);
    await Tododb.update(
      { text: text },
      {
        where: {
          uuid: reqid,
        },
      }
    );
    res.status(200).json({
      message: "Successfully Updated !!! ",
      data: {
        uuid: reqid,
        text,
      },
    });
  } catch (err) {
    res.send(err.message);
  }
};

export const deletetodosdb: RequestHandler<{ id: string }> = async (
  req,
  res,
  next
) => {
  try {
    const reqid = req.params.id;
    const todos = await Tododb.findOne({
      where: {
        uuid: reqid,
      },
    });
    if (!todos) {
      throw new Error("Todo Not Founded");
    }

    await Tododb.destroy({
      where: {
        uuid: reqid,
      },
    });
    // console.log(todo);
    res.status(200).json({
      message: "Successfully Deleted !!! ",
      todos,
    });
  } catch (err) {
    res.send(err.message);
  }
};
