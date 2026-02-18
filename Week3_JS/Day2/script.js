//  Day 2 - Conditions (if / else)

const age = 20;

// -- if / else --
if (age >= 18) {
    console.log("You are an adult.");
} else {
    console.log("You are a minor.");
}

// -- else if --
const score = 75;

if (score >= 90) {
    console.log("Grade: A");
} else if (score >= 80) {
    console.log("Grade: B");
} else if (score >= 70) {
    console.log("Grade: C");
} else {
    console.log("Grade: F");
}

// -- Comparing two values --
const a = 10;
const b = 20;

if (a > b) {
    console.log("a is greater");
} else if (a === b) {
    console.log("both are equal");
} else {
    console.log("b is greater");
}

// -- Boolean condition --
const isLoggedIn = true;

if (isLoggedIn) {
    console.log("Welcome back!");
} else {
    console.log("Please log in.");
}