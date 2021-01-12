// destructring 

// data = () => [1,2,3,4,5,6];
// var [first,second = 10,,third,...forth] = data() //second is by dafult 10
// console.log(first , second , third , forth);


// function dataobject(){
//     return {a:1, b:2,c:3,d:4,e:5};
// }
// var {
//     a:first,
//     b:second = 10,
//     c:third,
//     ...forth
// } = dataobject();
// console.log(first , second , third,forth);


// var arr = [1,2,3]
// arr = arr.map((v)=> v*2)
// console.log(arr)


// var s = "vaibhav"
// console.log([...s])




// args (spread operator)---------------------------------------
// function sum(...args){
//     let t = 0;
//     for(x of args){
//         t += x;
//     }
//     return t;
// }
// console.log(sum(1,2,3,4,5))