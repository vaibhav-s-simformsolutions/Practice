
fetch('http://localhost:3000/weather?location=Ahmedabad').then((res)=>{
    res.json().then((data)=>{
        if(data){
            console.log(data);
        }
        else{
            console.log('Error');
        }
    })
})
console.log(10);