
abstract class Dept{
    // private name : string;
    constructor( protected readonly id : string,private name : string){
        // this.name = n;
    }
    
    abstract describe(this : Dept) : void;
}

// const obj = new Dept('1','Computer');
// console.log(obj.name)
// console.log(obj.describe())

// const dummy = {name : 'va',describe : obj.describe}
// console.log(dummy.describe()) // TODO : doubt


class ITDept extends Dept{
    admin : string []
    constructor(id : string,admins : string []){
        super(id,'IT');
        this.admin = admins;
    }
    describe(this : ITDept){
        return `IT Department : ${this.id}`;
    }
    //getter & setter get must have return statement and set have args
    //static method --> which is call directly by class
}

const it = new ITDept('2',['a','b','c']);
console.log(it.describe())



//interface
interface Greet {
    name : string;
    details() : void;
}

interface Person extends Greet {
    age:number;
}
const user1 : Person = {
    name : 'abc',
    age : 20,
    details(){
        console.log(`${this.name} : ${this.age}`);
    }
}
user1.details()

