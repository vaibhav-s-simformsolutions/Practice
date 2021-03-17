"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const async_1 = __importDefault(require("async"));
//parallel
let parallel = [];
const firstfunc = (callback) => {
    // console.log("1");
    callback(null, "First Function called");
};
const secondfunc = (callback) => {
    // console.log("2");
    callback(null, "Secound Function called");
};
const thirdfunc = (callback) => {
    // console.log("3");
    callback(null, "Third Function called");
};
parallel.push(firstfunc);
parallel.push(secondfunc);
parallel.push(thirdfunc);
async_1.default.parallel(parallel, (err, result) => {
    console.log(result);
});
let parallel2 = {};
parallel2.firstfunc = (callback) => {
    console.log("1");
    callback(null, "First Function called");
};
parallel2.secondfunc = (callback) => {
    console.log("2");
    callback(null, "Secound Function called");
};
parallel2.thirdfunc = (callback) => {
    console.log("3");
    callback(null, "Third Function called");
};
async_1.default.parallel(parallel2, (err, result) => {
    console.log(result);
});
// async.parallel([
//     function(callback) {
//         setTimeout(function() {
//             callback(null, 'one');
//         }, 1000);
//     },
//     function(callback) {
//         setTimeout(function() {
//             callback(null, 'two');
//         }, 1000) ;
//     }
// ],
// // optional callback
// function(err, results) {
//     console.log(results);
//     //take 1 sec
// });
//series
async_1.default.series([
    function (callback) {
        setTimeout(function () {
            callback(null, "one");
        }, 5000);
    },
    function (callback) {
        setTimeout(function () {
            callback(null, "two");
        }, 5000);
    },
], 
// optional callback
function (err, results) {
    console.log(results);
    //take 1 sec
});
async_1.default.waterfall([
    function (callback) {
        setTimeout(function () {
            callback(null, "one");
        }, 5000);
    },
    function (arg1, callback) {
        setTimeout(function () {
            callback(null, "two");
        }, 5000);
    },
], 
// optional callback
function (err, results) {
    console.log(results);
    //take 1 sec
});
