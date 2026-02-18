// ================================
//  Day 5 - Practice Problems
// ================================

// Problem 1: Variables & Data Types
// Store employee name, age, and department. Print a sentence using template literal.
const name = "Usman";
const age = 22;
const department = "Software Engineering";
console.log(`My name is ${name}, I am ${age} years old and I work in ${department}.`);

// Problem 2: Conditions
// Using the age above, check if the employee is eligible for a senior role (age >= 30).
if (age >= 30) {
    console.log(`${name} is eligible for a senior role.`);
} else {
    console.log(`${name} is not yet eligible for a senior role.`);
}

// Problem 3: Conditions + Data Types
// Assign a salary, then print the salary bracket using else if.
const salary = 85000;
if (salary >= 100000) {
    console.log("Executive");
} else if (salary >= 80000) {
    console.log("Senior");
} else if (salary >= 60000) {
    console.log("Mid");
} else {
    console.log("Entry");
}

// Problem 4: Loop
// Print work hours from 1 to 10, label each as normal or overtime (above 8).
for (let i = 1; i <= 10; i++) {
    if (i > 8) {
        console.log(`Hour ${i} - Overtime`);
    } else {
        console.log(`Hour ${i} - Normal`);
    }
}

// Problem 5: Loop + Array
// Store 3 departments in an array and print each one using a loop.
const departments = ["HR", "Finance", "Software Engineering"];
for (const dept of departments) {
    console.log("Department:", dept);
}

// Problem 6: Function
// Write a function that takes a name and department, and returns a sentence.
function introduce(name, department) {
    return `Hi, I am ${name} and I work in ${department}.`;
}
console.log(introduce("Usman", "Software Engineering"));

// Problem 7: Function + Condition
// Write a function that takes a salary and returns the bracket.
function getSalaryBracket(salary) {
    if (salary >= 100000) return "Executive";
    else if (salary >= 80000) return "Senior";
    else if (salary >= 60000) return "Mid";
    else return "Entry";
}
console.log(getSalaryBracket(85000));

// Problem 8: Putting it all together
// Store employees in an array of objects, loop through them,
// and use the function to print each employee's salary bracket.
const employees = [
    { name: "Usman", salary: 105000 },
    { name: "Ali",   salary: 78000  },
    { name: "Sara",  salary: 55000  }
];

for (const employee of employees) {
    console.log(`${employee.name} earns ${employee.salary} — ${getSalaryBracket(employee.salary)}`);
}