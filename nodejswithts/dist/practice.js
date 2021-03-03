"use strict";
const person = {
    firstname: "abc",
    age: 20,
    hobbies: ["badminton", "Table Tennis"],
};
person.hobbies.forEach((hobby) => {
    console.log(hobby);
});
function add(n1 = 0, n2 = 0) {
    console.log(n1 + n2);
    return;
}
add(10, 10);
const addAndPrint = (n1, n2, callback) => {
    callback(n1 + n2);
};
addAndPrint(10, 12, (ans) => {
    console.log(ans);
    return;
});
let x;
const arr = [1, 2, 4];
arr.push(...[5, 6]);
console.log(arr);
const { firstname, age } = person;
console.log(firstname, age);
