"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletetodosdb = exports.updatetodosdb = exports.gettodoesdb = exports.createtodosdb = void 0;
var tododb_1 = __importDefault(require("../models/tododb"));
// const TODOS: Todo[] = [];
var createtodosdb = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var text, newTodo, err_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                text = req.body.text;
                return [4 /*yield*/, tododb_1.default.create({ text: text })];
            case 1:
                newTodo = _a.sent();
                if (!newTodo) {
                    throw new Error("Not Created");
                }
                res.status(201).json({
                    message: "Created Todo",
                    data: newTodo,
                });
                return [3 /*break*/, 3];
            case 2:
                err_1 = _a.sent();
                res.send(err_1.message);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.createtodosdb = createtodosdb;
var gettodoesdb = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var todos, err_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, tododb_1.default.findAll()];
            case 1:
                todos = _a.sent();
                res.status(200).json({ todos: todos });
                if (!todos) {
                    throw new Error("No User !!!");
                }
                return [3 /*break*/, 3];
            case 2:
                err_2 = _a.sent();
                res.send(err_2.message);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.gettodoesdb = gettodoesdb;
var updatetodosdb = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var reqid, text, todos, err_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                reqid = req.params.id;
                text = req.body.text;
                return [4 /*yield*/, tododb_1.default.findOne({
                        where: {
                            uuid: reqid,
                        },
                    })];
            case 1:
                todos = _a.sent();
                if (!todos) {
                    throw new Error("Todo Not Founded");
                }
                // console.log(todos);
                return [4 /*yield*/, tododb_1.default.update({ text: text }, {
                        where: {
                            uuid: reqid,
                        },
                    })];
            case 2:
                // console.log(todos);
                _a.sent();
                res.status(200).json({
                    message: "Successfully Updated !!! ",
                    data: {
                        uuid: reqid,
                        text: text,
                    },
                });
                return [3 /*break*/, 4];
            case 3:
                err_3 = _a.sent();
                res.send(err_3.message);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.updatetodosdb = updatetodosdb;
var deletetodosdb = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var reqid, todos, err_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                reqid = req.params.id;
                return [4 /*yield*/, tododb_1.default.findOne({
                        where: {
                            uuid: reqid,
                        },
                    })];
            case 1:
                todos = _a.sent();
                if (!todos) {
                    throw new Error("Todo Not Founded");
                }
                return [4 /*yield*/, tododb_1.default.destroy({
                        where: {
                            uuid: reqid,
                        },
                    })];
            case 2:
                _a.sent();
                // console.log(todo);
                res.status(200).json({
                    message: "Successfully Deleted !!! ",
                    todos: todos,
                });
                return [3 /*break*/, 4];
            case 3:
                err_4 = _a.sent();
                res.send(err_4.message);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.deletetodosdb = deletetodosdb;
