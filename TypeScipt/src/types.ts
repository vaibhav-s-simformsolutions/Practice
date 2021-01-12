let let_var = "variable";
let_var = "new_variable"
const con_var = "vaibhav";
let Objl = {
    foo:"TEST"
}
const Objc = {
    foo:"TEST"
}
Objc.foo = "NEW_TEST"; //allowed
let anyvar; //any type



//we can also add string , number , boolean

// function add(a:number,b:number){
//     return a + b;
// }
const add = (a:number,b:number) => a + b;
const a = 2;
const b = 2;
// console.log(add(a,b));

//object
const obj:{
    name:string;
    age:number;
    role:[number,string];
}= {
    name:"vaibhav",
    age:18,
    role:[2,'Forward']
}
// console.log(obj);


enum Abcd {A,B,C,D};
// console.log(Abcd.C); //index

//Array
let x :string[] | number[];  //union
x = ["abc","xyz"]
x = [1,2,3]

//pre define
let num : number;
num = 10;

//We cannot assign diffrent datatype val after assign diffrent datatype
// var x = "10";
// x = 10   

//Union Type
let unionNumberAndString : number | string;
unionNumberAndString = 10;
unionNumberAndString = '10';


// let aa : [number,string,boolean,number[]]; //doubt
// aa.push(1,'ds',true,[1,2]);
// console.log(aa)

let mayOrMaynot : {
    name : string;
    mobile ?: number;
    email ?: string;
}
mayOrMaynot = {
    name : "Vaibhav",
    mobile : 27879,
}


function foo (x : number) : number {
    return x;
}
const foo1 = (x : number) : number => x;

function foo3(x : number){
    // return ;
    // if(x == 0)
    // return "vaibhav";
    // return [1,2,3]
}

function foo4(...x:number[]) : void{
    console.log(x);
}


//function signature overloading
function ararydiff (name : "number",...val: number[]) : void;
function ararydiff (name :"string",...val:string[]) : void;
//function defination
// function ararydiff (name : "number" | "string",...val: number[]|string[]) : void{
function ararydiff (name,...val) : void{
    if(name=="number"){
        (val as number[]).forEach((i)=>{console.log(i)});
    }else{
        (val as string[]).forEach((i)=>{console.log(i)});
    }
}
ararydiff("number",4,2,3);
ararydiff("string","1","2","3");
ararydiff("string",)
// ararydiff(1,2,3)//TODO : arraydiff have any type parameter
