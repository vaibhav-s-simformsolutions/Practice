const lastele = <T>(arr: T[]): T => {
  return arr[arr.length - 1];
};
console.log(lastele([1, 2, 3]));
console.log(
  lastele<string>(["1", "2", "3"])
);
console.log(lastele(["1", "2", 3]));


// fixed property
interface makeFullNameInterFace {
  firstname: string;
  lastname: string;
}
const makeFullName = <T extends makeFullNameInterFace>(
  obj: T
) : T => {
  return {
    ...obj,
    fullname: obj.firstname + " " + obj.lastname,
  };
};
const v4 = makeFullName({ firstname: "ABC", lastname: "EFG", age: 20 });
// const v5 = makeFullName({firstname :'ABC',other : 'EFG',age :20}); //error bcz of lastname
console.log(v4);





interface Wrap<X> {
  value: X;
}
let wrapvar: Wrap<{ id: string }> = { value: { id: "vaibhav" } };
wrapvar.value.id = "vaibhav1"
console.log(wrapvar.value)




// function arrtodict<T extends {key : string}>(array : T[]):{[k : string]:T}{

// }
