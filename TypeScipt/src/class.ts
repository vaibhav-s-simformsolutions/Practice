import * as data from './intersectionUnion';

// public - everyone
// private - only me
// protected - me and my sub class


class Contect implements data.HasEmail{
    public name : string;
    public email : string;
    protected age : number;
    private password : string; //further code we make sure assign the value of private variable ( private password !: string)
    constructor(name : string,email:string,age : number,password : string){
        this.name = name;
        this.email = email;
        this.age = age;
        this.password = password;
    }
}
const tmp = new Contect("vaibhav","xyz@gmail.com",20,"10");
tmp.email , tmp.name // age can not be accesible



//abstract classes
abstract class Base implements data.HasMobile {
    public name : string;
    public mobile : number;
    constructor (name : string , mobile : number ){
        this.name  = name;
        this.mobile = mobile;
    }

    abstract getdetails():string ;

}

class InhariteClass extends Base{
    protected age : number;
    constructor(name : string , mobile  :number,age : number){
        super(name,mobile);
        this.age = age;
    }
    public getdetails(){
        return "My name is : " + this.name +"\nMy number is : " + this.mobile;
    }
}

const myobj = new InhariteClass("Vaibhav",4567893498,20);
// console.log(myobj.name , myobj.mobile);
console.log(myobj.getdetails())