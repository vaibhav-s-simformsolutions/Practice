const second = (param) => {
    setTimeout(()=>{
        return param*2;
    },2000)
}
const ans = second(5);
console.log(ans); //undefined


//callback
const first = (param , callback) => {
    setTimeout(()=>{
        param *= 2;
        callback(param);
    },2000)
    return param;
}

first(5,(data)=>{
    console.log(data); //10
})



