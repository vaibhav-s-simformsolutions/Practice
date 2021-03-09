export interface HasMobile {
    name : string;
    mobile : number;
}
export interface HasEmail {
    name : string;
    email : string;
}

let contectInfo : HasEmail | HasMobile = 
    Math.random() > 5
    ? {
        name : "Vaibhav",
        mobile : 9876549
        }
    : {
        name : "Vaibhav",
        email : "abc@gmail.com"
        };

contectInfo.name // allow
// contectInfo.mobile //we can only access intersect property ...

let contectDetails : HasMobile & HasEmail = {
    //we must define all property...
    name : "Vaibhav",
    mobile : 234567,
    email : "abc@gmail.com",
}
// contectDetails.name,contectDetails.mobile,contectDetails.email // we can access all