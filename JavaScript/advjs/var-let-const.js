function testvar(){
    var a = 50;
    if(true){
        var a = 30;
        console.log(a);
    }
    console.log(a);
}
function testlet(){
    let a = 50;
    if(true){
        let a = 30;
        console.log(a);
    }
    console.log(a);
}

// testvar();
// testlet();

const arr = []
arr.push('a');
arr.push('b');
// arr = "vaibhav"  //--> convert arr to string and it's constant so we can not chande direct referance
console.log(arr);


for(var i = 0 ; i < 5 ; i++){
    setTimeout(()=>{
        console.log(i);
    },3000);
}

for(let i = 0; i < 5;i++){
    setTimeout(()=>{
        console.log(i);
    },3000);
}

function outer(obj){
    console.log(this.name);
    return function inner(){
        console.log(this.name);
    }
}
b = {name : "john"};
const out = outer(b);
out();