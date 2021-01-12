// OOP
// function userfunc(name,score){
//     newobject = {}
//     newobject.name = name;
//     newobject.score = score;
//     newobject.incre = function(){
//         this.score++;
//     }
//     return newobject;
// }
// user1 = userfunc("vaibhav",9);
// user2 = userfunc("jaimeen",10);
// user2.incre()
// console.log(user1,user2)


//---------------------------------------------------------------


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


//---------------------------------------------------------------
class User{
    constructor(username,email,password){
        this.username = username;
        this.password = password;
        this.email = email;
    }
    static totalUser(){
        console.log("This msg for all");
    }
    register(){
        console.log(this.username + " Successfully Registered");
    }
}

// User.totalUser() //This call for static

// let user1 = new User("vaibhav","abc@gmail.com","123");
// user1.register();

//Inheritance
class Member extends User{
    constructor(username,email,password,memberpakage){
        super(username,email,password);
        this.memberpakage = memberpakage;
    }
    getPackage(){
        console.log(this.username + " Subscribed to " +this.memberpakage +" package !!!");
    }
}

// Member.totalUser();
let vs = new Member("vaibhav","abc@gmail.com","123","Standard");
vs.register();
vs.getPackage();



//hidden classes----------------------------------------
let t1 = Date.now();
function Animal1(a,b){
    this.a = a;
    this.b = b;
}
const obj1 = new Animal1(1,2);
const obj2 = new Animal1(3,4);
console.log(Date.now(),t1);

t1 = Date.now();
class Animal{
    constructor(a,b){
        this.a = a;
        this.b = b;
    }
}
const obj3 = new Animal(1,2);
const obj4 = new Animal(3,4);
console.log(Date.now(),t1);




//we can use functional programming also...
//compose

// const compose = (f , g) => (data) => f(g(data));

// const mul3 = (data) => data*3;
// const absl = (data) => Math.abs(data);

// const mulandabs = compose(mul3,absl);
// console.log(mulandabs(-50));