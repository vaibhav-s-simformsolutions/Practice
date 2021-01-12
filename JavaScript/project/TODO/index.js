function addelement(){
    ele = $('form').serializeArray()[0].value;
    if(ele == ""){
        alert("Enter more than 1 character !!!");
        return;
    }
    localStorage.setItem(ele,"false");
}
function setElement(id){
    
    let ele = document.getElementById(id).textContent;
    let diffbit = localStorage.getItem(ele);
    diffbit = (diffbit== "false")? "true" : "false";
    localStorage.setItem(ele,diffbit);
}
function template(name,index){
    let getid = `onClick="getIdByClick(this.id)"`;
    let getline = `style = "text-decoration : line-through;"`;
    // style="text-align: center;"
    let template1 ;
    let typecheck = localStorage.getItem(name);
    if(typecheck == "true"){
        template1 = `<li id = "li_${index}" ${getline} ${getid}>${name}</li>`;
    }else{
        template1 = `<li id = "li_${index}" ${getid}>${name}</li>`;
    }
    return template1;
}

function getelements(){
    let localdata = this.localStorage;
    // console.log(localdata);
    var template2 = `<ul >`;
    let j = 0;
    for(let i in localdata){
        if(localStorage.getItem(i) != undefined){
            template2 += template(i,j);
            j++;
        }
    }
    template2 += `</ul>`;
    return template2;
}

function getIdByClick(clicked) { 
    console.log(clicked);
    let x = document.getElementById(clicked).style.textDecoration;
    setElement(clicked);
    document.getElementById(clicked).style.textDecoration = (x == "line-through")?"":"line-through";
    
}


function deleteElement(){
    let localdata = this.localStorage;
    for(let i in localdata){
        let ele = localStorage.getItem(i);
        if(ele != undefined && ele == "true"){
            localStorage.removeItem(i)
        }
    }
}

// console.log(getelements())
document.getElementById("mylist").innerHTML = getelements();