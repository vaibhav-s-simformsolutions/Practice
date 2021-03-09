interface Conteactinfo{
    email : {
        name : string;
        email : string;
    };
    phoneno : {
        name : string;
        phoneno : number;
    };
    fax :{
        name : string;
        fax : number;
    };
}

function contectvalidation<K extends keyof Conteactinfo>(method : K,contectvalidationvar:(Conteactinfo[K])){
    //details
}
contectvalidation('email',{name : 'vaibhav',email : 'xyz@gmail.com'})
contectvalidation('phoneno',{name : 'vaibhav',phoneno:2345});
contectvalidation('fax',{name : 'vaibhav',fax:2345});


let mycontectinfo : Partial<Conteactinfo>; //for patial defination
type tmp = Conteactinfo ;
