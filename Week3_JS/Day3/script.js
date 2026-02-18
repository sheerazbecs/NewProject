//  Day 3 - Loops

// -- for loop --
for (let i = 1; i <= 5; i++) {
    console.log("Count:", i);
}

// -- while loop --
let num = 1;
while (num <= 5) {
    console.log("While:", num);
    num++;
}

// -- for...of loop (Array) --
const fruits = ["Apple", "Banana", "Mango"];
for (const fruit of fruits) {
    console.log("Fruit:", fruit);
}

// -- for...in loop (Object) --
const person = { name: "Usman", age: 22, city: "Lahore" };
for (const key in person) {
    console.log(key + ":", person[key]);
}

// -- loop with if inside --
for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log(i, "is even");
    }
}