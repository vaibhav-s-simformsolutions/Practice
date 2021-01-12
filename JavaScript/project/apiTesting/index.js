// function getdata(url){
//     // url = 'text';
//     fetch(url,
//         {
//             headers : { 
//               'Content-Type': 'application/json',
//               'Accept': 'application/json'
//              }
//           })
//     .then((res)=>{
//         return res.json;
//     }).then((data)=>{
//         // document.getElementById("getdata").innerHTML = data.status
//         console.log(data)
//     })
// }

// getdata('https://reqres.in/api/users/2')

// getimg()
// .then(res =>{
//     console.log("Yay Gotcha !!!")
// })
// .catch(err=>{
//     console.error(err);
// })

// async function getimg(){
//     const res = await fetch('temp.json');
//     const data = await res.json();
//     console.log(data)
//     // document.getElementById('focus').src = URL.createObjectURL(data);
//     document.getElementById('fdata').innerHTML = JSON.stringify(data,null,3);
// }

// fetch('focus.jpeg').then(res =>{
//     return res.blob();
// }).then(data =>{
//     console.log(data);
//     document.getElementById('focus').src = URL.createObjectURL(data);
// })




//---------------------------------------------------------
// $("input[id='post']").onclick(function(){
//     console.log("hello");
//     document.getElementById('params').style.display = "none";
// });


//-----------------------------------------------------------------

function onparam(){
    document.getElementById('params').style.display = "none";
}
function offparam(){
    document.getElementById('params').style.display = "block";
}


// data = {}
function fetchdata(){
    const starttime = Date.now();
    fetchapi()
    .then((res)=>{
        time.innerHTML = Date.now() - starttime;
        document.getElementById('colorchangebyerror').style.color = "green";
    })
    .catch(err => {
        console.error(err);
        document.getElementById('status').innerHTML = 404;
        document.getElementById('fdata').innerHTML = "";
        document.getElementById('colorchangebyerror').style.color = "red";
    })
    
}
async function fetchapi(){
    data = $('form').serializeArray();
    
    var ans;
    let res;
    if(data[0]['value'] == "get"){
        res = await fetch(data[1]['value']);
    }
    else{
        post_settings = {
            method: 'POST',
            headers: {
                // Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body : data[2]['value']
        };
        res = await fetch(data[1]['value'],post_settings);
    }
    console.log(res)
    document.getElementById('status').innerHTML = res.status;
    ans = await res.json();
    document.getElementById('fdata').innerHTML = JSON.stringify(ans,null,3);
}






// fetch('https://jsonplaceholder.typicode.com/posts', {
//   method: 'POST',
//   body: JSON.stringify({
//     title: 'foo',
//     body: 'bar',
//     userId: 1,
//   }),
//   headers: {
//     'Content-type': 'application/json; charset=UTF-8',
//   },
// })
//   .then((response) => response.json())
//   .then((json) => console.log(json));