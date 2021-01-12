var txt = "";
var person = {fname:"John", lname:"Doe", age:25}; 
// person.temp = 52;
var x;
for (x in person) {
  txt += person[x] + " ";
}
console.log(txt)