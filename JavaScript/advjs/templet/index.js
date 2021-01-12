let name = "vaibhav";

function makeUpperCase(word){
    return word.toUpperCase();
}
let templete = `<h1> Hello, ${makeUpperCase(name)}</h1>
<p>This is a Templete</p>`

document.getElementById("templete").innerHTML = templete;