import R, { eqBy, eqProps, groupBy, toUpper, transduce } from "ramda";

let p; //print + debug
//Note : Whatever you wanna print just put 'p =' before iteration

//1 . __ 2.substract 3.add
const dec = R.subtract(R.__, 1); //waiting for fun args (curry func)
///if you don't put this R.__ than explicitly it takes (1,R.__)
dec(5); //-->4
R.add(2)(3); //-->5
R.add(2)(3);

//4 . map
const double = R.multiply(2);
R.map(double, [1, 2, 3, 4]); //[ 2, 4, 6, 8 ]

//5 . adjust
const firstelechange = R.adjust(1, R.subtract(R.__, 10));
firstelechange([10, 70, 30, 40]); //index,func.arr
R.adjust(1, R.add(10), [10, 20, 10]);

//6 . all (basic : logical && between all ele)
const equal = (z: number): boolean => z == 3;
R.all(R.equals(3), [3, 3, 3]); //func , arr -->true
R.all(equal, [3, 3, 4]); //func , arr ---> false
R.all(R.lte(R.__, 10), [5, 6, 7, 10]); //-->true

//7. allpass --> if only all function return true
R.allPass([R.gte(R.__, 5), R.lte(R.__, 12)])(7); //arr of func and one paramer ( not multiple paramter)
R.all(R.allPass([R.gte(R.__, 5), R.lte(R.__, 12)]), [5, 6, 7, 8]); //--> true
//8 . anypass --> logical or among all function
R.all(R.anyPass([R.gte(R.__, 5), R.lte(R.__, 12)]), [5, 6, 7, 8, 15]); //--> true

//9 .ap (like apply)
R.ap([R.multiply(2), R.add(5)], [1, 2, 3]); //[ 2, 4, 6, 6, 7, 8 ] concate all functionm with all ele (cross product)
R.ap([R.multiply(2), R.add(5)])([1, 2, 3]); //[ 2, 4, 6, 6, 7, 8 ]

//10 .repeat
R.repeat("Hi", 5); //[ 'Hi', 'Hi', 'Hi', 'Hi', 'Hi' ]

//11. aperture
R.aperture(3, [1, 2, 3, 4, 5]); //=> [ [ 1, 2, 3 ], [ 2, 3, 4 ], [ 3, 4, 5 ] ]
R.aperture(6, [1, 2, 3, 4, 5]); //[]

//12 .append & 13 .prepend
R.append(1, [2, 3]); //=> [ 2, 3, 1 ]
R.prepend(1, [2, 3]); //=> [ 1, 2, 3 ]

//14 .apply
R.apply(Math.max, [1, 2, 55, 67, 0]); //=> 67 --> (func , arr)
R.apply(Math.min, [1, 2, 55, 67, -10]); // -10

// 15 . applySpec **********
R.applySpec({
  sum: R.add,
  extra: {
    mul: R.multiply,
  },
})(5, 10); //{ sum: 15, exxtra: { mul: 50 } }

//16 . applyTo
R.applyTo(42)(R.add(1)); //-->43

// 17. sort , Comparator
const comaprefunc = R.comparator((a, b) => a < b); //a<b -->inc a > b -->desc
R.sort(comaprefunc, [5, 4, 3, 2, 1]); //asc order --> (func,arr)

//18.ascend , 19.decend
const p1 = { age: 10 };
const p2 = { age: 20 };
const p3 = { age: 30 };
const sortfunc = R.ascend(R.prop("age")); //asc
const sortfuncdesc = R.descend(R.prop("age")); //dec
R.sort(sortfunc, [p2, p1, p3]);
R.sort(sortfuncdesc, [p2, p1, p3]);

//20. nullary --> no args
//21.nAry --> n args
R.nAry(4, Math.max)(1, 2, 3, 4); //(int,fn)
// R.binary(Math.max)(1,2,3,4)  last two args is meaningless //bydefault int == 2

//22.pipe, 23.bind
function Greeter(phase: string) {
  this.phase = phase;
}
Greeter.prototype.greet = function (name: string) {
  return this.phase + ", " + name;
};
const helloer = new Greeter("Hello");
// console.log(helloer.greet("vaibhav"));
R.pipe(
  R.toUpper,
  R.bind(helloer.greet, helloer)
  // console.log
)("simform");

//call
const call = (fn, ...args: number[]) => fn(...args);
call(Math.max, 30, 10, 25);
R.call(R.add, 12, 20);
R.call(R.aperture, 3)([1, 2, 3, 4, 5]);

//flatten
R.flatten([1, 2, 3, [4, 5, [6, 7, [8, 9, [10]]]]]); //[ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]

//clone
R.clone([1, 2, 3]);

//clamp
R.clamp(1, 10, -5); //1 (min,max,ele)
R.clamp(1, 10, 15); //10
R.clamp(1, 10, 4); //4
R.clamp("b", "z", "a"); //ascii

