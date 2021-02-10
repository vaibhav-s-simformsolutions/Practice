// const { request } = require("express");

const request = require('request');

const geolocation = (address,callback)=>{

    const url =
        "https://api.mapbox.com/geocoding/v5/mapbox.places/" +
        address +
        ".json?access_token=pk.eyJ1IjoiZGhydXZpbi1zaW1mb3JtIiwiYSI6ImNra2kzYW51djAycmgydHM3czc0YXBodmoifQ.rgXt6qhHea5qWhNxK6VNYA";

    request({url:url,json:true},(err,{body})=>{
        if(err){
            callback("Network Error",undefined);
        }else{
            // console.log(body.features[0].center)
            const latitude = body.features[0].center[1];
            const longitude = body.features[0].center[0];
            callback(undefined,{
                latitude : latitude,
                longitude : longitude,
            });
            // const data =  callback(undefined,{latitude,longitude})
            // console.log(data);
            // return data;
        }
    })
    
}
const weatherapi = (latitude,longitude,callback)=>{
    url = 'http://api.weatherstack.com/current?access_key=388dbff5bc20d415dd501e507afc695e&query='+latitude+','+longitude+'&units=f';
    request({url:url,json:true},(err,{body:{current : current}})=>{
        if(err){
            callback("Network Error",undefined);
        }else{
            // console.log(current)
            callback(undefined,current)
        }
    })
}
// const geolocation = (address)=>{
//     return geoloc(address,weather);
// }
// geoloc('Ahmedabad',weather);
module.exports = {
    geolocation : geolocation,
    weatherapi : weatherapi,
};