"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbconnection = exports.connection = void 0;
// db
var sequelize_1 = require("sequelize");
exports.connection = new sequelize_1.Sequelize("todo", "test", "1234", {
    host: "localhost",
    dialect: "postgres",
    //   storage: "db.postgres",
    // operatorsAliases: false,
});
var dbconnection = function () {
    exports.connection
        .authenticate()
        .then(function () {
        console.log("Conection Established ....");
    })
        .catch(function (err) {
        console.log(err.message);
    });
};
exports.dbconnection = dbconnection;