//complement
const comapaarision = (x) => x == "foo";
R.complement(comapaarision)("foo");
!comapaarision("foo");

//compose & pipe
R.compose(console.log, R.multiply(10), R.add(5))(5); //100
R.pipe(R.multiply(10), R.add(5), console.log)(5); //100

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

const practiceoncomposeP = R.composeP(getauthor, getArticle);
const practiceonpipeP = R.pipeP(getArticle, getauthor);
// practiceonpipeP(2)
// .then(console.log)

// practiceoncomposeP(2)
// .then(console.log)

//concat
R.concat([1, 2, 4], [6, 7, 8]);
R.concat("abc", "def");

//cond
const functionofcond = R.cond([
  [R.equals(10), R.always(`It's 10`)],
  [R.equals(20), R.always(`It's 20`)],
  [R.T, R.always("Not 10 or 20")],
]);
functionofcond(30);

//contains (find)
R.contains(4, [1, 2, 3]); //--> false
R.contains(3, [1, 2, 3]); // --> true

//converge --> when you have more than two function with same parameter and after you parform operation on that that time you can go for 'converge'
R.converge(R.concat, [R.toLower, R.toUpper])("Simform");

R.call(R.add, 110, 200);

R.converge(R.call, [
  R.unary(R.add), //func 102 + 100 -->202
  R.add(2), //100 + 2 --> 102
])(100);

R.countBy(R.toLower)(["a", "b", "A", "a", "b"]);

//set operation
R.difference([1, 2, 3, 4, 5])([1, 2, 3]);
R.difference([1, 2, 3, 4, 5], [1, 2, 3]);

//intersection
R.intersection([1, 2, 3, 4, 5], [1, 2, 3]);

//union
R.union([1, 2, 3, 4, 5], [1, 2, 3, 9, 10]);

//symmetricDifference
R.symmetricDifference([1, 2, 3, 4], [1, 2, 4, 3, 5]);

//drop
R.drop(1, [1, 2, 3, 4]);
R.dropLast(1, [1, 2, 3, 4]);
R.dropWhile((x) => x < 3, [1, 2, 3, 4, 5, 6, 7, 8]);
R.dropLastWhile(R.lte(5), [1, 2, 3, 4, 5, 6, 7, 8]);
R.dropRepeats([1, 2, 3, 3, 3, 4, 3]);

//take
R.take(2, [1, 2, 3, 4]);
R.takeLast(2, [1, 2, 3, 4]);
R.takeWhile((x) => x < 3, [1, 2, 3, 4, 5, 6, 7, 8]);
R.takeLastWhile(R.lte(5), [1, 2, 3, 4, 5, 6, 7, 8]);

R.either(R.gte(R.__, 5), R.lte(R.__, 10))(4);
R.both(R.gte(R.__, 5), R.lte(R.__, 10))(4);

R.endsWith("c", "abc");
R.eqProps("a", { a: 10, b: 203 }, { a: 2 });

const obj = {
  name: "abc     ",
  age: 10,
};
const trasformation = {
  name: R.trim,
  age: R.add(1),
};
R.evolve(trasformation, obj);

const evenfunction = (x) => x % 2 == 0;

R.filter(evenfunction, [1, 2, 3, 4, 5, 6, 7, 8]);

//replace
R.replace("foo", "bar", "afoo foo foo"); //=> 'bar foo foo'
R.replace(/foo/, "bar", "afooa foo foo"); //=> 'abara foo foo'
R.replace(/foo/g, "bar", "fooa foo foo"); //=> 'bara bar bar'

//find
const findpractice = [
  { a: 1, b: 0 },
  { a: 1, b: 1 },
];
R.find(R.propEq("a", 1))(findpractice);
R.findLast(R.propEq("a", 1))(findpractice);
// const func = (x) => x==2;
R.find((x) => x == 2)([1, 2, 3, 4, 5]);
R.findIndex((x) => x == 2, [-1, -2, 2, 3, 4, 5, 2]);
R.findLastIndex((x) => x == 2, [-1, -2, 2, 3, 4, 5, 2]);


//group
const students = [
  { name: "Abby", score: 84 },
  { name: "Eddy", score: 58 },
  { name: "Jack", score: 69 },
];

const byGrade = R.groupBy(function (student : { name: string, score : number}) {
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
const similarity = [0,1,3,4,2,5]
R.groupWith((a, b) => a + 1 === b,similarity)

R.includes(5,[1,2,3])
R.includes({ name: "Abby", score: 84 },students)

R.ifElse((a) => a < 10,R.inc,R.dec)(8)

p = R.uniqWith(R.eqBy(String))([1,1,1,1,2,3,1,1,1,1,4])

console.log(p);
