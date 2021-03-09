"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var todosdb_1 = require("../controllers/todosdb");
var router = express_1.Router();
//db
router.post("/", todosdb_1.createtodosdb);
router.get("/", todosdb_1.gettodoesdb);
router.patch("/:id", todosdb_1.updatetodosdb);
router.delete("/:id", todosdb_1.deletetodosdb);
exports.default = router;
