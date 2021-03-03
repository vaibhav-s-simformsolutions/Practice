"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function Logger(logstring) {
    return function (constructor) {
        console.log(logstring);
    };
}
function SecondDecorator(logstring) {
    return function (constructor) {
        console.log(logstring);
    };
}
function Log(target, propertyName) {
    console.log('Property decorators 1!!!');
    console.log(target, propertyName);
}
function Log2(target, propertyName) {
    console.log('Property decorators 2!!!');
    console.log(target, propertyName);
}
let DecoratorsPractice = class DecoratorsPractice {
    constructor(name) {
        console.log("before assignment");
        this.name = name;
        console.log("Constructor is calling .... ");
    }
};
__decorate([
    Log,
    Log2
], DecoratorsPractice.prototype, "name", void 0);
DecoratorsPractice = __decorate([
    Logger('LOGGING - PERSON ....'),
    SecondDecorator('Second DEcorator')
], DecoratorsPractice);
const decorators = new DecoratorsPractice('Simform');
