// =============================================
// Day 5 — Mini JS Project: Student Manager
// Uses everything from Days 1, 2, 3, 4
// =============================================

// ---- DATA (array to store students) ----
let students = [
  { name: "Ali",   age: 20, course: "Computer Science",    gpa: 3.8 },
  { name: "Sara",  age: 22, course: "Mathematics",         gpa: 3.5 },
  { name: "Ahmed", age: 21, course: "Computer Science",    gpa: 3.2 },
  { name: "Usman", age: 23, course: "Physics",             gpa: 3.9 },
];


// =============================================
// ADD STUDENT
// Uses: DOM (Day 1), Validation (Day 4)
// =============================================
function addStudent() {

  // Day 2 — Selecting elements
  let name   = document.getElementById("nameInput").value.trim();
  let age    = document.getElementById("ageInput").value;
  let course = document.getElementById("courseInput").value;
  let gpa    = document.getElementById("gpaInput").value;
  let output = document.getElementById("addOutput");

  // Day 4 — Validation
  if (name === "") {
    output.textContent = "❌ Name cannot be empty.";
    output.className = "error";
    return;
  }

  if (name.length < 2) {
    output.textContent = "❌ Name must be at least 2 characters.";
    output.className = "error";
    return;
  }

  if (age === "" || isNaN(age) || age < 15 || age > 60) {
    output.textContent = "❌ Age must be a number between 15 and 60.";
    output.className = "error";
    return;
  }

  if (course === "") {
    output.textContent = "❌ Please select a course.";
    output.className = "error";
    return;
  }

  if (gpa === "" || isNaN(gpa) || gpa < 0 || gpa > 4) {
    output.textContent = "❌ GPA must be between 0.0 and 4.0.";
    output.className = "error";
    return;
  }

  // All valid — create student object and push to array
  let newStudent = {
    name:   name,
    age:    Number(age),
    course: course,
    gpa:    parseFloat(gpa)
  };

  students.push(newStudent);

  // Day 1 — DOM manipulation: update output text
  output.textContent = "✅ Student \"" + name + "\" added successfully!";
  output.className = "success";

  // Clear inputs
  document.getElementById("nameInput").value   = "";
  document.getElementById("ageInput").value    = "";
  document.getElementById("courseInput").value = "";
  document.getElementById("gpaInput").value    = "";
}


// =============================================
// SEARCH STUDENT
// Uses: DOM (Day 1), Events - oninput (Day 3)
// =============================================
function searchStudent() {

  // Day 2 — Selecting elements
  let searchTerm = document.getElementById("searchInput").value.trim().toLowerCase();
  let output     = document.getElementById("searchOutput");

  if (searchTerm === "") {
    output.textContent = "";
    return;
  }

  // Search inside the array
  let found = students.filter(function(student) {
    return student.name.toLowerCase().includes(searchTerm);
  });

  // Day 1 — DOM manipulation
  if (found.length === 0) {
    output.textContent = "❌ No student found with that name.";
    output.className = "error";
  } else {
    let result = found.map(function(s) {
      return s.name + " | Age: " + s.age + " | Course: " + s.course + " | GPA: " + s.gpa.toFixed(1);
    }).join(" || ");

    output.textContent = "✅ Found: " + result;
    output.className = "success";
  }
}


// =============================================
// SHOW ALL STUDENTS
// Uses: DOM (Day 1), innerHTML
// =============================================
function showAllStudents() {
  let output = document.getElementById("listOutput");

  if (students.length === 0) {
    output.innerHTML = "<p class='error'>No students added yet.</p>";
    return;
  }

  // Build HTML for each student
  let html = "";

  for (let i = 0; i < students.length; i++) {
    let s = students[i];
    html += "<div class='student-item'>";
    html += "<span class='label'>" + (i + 1) + ". " + s.name + "</span>";
    html += " | Age: " + s.age;
    html += " | Course: " + s.course;
    html += " | GPA: " + s.gpa.toFixed(1);
    html += "</div>";
  }

  // Day 1 — DOM manipulation: set innerHTML
  output.innerHTML = html;
}


// =============================================
// SHOW TOP STUDENTS (GPA >= 3.5)
// Uses: DOM (Day 1), Array filter
// =============================================
function showTopStudents() {
  let output = document.getElementById("listOutput");

  let topStudents = students.filter(function(s) {
    return s.gpa >= 3.5;
  });

  if (topStudents.length === 0) {
    output.innerHTML = "<p class='error'>No top students found.</p>";
    return;
  }

  let html = "";

  for (let i = 0; i < topStudents.length; i++) {
    let s = topStudents[i];
    html += "<div class='student-item top'>";
    html += "<span class='label'>⭐ " + s.name + "</span>";
    html += " | Age: " + s.age;
    html += " | Course: " + s.course;
    html += " | GPA: " + s.gpa.toFixed(1);
    html += "</div>";
  }

  output.innerHTML = html;
}


// =============================================
// CLEAR LIST
// Uses: DOM (Day 1)
// =============================================
function clearList() {
  document.getElementById("listOutput").innerHTML = "";
}


// =============================================
// CLASS STATISTICS
// Uses: DOM (Day 1), Array methods
// =============================================
function showStats() {
  let output = document.getElementById("statsOutput");

  if (students.length === 0) {
    output.textContent = "❌ No students to calculate stats.";
    output.className = "error";
    return;
  }

  // Total students
  let total = students.length;

  // Average GPA
  let totalGPA = 0;
  for (let i = 0; i < students.length; i++) {
    totalGPA += students[i].gpa;
  }
  let avgGPA = totalGPA / total;

  // Top student (highest GPA)
  let topStudent = students[0];
  for (let i = 1; i < students.length; i++) {
    if (students[i].gpa > topStudent.gpa) {
      topStudent = students[i];
    }
  }

  // Build result string
  let result = "Total Students: " + total;
  result += " | Average GPA: " + avgGPA.toFixed(2);
  result += " | Top Student: " + topStudent.name + " (GPA: " + topStudent.gpa.toFixed(1) + ")";

  // Day 1 — DOM: update output paragraph
  output.textContent = result;
  output.className = "info";
}