"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const index_1 = require("../controller/index");
const router = express_1.Router();
router.get('/', index_1.welcomepage);
exports.default = router;
