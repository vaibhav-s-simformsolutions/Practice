//--------------------------------------------------------------------------------
// String  ...

// var s = "I am Vaibhav";
// // console.log(s.length)
// console.log(s.slice(5,9))
// console.log(s.indexOf("am"))
// console.log(s.lastIndexOf("am"))
// console.log(s.substr(5,7))
// s.replace("am","bruteforse") //-----------------doubt ---------
// console.log(s)
// console.log(s.toLowerCase())
// console.log(s.toUpperCase())
// console.log(s.trim())
// console.log(typeof s.split(" "))

// var x = "vaibhav"
// var y = 10
// var z = 10
// var ans = `${x}${y+z}`
// console.log(ans) //ans is string



//-------------------------------------------------------------------------------
//number controller with math

// var n = 9.7654
// console.log(n.toFixed())
// console.log(n.toFixed(2))
// console.log(n.toPrecision())
// console.log(Math.round(n))
// console.log(Math.ceil(n))
// console.log(Math.floor(n))
// console.log(5**2)
// console.log(Math.pow(5,2))
// console.log(Math.abs(-4.5))
// console.log((Math.random())*100)
// console.log(Math.sqrt(25))


//---------------------------------------------------------------------------------
//Array

// const arr = []
// for(var i = 0 ; i < 10 ; i++){
//     arr.push(50 - i)
// }
// arr.sort((a,b) => a-b)
// console.log(arr)
// console.log(arr.length)
// var tmp = arr.pop() //50
// console.log(tmp)
// arr.unshift(5) // push begin 5
// console.log(arr)
// arr.shift(5) // pop from begin
// console.log(arr)

// console.log(arr.join(" -> "))
// arr.splice(1,2) // delete (index,how many times)
// console.log(arr)

// const arr2 = [1,2,3,4]
// arr.concat(arr2) // ----------------doubt--------------
// console.log(arr2.constructor)
// console.log(arr)

//----map-----
// const m = [1,2,3,4,5]
// console.log(m)

// const mans = m.map((value)=>value*2)
// // const mans = m.map((value,index,array)=>value*2) //- another syntax
// console.log(mans)
// //----filter----
// const fans = m.filter((value)=>value>3)
// // const fans = m.filter((value,index,arr)=>value>3) //-- another syntax
// console.log(fans)
// // -----reduce-----
// // var rans = m.reduce((total,value) => total + value)
// var rans = m.reduce((total,value,index,array)=>total + value) //--another syntax
// console.log(rans)

//------------------------------------------------------------------------------------
//Loop
// const itr = [1,2,3,4,5,6,7]
// for(var i = 0 ; i < itr.length ; i++){
//     if(itr[i] == 2) continue;
//     if(itr[i]==6)break; 
//     console.log(itr[i])
// } 
// for(var x of itr) console.log(x)

// var  i = 0;
// while(itr[i]){
//     console.log(itr[i]);
//     i++; 
// }

// itr.forEach((ele,index) => {
//     console.log(ele);
//     console.log(index);
// });


// ---------------------------------------------------------------------------------------
// Type Conversion
// console.log((12300).toString(10))
// console.log((16).toString(2)) //binary
// console.log(Number("-1230"))
// console.log(-Infinity)
// console.log(Infinity)


//function
// const fun = function(){
//     return "Hello Vaibhav !!";
// }
// const fun = () => "Hello Vaibhav !!";
// console.log(fun()) 


// var n = 5;
// var x = ""
// for(let i = 0; i < n ; i++){
//     console.log(x.padStart(n-i," ") + x.padStart(i + 1,"12345"))
// }



//JSON
x = [{
    "userId": 1,
    "id": 1,
    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
}]
for(i of x){
    console.log(i); //keys
}
for(i in x){    
    console.log(i); //index
}