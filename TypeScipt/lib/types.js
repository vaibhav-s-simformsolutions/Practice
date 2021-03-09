var let_var = "variable";
let_var = "new_variable";
var con_var = "vaibhav";
var Objl = {
    foo: "TEST"
};
var Objc = {
    foo: "TEST"
};
Objc.foo = "NEW_TEST"; //allowed
var anyvar; //any type
//we can also add string , number , boolean
// function add(a:number,b:number){
//     return a + b;
// }
var add = function (a, b) { return a + b; };
var a = 2;
var b = 2;
// console.log(add(a,b));
//object
var obj = {
    name: "vaibhav",
    age: 18,
    role: [2, 'Forward']
};
// console.log(obj);
var Abcd;
(function (Abcd) {
    Abcd[Abcd["A"] = 0] = "A";
    Abcd[Abcd["B"] = 1] = "B";
    Abcd[Abcd["C"] = 2] = "C";
    Abcd[Abcd["D"] = 3] = "D";
})(Abcd || (Abcd = {}));
;
// console.log(Abcd.C); //index
//Array
var x; //union
x = ["abc", "xyz"];
x = [1, 2, 3];
//pre define
var num;
num = 10;
//We cannot assign diffrent datatype val after assign diffrent datatype
// var x = "10";
// x = 10   
//Union Type
var unionNumberAndString;
unionNumberAndString = 10;
unionNumberAndString = '10';
// let aa : [number,string,boolean,number[]]; //doubt
// aa.push(1,'ds',true,[1,2]);
// console.log(aa)
var mayOrMaynot;
mayOrMaynot = {
    name: "Vaibhav",
    mobile: 27879,
};
function foo(x) {
    return x;
}
var foo1 = function (x) { return x; };
function foo3(x) {
    // return ;
    // if(x == 0)
    // return "vaibhav";
    // return [1,2,3]
}
function foo4() {
    var x = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        x[_i] = arguments[_i];
    }
    console.log(x);
}
//function defination
// function ararydiff (name : "number" | "string",...val: number[]|string[]) : void{
function ararydiff(name) {
    var val = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        val[_i - 1] = arguments[_i];
    }
    if (name == "number") {
        val.forEach(function (i) { console.log(i); });
    }
    else {
        val.forEach(function (i) { console.log(i); });
    }
}
ararydiff("number", 4, 2, 3);
ararydiff("string", "1", "2", "3");
ararydiff("string");
// ararydiff(1,2,3)//TODO : arraydiff have any type parameter
