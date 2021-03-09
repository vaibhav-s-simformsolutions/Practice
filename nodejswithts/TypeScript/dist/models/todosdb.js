"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tododb = void 0;
var sequelize_1 = require("sequelize");
var db_1 = require("../db/db");
//model
exports.tododb = db_1.connection.define("Tododb", {
    id: {
        type: sequelize_1.DataTypes.STRING,
        primaryKey: true,
        defaultValue: sequelize_1.Sequelize.fn("uuid_generate_v4"),
    },
    text: {
        type: sequelize_1.DataTypes.STRING,
    },
});
