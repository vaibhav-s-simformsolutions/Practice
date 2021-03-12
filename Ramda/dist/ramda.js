"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ramda_1 = __importDefault(require("ramda"));
let p; //print + debug
//Note : Whatever you wanna print just put 'p =' before iteration
//1 . __ 2.substract 3.add
const dec = ramda_1.default.subtract(ramda_1.default.__, 1); //waiting for fun args (curry func)
///if you don't put this R.__ than explicitly it takes (1,R.__)
dec(5); //-->4
ramda_1.default.add(2)(3); //-->5
ramda_1.default.add(2)(3);
//4 . map
const double = ramda_1.default.multiply(2);
ramda_1.default.map(double, [1, 2, 3, 4]); //[ 2, 4, 6, 8 ]
//5 . adjust
const firstelechange = ramda_1.default.adjust(1, ramda_1.default.subtract(ramda_1.default.__, 10));
firstelechange([10, 70, 30, 40]); //index,func.arr
ramda_1.default.adjust(1, ramda_1.default.add(10), [10, 20, 10]);
//6 . all (basic : logical && between all ele)
const equal = (z) => z == 3;
ramda_1.default.all(ramda_1.default.equals(3), [3, 3, 3]); //func , arr -->true
ramda_1.default.all(equal, [3, 3, 4]); //func , arr ---> false
ramda_1.default.all(ramda_1.default.lte(ramda_1.default.__, 10), [5, 6, 7, 10]); //-->true
//7. allpass --> if only all function return true
ramda_1.default.allPass([ramda_1.default.gte(ramda_1.default.__, 5), ramda_1.default.lte(ramda_1.default.__, 12)])(7); //arr of func and one paramer ( not multiple paramter)
ramda_1.default.all(ramda_1.default.allPass([ramda_1.default.gte(ramda_1.default.__, 5), ramda_1.default.lte(ramda_1.default.__, 12)]), [5, 6, 7, 8]); //--> true
//8 . anypass --> logical or among all function
ramda_1.default.all(ramda_1.default.anyPass([ramda_1.default.gte(ramda_1.default.__, 5), ramda_1.default.lte(ramda_1.default.__, 12)]), [5, 6, 7, 8, 15]); //--> true
//9 .ap (like apply)
ramda_1.default.ap([ramda_1.default.multiply(2), ramda_1.default.add(5)], [1, 2, 3]); //[ 2, 4, 6, 6, 7, 8 ] concate all functionm with all ele (cross product)
ramda_1.default.ap([ramda_1.default.multiply(2), ramda_1.default.add(5)])([1, 2, 3]); //[ 2, 4, 6, 6, 7, 8 ]
//10 .repeat
ramda_1.default.repeat("Hi", 5); //[ 'Hi', 'Hi', 'Hi', 'Hi', 'Hi' ]
//11. aperture
ramda_1.default.aperture(3, [1, 2, 3, 4, 5]); //=> [ [ 1, 2, 3 ], [ 2, 3, 4 ], [ 3, 4, 5 ] ]
ramda_1.default.aperture(6, [1, 2, 3, 4, 5]); //[]
//12 .append & 13 .prepend
ramda_1.default.append(1, [2, 3]); //=> [ 2, 3, 1 ]
ramda_1.default.prepend(1, [2, 3]); //=> [ 1, 2, 3 ]
//14 .apply
ramda_1.default.apply(Math.max, [1, 2, 55, 67, 0]); //=> 67 --> (func , arr)
ramda_1.default.apply(Math.min, [1, 2, 55, 67, -10]); // -10
// 15 . applySpec **********
ramda_1.default.applySpec({
    sum: ramda_1.default.add,
    extra: {
        mul: ramda_1.default.multiply,
    },
})(5, 10); //{ sum: 15, exxtra: { mul: 50 } }
//16 . applyTo
ramda_1.default.applyTo(42)(ramda_1.default.add(1)); //-->43
// 17. sort , Comparator
const comaprefunc = ramda_1.default.comparator((a, b) => a < b); //a<b -->inc a > b -->desc
ramda_1.default.sort(comaprefunc, [5, 4, 3, 2, 1]); //asc order --> (func,arr)
//18.ascend , 19.decend
const p1 = { age: 10 };
const p2 = { age: 20 };
const p3 = { age: 30 };
const sortfunc = ramda_1.default.ascend(ramda_1.default.prop("age")); //asc
const sortfuncdesc = ramda_1.default.descend(ramda_1.default.prop("age")); //dec
ramda_1.default.sort(sortfunc, [p2, p1, p3]);
ramda_1.default.sort(sortfuncdesc, [p2, p1, p3]);
//20. nullary --> no args
//21.nAry --> n args
ramda_1.default.nAry(4, Math.max)(1, 2, 3, 4); //(int,fn)
// R.binary(Math.max)(1,2,3,4)  last two args is meaningless //bydefault int == 2
//22.pipe, 23.bind
function Greeter(phase) {
    this.phase = phase;
}
Greeter.prototype.greet = function (name) {
    return this.phase + ", " + name;
};
const helloer = new Greeter("Hello");
// console.log(helloer.greet("vaibhav"));
ramda_1.default.pipe(ramda_1.default.toUpper, ramda_1.default.bind(helloer.greet, helloer)
// console.log
)("simform");
//call
const call = (fn, ...args) => fn(...args);
call(Math.max, 30, 10, 25);
ramda_1.default.call(ramda_1.default.add, 12, 20);
ramda_1.default.call(ramda_1.default.aperture, 3)([1, 2, 3, 4, 5]);
//flatten
ramda_1.default.flatten([1, 2, 3, [4, 5, [6, 7, [8, 9, [10]]]]]); //[ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
//clone
ramda_1.default.clone([1, 2, 3]);
//clamp
ramda_1.default.clamp(1, 10, -5); //1 (min,max,ele)
ramda_1.default.clamp(1, 10, 15); //10
ramda_1.default.clamp(1, 10, 4); //4
ramda_1.default.clamp("b", "z", "a"); //ascii
//complement
const comapaarision = (x) => x == "foo";
ramda_1.default.complement(comapaarision)("foo");
!comapaarision("foo");
//compose & pipe
ramda_1.default.compose(console.log, ramda_1.default.multiply(10), ramda_1.default.add(5))(5); //100
ramda_1.default.pipe(ramda_1.default.multiply(10), ramda_1.default.add(5), console.log)(5); //100
//composeP & pipeP
const articles = {
    1: { author: 10 },
    2: { author: 20 },
};
const author = {
    10: { name: "abc" },
    20: { name: "def" },
};
const getArticle = (id) => Promise.resolve(articles[id].author);
const getauthor = (id) => Promise.resolve(author[id]);
// getArticle(1)
//   .then((article) => getauthor(article.author))
//   .then((authordata) => console.log(authordata));
const practiceoncomposeP = ramda_1.default.composeP(getauthor, getArticle);
const practiceonpipeP = ramda_1.default.pipeP(getArticle, getauthor);
// practiceonpipeP(2)
// .then(console.log)
// practiceoncomposeP(2)
// .then(console.log)
//concat
ramda_1.default.concat([1, 2, 4], [6, 7, 8]);
ramda_1.default.concat("abc", "def");
//cond
const functionofcond = ramda_1.default.cond([
    [ramda_1.default.equals(10), ramda_1.default.always(`It's 10`)],
    [ramda_1.default.equals(20), ramda_1.default.always(`It's 20`)],
    [ramda_1.default.T, ramda_1.default.always("Not 10 or 20")],
]);
functionofcond(30);
//contains (find)
ramda_1.default.contains(4, [1, 2, 3]); //--> false
ramda_1.default.contains(3, [1, 2, 3]); // --> true
//converge --> when you have more than two function with same parameter and after you parform operation on that that time you can go for 'converge'
ramda_1.default.converge(ramda_1.default.concat, [ramda_1.default.toLower, ramda_1.default.toUpper])("Simform");
ramda_1.default.call(ramda_1.default.add, 110, 200);
ramda_1.default.converge(ramda_1.default.call, [
    ramda_1.default.unary(ramda_1.default.add),
    ramda_1.default.add(2), //100 + 2 --> 102
])(100);
ramda_1.default.countBy(ramda_1.default.toLower)(["a", "b", "A", "a", "b"]);
//set operation
ramda_1.default.difference([1, 2, 3, 4, 5])([1, 2, 3]);
ramda_1.default.difference([1, 2, 3, 4, 5], [1, 2, 3]);
//intersection
ramda_1.default.intersection([1, 2, 3, 4, 5], [1, 2, 3]);
//union
ramda_1.default.union([1, 2, 3, 4, 5], [1, 2, 3, 9, 10]);
//symmetricDifference
ramda_1.default.symmetricDifference([1, 2, 3, 4], [1, 2, 4, 3, 5]);
//drop
ramda_1.default.drop(1, [1, 2, 3, 4]);
ramda_1.default.dropLast(1, [1, 2, 3, 4]);
ramda_1.default.dropWhile((x) => x < 3, [1, 2, 3, 4, 5, 6, 7, 8]);
ramda_1.default.dropLastWhile(ramda_1.default.lte(5), [1, 2, 3, 4, 5, 6, 7, 8]);
ramda_1.default.dropRepeats([1, 2, 3, 3, 3, 4, 3]);
//take
ramda_1.default.take(2, [1, 2, 3, 4]);
ramda_1.default.takeLast(2, [1, 2, 3, 4]);
ramda_1.default.takeWhile((x) => x < 3, [1, 2, 3, 4, 5, 6, 7, 8]);
ramda_1.default.takeLastWhile(ramda_1.default.lte(5), [1, 2, 3, 4, 5, 6, 7, 8]);
ramda_1.default.either(ramda_1.default.gte(ramda_1.default.__, 5), ramda_1.default.lte(ramda_1.default.__, 10))(4);
ramda_1.default.both(ramda_1.default.gte(ramda_1.default.__, 5), ramda_1.default.lte(ramda_1.default.__, 10))(4);
ramda_1.default.endsWith("c", "abc");
ramda_1.default.eqProps("a", { a: 10, b: 203 }, { a: 2 });
const obj = {
    name: "abc     ",
    age: 10,
};
const trasformation = {
    name: ramda_1.default.trim,
    age: ramda_1.default.add(1),
};
ramda_1.default.evolve(trasformation, obj);
const evenfunction = (x) => x % 2 == 0;
ramda_1.default.filter(evenfunction, [1, 2, 3, 4, 5, 6, 7, 8]);
//replace
ramda_1.default.replace("foo", "bar", "afoo foo foo"); //=> 'bar foo foo'
ramda_1.default.replace(/foo/, "bar", "afooa foo foo"); //=> 'abara foo foo'
ramda_1.default.replace(/foo/g, "bar", "fooa foo foo"); //=> 'bara bar bar'
//find
const findpractice = [
    { a: 1, b: 0 },
    { a: 1, b: 1 },
];
ramda_1.default.find(ramda_1.default.propEq("a", 1))(findpractice);
ramda_1.default.findLast(ramda_1.default.propEq("a", 1))(findpractice);
// const func = (x) => x==2;
ramda_1.default.find((x) => x == 2)([1, 2, 3, 4, 5]);
ramda_1.default.findIndex((x) => x == 2, [-1, -2, 2, 3, 4, 5, 2]);
ramda_1.default.findLastIndex((x) => x == 2, [-1, -2, 2, 3, 4, 5, 2]);
//group
const students = [
    { name: "Abby", score: 84 },
    { name: "Eddy", score: 58 },
    { name: "Jack", score: 69 },
];
const byGrade = ramda_1.default.groupBy(function (student) {
    const score = student.score;
    return score < 65
        ? "F"
        : score < 70
            ? "D"
            : score < 80
                ? "C"
                : score < 90
                    ? "B"
                    : "A";
});
// console.log(byGrade(students));
const similarity = [0, 1, 3, 4, 2, 5];
ramda_1.default.groupWith((a, b) => a + 1 === b, similarity);
ramda_1.default.includes(5, [1, 2, 3]);
ramda_1.default.includes({ name: "Abby", score: 84 }, students);
ramda_1.default.ifElse((a) => a < 10, ramda_1.default.inc, ramda_1.default.dec)(8);
p = ramda_1.default.uniqWith(ramda_1.default.eqBy(String))([1, 1, 1, 1, 2, 3, 1, 1, 1, 1, 4]);
console.log(p);
