import async from "async";

//parallel
let parallel: any = [];
const firstfunc = (callback) => {
  // console.log("1");

  callback(null, "First Function called");
};
const secondfunc = (callback) => {
  // console.log("2");

  callback(null, "Secound Function called");
};
const thirdfunc = (callback) => {
  // console.log("3");

  callback(null, "Third Function called");
};

parallel.push(firstfunc);
parallel.push(secondfunc);
parallel.push(thirdfunc);

async.parallel(parallel, (err, result) => {
  console.log(result);
});

let parallel2: any = {};
parallel2.firstfunc = (callback) => {
  console.log("1");

  callback(null, "First Function called");
};
parallel2.secondfunc = (callback) => {
  console.log("2");

  callback(null, "Secound Function called");
};
parallel2.thirdfunc = (callback) => {
  console.log("3");

  callback(null, "Third Function called");
};

async.parallel(parallel2, (err, result) => {
  console.log(result);
});

// async.parallel([
//     function(callback) {
//         setTimeout(function() {
//             callback(null, 'one');
//         }, 1000);
//     },
//     function(callback) {
//         setTimeout(function() {
//             callback(null, 'two');
//         }, 1000) ;
//     }
// ],
// // optional callback
// function(err, results) {
//     console.log(results);
//     //take 1 sec
// });

//series
async.series(
  [
    function (callback) {
      setTimeout(function () {
        callback(null, "one");
      }, 5000);
    },
    function (callback) {
      setTimeout(function () {
        callback(null, "two");
      }, 5000);
    },
  ],
  // optional callback
  function (err, results) {
    console.log(results);
    //take 1 sec
  }
);

async.waterfall(
  [
    function (callback) {
      setTimeout(function () {
        callback(null, "one");
      }, 5000);
    },
    function (arg1, callback) {
      setTimeout(function () {
        callback(null, "two");
      }, 5000);
    },
  ],
  // optional callback
  function (err, results) {
    console.log(results);
    //take 1 sec
  }
);
