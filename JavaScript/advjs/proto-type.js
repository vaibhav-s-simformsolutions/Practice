//OOP using prototype chain
function User2 (name){
    this.name = name;
}
User2.prototype.greet = function (){
    return "Hello " + this.name;
} //Arrow function not work bcz it has lexical scope

const user21 = new User2('Vaibhav');
// console.log(user21.greet());
// console.log(user21.__proto__ , User.prototype)