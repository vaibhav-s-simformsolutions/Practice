import { RequestHandler } from "express";
import { Todo } from "../models/todo";

const TODOS: Todo[] = [];

export const createtodos: RequestHandler = (req, res, next) => {
  const text = (req.body as { text: string }).text;
  const newTodo = new Todo(Math.random().toString(), text);
  TODOS.push(newTodo);

  res.status(201).json({
    message: "Created Todo",
    data: newTodo,
  });
};

export const gettodoes: RequestHandler = (req, res, next) => {
  res.status(200).json({ todos: TODOS });
};

export const updatetodos: RequestHandler<{ id: string }> = (req, res, next) => {
  const reqid = req.params.id;
  const text = (req.body as { text: string }).text;
  const todoindex = TODOS.findIndex((todo) => todo.id === reqid);

  if (todoindex < 0) {
    throw new Error("Cannot Find Item");
  }

  TODOS[todoindex].text = text;

  res.status(200).json({
    message: "Successfully Updated !!! ",
    data: TODOS[todoindex],
  });
};

export const deletetodos: RequestHandler<{ id: string }> = (req, res, next) => {
  const reqid = req.params.id;

  const todoindex = TODOS.findIndex((todo) => todo.id === reqid);
  if (todoindex < 0) {
    throw new Error("Cannot Find Item");
  }
  TODOS.splice(todoindex, 1);
  res.status(200).json({
    message: "Successfully Deleted !!! ",
  });
};
