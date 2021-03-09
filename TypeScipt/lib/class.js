"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
// public - everyone
// private - only me
// protected - me and my sub class
var Contect = /** @class */ (function () {
    function Contect(name, email, age, password) {
        this.name = name;
        this.email = email;
        this.age = age;
        this.password = password;
    }
    return Contect;
}());
var tmp = new Contect("vaibhav", "xyz@gmail.com", 20, "10");
tmp.email, tmp.name; // age can not be accesible
//abstract classes
var Base = /** @class */ (function () {
    function Base(name, mobile) {
        this.name = name;
        this.mobile = mobile;
    }
    return Base;
}());
var InhariteClass = /** @class */ (function (_super) {
    __extends(InhariteClass, _super);
    function InhariteClass(name, mobile, age) {
        var _this = _super.call(this, name, mobile) || this;
        _this.age = age;
        return _this;
    }
    InhariteClass.prototype.getdetails = function () {
        return "My name is : " + this.name + "\nMy number is : " + this.mobile;
    };
    return InhariteClass;
}(Base));
var myobj = new InhariteClass("Vaibhav", 4567893498, 20);
// console.log(myobj.name , myobj.mobile);
console.log(myobj.getdetails());
