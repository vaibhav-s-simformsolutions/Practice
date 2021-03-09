"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var todos_1 = require("../controllers/todos");
var router = express_1.Router();
//array storage
router.post("/", todos_1.createtodos);
router.get("/", todos_1.gettodoes);
router.patch("/:id", todos_1.updatetodos);
router.delete("/:id", todos_1.deletetodos);
exports.default = router;
