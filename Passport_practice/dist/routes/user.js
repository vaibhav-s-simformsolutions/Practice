"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_1 = require("../controller/user");
const router = express_1.Router();
router.post('/register', user_1.Register);
router.get('/login', user_1.Login);
exports.default = router;
