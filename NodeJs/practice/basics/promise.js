const work = new Promise((resole,reject)=>{
    setTimeout(()=>{
        // resole([1,2,3]);
        reject('Error!!!');
    })
})

work.then((data)=>{
    console.log(data);
}).catch((err)=>{
    console.log(err);
})