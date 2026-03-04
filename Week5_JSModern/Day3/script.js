// ================================
// ES6 — Day 3: Arrays & Objects
// ================================


// 1. Spread Operator — Arrays (...)
// ----------------------------------
// ES5
var arr1 = [1, 2, 3];
var arr2 = [4, 5, 6];
var combined = arr1.concat(arr2);

// ES6
const combinedSpread = [...arr1, ...arr2];

console.log("1. Spread Operator — Arrays:");
console.log(combined);        // [1, 2, 3, 4, 5, 6]
console.log(combinedSpread);  // [1, 2, 3, 4, 5, 6]


// 2. Spread Operator — Objects (...)
// -----------------------------------
// ES5
var user = { name: "John" };
var userWithAge = Object.assign({}, user, { age: 25 });

// ES6
const userSpread = { ...user, age: 25 };

console.log("\n2. Spread Operator — Objects:");
console.log(userWithAge);   // { name: 'John', age: 25 }
console.log(userSpread);    // { name: 'John', age: 25 }


// 3. Rest Operator (...)
// ----------------------
// ES5
function sumES5() {
  var args = Array.prototype.slice.call(arguments);
  return args.reduce(function(a, b) { return a + b; }, 0);
}

// ES6
const sumES6 = (...nums) => nums.reduce((a, b) => a + b, 0);

console.log("\n3. Rest Operator:");
console.log(sumES5(1, 2, 3, 4));   // 10
console.log(sumES6(1, 2, 3, 4));   // 10


// 4. Object Shorthand
// -------------------
// ES5
var userName = "Sarah";
var userAge = 30;
var userObj = { userName: userName, userAge: userAge };

// ES6
const personObj = { userName, userAge };

console.log("\n4. Object Shorthand:");
console.log(userObj);    // { userName: 'Sarah', userAge: 30 }
console.log(personObj);  // { userName: 'Sarah', userAge: 30 }


// 5. Array Methods (map, filter, find)
// -------------------------------------
const numbers = [1, 2, 3, 4, 5];

// map — transform each item
const doubled = numbers.map(n => n * 2);

// filter — keep items that pass a condition
const evens = numbers.filter(n => n % 2 === 0);

// find — return first item that matches
const firstBig = numbers.find(n => n > 3);

console.log("\n5. Array Methods:");
console.log(doubled);    // [2, 4, 6, 8, 10]
console.log(evens);      // [2, 4]
console.log(firstBig);   // 4