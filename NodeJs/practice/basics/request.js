//request
const request = require('request');

url = "http://ip.jsontest.com/";
request({url:url,json:true},(err,{body})=> {
    if(err){
        console.log(err);
    }else{
        console.log(body);
    }
})