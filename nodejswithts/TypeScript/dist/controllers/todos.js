"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletetodos = exports.updatetodos = exports.gettodoes = exports.createtodos = void 0;
var todo_1 = require("../models/todo");
var TODOS = [];
var createtodos = function (req, res, next) {
    var text = req.body.text;
    var newTodo = new todo_1.Todo(Math.random().toString(), text);
    TODOS.push(newTodo);
    res.status(201).json({
        message: "Created Todo",
        data: newTodo,
    });
};
exports.createtodos = createtodos;
var gettodoes = function (req, res, next) {
    res.status(200).json({ todos: TODOS });
};
exports.gettodoes = gettodoes;
var updatetodos = function (req, res, next) {
    var reqid = req.params.id;
    var text = req.body.text;
    var todoindex = TODOS.findIndex(function (todo) { return todo.id === reqid; });
    if (todoindex < 0) {
        throw new Error("Cannot Find Item");
    }
    TODOS[todoindex].text = text;
    res.status(200).json({
        message: "Successfully Updated !!! ",
        data: TODOS[todoindex],
    });
};
exports.updatetodos = updatetodos;
var deletetodos = function (req, res, next) {
    var reqid = req.params.id;
    var todoindex = TODOS.findIndex(function (todo) { return todo.id === reqid; });
    if (todoindex < 0) {
        throw new Error("Cannot Find Item");
    }
    TODOS.splice(todoindex, 1);
    res.status(200).json({
        message: "Successfully Deleted !!! ",
    });
};
exports.deletetodos = deletetodos;
