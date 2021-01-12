//Why:-
//Memory Efficiency...
//Encapsulation...


//callback function

// const getarr = (arr, intruction) => {
//     console.log(intruction);
//     for (var i = 0; i < arr.length; i++) {
//         arr[i] = intruction(arr[i]);
//     }
//     return arr;
// }
// const mul2 = (num) => num*2; //callback function
// console.log(getarr([1,2,3,4],mul2));


const mulby = (n1) => (n2) => n1*n2;
const mulby2 = mulby(2);
// console.log(mulby2(4));
// console.log(mulby(2)(8))

// ------------------------------------------------------
//closure
function factorial(){
    return function factnum(n){
        if(n==1 || n==0) return 1;
        return powe(n-1)*n
    }
}
const f = factorial();
// console.log(f(500))

// closure with backpack memory
function outer(){
    c = 0;
    return function inner(){
        c++;
        return c;
    }
}

//clouser with callback
function outer(fact){
    return function inner(n){
        return fact(n);
    }
}
const fact = (n)=>{
    if(n==1 || n==0) return 1;
    return n*fact(n-1);
}
// console.log(fact(5));
//Test
const tmp = outer(fact)
console.log(tmp(5))


// function callme(){
//     setTimeout(()=>{
//         console.log(x);
//     },3000)
//     const x = "HI I was there"; //Hoisting bcz of callback queue...
// }
// callme();



//Encaptulation-----------------------------------------------------------------

const foo = ()=>{
    const foo1 = ()=>{
        console.log("foo1");
        foo2();
    }
    const foo2 = ()=>{
        console.log("foo2");
    }
    return {
        foo1 : foo1,
        // foo2 :foo2
    }
}
const fobj = foo();
// fobj.foo1()


//Amazing callback stack example


