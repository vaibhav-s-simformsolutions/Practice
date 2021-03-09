type numString = number | string;
const typeTest : numString = 10;

// type deadlock1 = number | deadlock2;
// type deadlock2 = number[] | string | deadlock1;

interface Human {
    name : string;
    age : number;
}
interface Student extends Human {
    qualification : string;
}

interface func1 {
    (x:number,y:number):void;
    (x:string,y:string):void;
}

const addtwo:func1 = (x,y) => {
    console.log(x + y);
}
addtwo(1,2)
addtwo("1","2")
// addtwo(1,"2") //not working bcz of function signature overloading


interface phonebook {
    // [name : string] : undefined | {
    abc: undefined | {
        areacode : number;
        num : number;
    } 
}
interface phonebook {
    [name : string] : undefined | {
        areacode : number;
        num : number;
    } 
}

let phonebookdiary : phonebook = {abc : {areacode : 123,num:123} };
phonebookdiary.bcd = {areacode : 123,num:123};
// phonebookdiary.abc = {areacode : 123,num:123};
console.log(phonebookdiary);


