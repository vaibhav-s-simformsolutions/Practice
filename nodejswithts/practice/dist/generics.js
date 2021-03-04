"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const obj = {
    num1: 10,
    num2: 20,
};
class Car {
    drive() {
        console.log("Driving....");
    }
}
class Truck {
    drive() {
        console.log("Driving Truck");
    }
    cargo() {
        console.log("Cargo...");
    }
}
const v1 = new Car();
const v2 = new Truck();
function useVehicle(vehicle) {
    vehicle.drive();
    if ("cargo" in vehicle) {
        vehicle.cargo();
    }
}
const errorBag = {
    email: `Email isn't found !!!`,
    username: `Must start with capital character`,
};
const data = {
    name: "U1",
    job: {
        venue: "Iscon",
    },
};
console.log("" || "Default");
console.log(undefined !== null && undefined !== void 0 ? undefined : "Default");
console.log("" !== null && "" !== void 0 ? "" : "Default");
const arr2 = ["1", "2"];
const promise = new Promise((resolve, reject) => {
    resolve("This is done");
});
promise.then(() => {
    console.log("Heyya !!!");
});
function merge(obj1, obj2) {
    return Object.assign(obj1, obj2);
}
const mergeobj = merge({ name: "User1" }, { job: "Simform" });
console.log(mergeobj.name);
function extractAndConvert(obj, key) {
    return obj[key];
}
console.log(extractAndConvert({ company: "simform" }, "company"));
class Genricclass {
    constructor() {
        this.data = [];
    }
    additem(item) {
        this.data.push(item);
    }
    removeitem(item) {
        if (this.data.indexOf(item) === -1)
            return "Data not found";
        return "Removed data : " + this.data.splice(this.data.indexOf(item), 1)[0];
    }
    getitems() {
        return this.data;
    }
}
const text = new Genricclass();
text.additem("1");
text.additem("2");
text.additem("3");
console.log(text.removeitem("1"));
console.log(text.getitems());
