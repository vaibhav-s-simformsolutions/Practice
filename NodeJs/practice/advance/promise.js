const add = (a,b)=>{
    return new Promise((resolve,rejects)=>{
        if(a<0 || b<0) return rejects('Non negative number ..!!!')
        setTimeout(()=>{
            resolve(a+b);
        },2000)
    })
}

//promise chaining...
// add(1,2).then((sum)=>{
//     return add(sum,5)
// }).then((sum2)=>{
//     console.log(sum2)
// }).catch((e)=>{
//     console.log(e);
// })


//async 
const fun = async () =>{
    // throw new Error('Error !!!')
    return 'Vaibhav';
}

// fun().then((result)=>{
//     console.log(result);
// }).catch((e)=>console.log(e));


const sum = async () => {
    const s = await add(1,99)
    const s1 = await add(s,100)
    const s2 = await add(s1,150);
    return s2;
}

sum().then((result)=>{
    console.log(result)
}).catch((e)=>{
    console.log(e);
})