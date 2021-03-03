import { rejects } from "assert";
import { constants } from "buffer";

type e1 = {
  num1: number;
};
type e2 = {
  num2: number;
};

type e3 = e1 & e2;
// interface e3 extends e1,e2 {}
const obj: e3 = {
  num1: 10,
  num2: 20,
};

type Combinable = string | number;
type Numeric = number | boolean;
type Universal = Combinable & Numeric; // And gate so pick a comman one

//typeguard
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
// 86 . In Interface you can type guard with narrow down type and use switch case
type Vehicle = Car | Truck;
const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
  vehicle.drive();
  if ("cargo" in vehicle) {
    //   if(vehicle instanceof Truck) // This is also valid syntax
    //   TypeGuard
    vehicle.cargo();
  }
}
// useVehicle(v2);

//object bound in typescript using interface
interface ErrorControlller {
  [prop: string]: string; //[key : keytype ] : valuetype
}
const errorBag: ErrorControlller = {
  email: `Email isn't found !!!`,
  username: `Must start with capital character`,
};

// optional chaining ....
const data = {
  name: "U1",
  job: {
    // place : 'Simform'
    venue: "Iscon",
  },
};
// console.log(data?.job?.place) //TODO : doubt

//Nullish Coalescing
console.log("" || "Default"); //if falsy --> default
console.log(undefined ?? "Default"); //undefined or null --> default
console.log("" ?? "Default"); // '' not undefined or null --> default

const arr2: Array<string | number> = ["1", "2"]; //Generics
//promise
const promise: Promise<string> = new Promise((resolve, reject) => {
  resolve("This is done");
});
promise.then(() => {
  console.log("Heyya !!!");
});

function merge<T extends object, U extends object>(obj1: T, obj2: U) {
  return Object.assign(obj1, obj2);
}
// const mergeobj = merge<object,object>({name : 'User1'},{job : 'Simform'}); // doubt : we cannot access the property of return obj...
const mergeobj = merge({ name: "User1" }, { job: "Simform" });
console.log(mergeobj.name);

//keyof
function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return obj[key];
}

console.log(extractAndConvert({ company: "simform" }, "company"));

//Generic in  class
class Genricclass<T extends string | number> {
  private data: Array<T> = [];
  additem(item: T) {                     
    this.data.push(item);
  }
  removeitem(item: T) {
    if (this.data.indexOf(item) === -1) return "Data not found";
    return "Removed data : " + this.data.splice(this.data.indexOf(item), 1)[0]; //chech out intiution behind it
  }
  getitems() {
    return this.data;
  }
}
const text = new Genricclass<string>();
text.additem("1");
text.additem("2");
text.additem("3");
console.log(text.removeitem("1")); //<------
console.log(text.getitems());
