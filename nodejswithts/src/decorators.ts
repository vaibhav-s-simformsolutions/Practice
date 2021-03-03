function Logger(logstring : string){
    return function(constructor : any){
        console.log(logstring);
        // console.log(constructor)
        // const  p = new constructor('Heyya');
        // console.log(p.name);
    }
}

function SecondDecorator(logstring : string){
    return function(constructor : any){
        console.log(logstring);
        // console.log(constructor)
        // const  p = new constructor('Heyya');
        // console.log(p.name);
    }
}

function Log(target : any , propertyName : string | Symbol){
    console.log('Property decorators 1!!!');
    console.log(target,propertyName)
}
function Log2(target : any , propertyName : string | Symbol){
    console.log('Property decorators 2!!!');
    console.log(target,propertyName)
}

@Logger('LOGGING - PERSON ....')
@SecondDecorator('Second DEcorator') //decorators run upper direction sequence
class DecoratorsPractice {
    @Log
    @Log2
    name : string
    constructor( name : string){
        console.log("before assignment");
        this.name = name;
        console.log("Constructor is calling .... ");
    }
}

const decorators = new DecoratorsPractice('Simform');



