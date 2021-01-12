var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var lastele = function (arr) {
    return arr[arr.length - 1];
};
console.log(lastele([1, 2, 3]));
console.log(lastele(["1", "2", "3"]));
console.log(lastele(["1", "2", 3]));
var makeFullName = function (obj) {
    return __assign(__assign({}, obj), { fullname: obj.firstname + " " + obj.lastname });
};
var v4 = makeFullName({ firstname: "ABC", lastname: "EFG", age: 20 });
// const v5 = makeFullName({firstname :'ABC',other : 'EFG',age :20}); //error bcz of lastname
console.log(v4);
var wrapvar = { value: { id: "vaibhav" } };
wrapvar.value.id = "vaibhav1";
console.log(wrapvar.value);
// function arrtodict<T extends {key : string}>(array : T[]):{[k : string]:T}{
// }
