// import { ADDRGETNETWORKPARAMS } from "dns";

type typeOfPerson = {
  firstname: string;
  age: number;
  hobbies: String[];
};

const person: typeOfPerson = {
  firstname: "abc",
  age: 20,
  hobbies: ["badminton", "Table Tennis"],
};

person.hobbies.forEach((hobby) => {
  console.log(hobby);
});

type unionType = number | string;

// console.log(person);
// type add = Function;

//function type
type add = (a: number, b: number) => number;

function add(n1: number = 0, n2: number = 0): undefined {
  console.log(n1 + n2);
  return;
  // return; if return type is undefined than we must have return statement.
}
add(10, 10);

const addAndPrint = (
  n1: number,
  n2: number,
  callback: (ans: number) => void
): void => {
  callback(n1 + n2);
};

addAndPrint(10, 12, (ans) => {
  console.log(ans);
  return;
});

let x: never;
// x = 10 //we cannot  assign val it's horrible Not preffered

const arr : number[] = [1,2,4]
arr.push(...[5,6])
console.log(arr)

const {firstname,age} = person;
console.log(firstname,age); 