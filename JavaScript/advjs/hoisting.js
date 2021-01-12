//callback Queue-----------------------------------------
// console.log(1);
// setTimeout(()=>{console.log(2)},1000);
// setTimeout(()=>{console.log(3)},500);
// console.log(4);


//Hoisting-----------------------------------------------
// console.log(x) //partially hoisted
s1(); // fully hoisted
// s2(); // bcz it'a var and it's not defined yet.
var x = 5;
function s1(){
    console.log("s1")
}
var s2 = function (){
    console.log("s1")
}

var favfood = "grapes";
var favf = function(){
    console.log(favfood);
    var favfood = "apple"; // here new execution context created so upper it's undefined...
    console.log(favfood);
}
favf();



// this ----------------------------------------------------------
const obj = {
    name : "Vaibhav" ,
    work(){
        return "code done by " + this.name;
    },
    workHard(){
        return this.work() + " in just 5 hour!!!";
    }
}
console.log(obj.workHard())


// function constructor call
// const foo = new Function('num','return num+4');
// console.log(foo(4));


// function a(fn){
//     fn();
// }
// a(function(){console.log("HI")});