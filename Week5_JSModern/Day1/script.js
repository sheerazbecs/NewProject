// 1. Variable Declaration
// -----------------------
let userName = "John";
const userAge = 25;

console.log("1. Variable Declaration:");
console.log(userName, userAge);


// 2. Arrow Function
// -----------------
const greet = (name) => `Hello, ${name}`;

console.log("\n2. Arrow Function:");
console.log(greet("John"));


// 3. Template Literals
// --------------------
const msg = `My name is ${userName} and I am ${userAge} years old.`;

console.log("\n3. Template Literals:");
console.log(msg);


// 4. Default Parameters
// ---------------------
const welcome = (name = "stranger") => `Hi ${name}!`;

console.log("\n4. Default Parameters:");
console.log(welcome());           // uses default → Hi stranger!
console.log(welcome("Sarah"));    // uses provided → Hi Sarah!


// 5. Destructuring
// ----------------
const user = { name: "John", age: 25 };
const { name, age } = user;

console.log("\n5. Destructuring:");
console.log(name, age);