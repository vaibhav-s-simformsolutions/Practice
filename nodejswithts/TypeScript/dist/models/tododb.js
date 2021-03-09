"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sequelize_1 = require("sequelize");
var db_1 = require("../db/db");
//model
var Tododb = db_1.connection.define("Tododb", {
    uuid: {
        type: sequelize_1.DataTypes.UUID,
        primaryKey: true,
        defaultValue: sequelize_1.DataTypes.UUIDV4,
    },
    text: {
        type: sequelize_1.DataTypes.STRING,
    },
}, {
    freezeTableName: true,
});
// Tododb.beforeCreate(user => user.uuid  = uuid());
// Tododb.sync({
//   force: true,
//     alter: true,
// });
exports.default = Tododb;
