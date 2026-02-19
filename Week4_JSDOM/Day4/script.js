// ─── NAME VALIDATION ───────────────────────────────────────────────
function validateName() {
  const name = document.getElementById("nameInput").value.trim();
  const output = document.getElementById("nameOutput");

  if (name === "") {
    output.textContent = "❌ Name cannot be empty.";
    output.className = "error";
  } else if (name.length < 3) {
    output.textContent = "❌ Name must be at least 3 characters.";
    output.className = "error";
  } else {
    output.textContent = "✅ Valid name: " + name;
    output.className = "success";
  }
}

// ─── AGE VALIDATION ────────────────────────────────────────────────
function validateAge() {
  const age = document.getElementById("ageInput").value.trim();
  const output = document.getElementById("ageOutput");

  if (age === "") {
    output.textContent = "❌ Age cannot be empty.";
    output.className = "error";
  } else if (isNaN(age) || age <= 0) {
    output.textContent = "❌ Please enter a valid age.";
    output.className = "error";
  } else if (age < 18) {
    output.textContent = "❌ You must be at least 18 years old.";
    output.className = "error";
  } else if (age > 100) {
    output.textContent = "❌ Age cannot be more than 100.";
    output.className = "error";
  } else {
    output.textContent = "✅ Valid age: " + age;
    output.className = "success";
  }
}

// ─── EMAIL VALIDATION ──────────────────────────────────────────────
function validateEmail() {
  const email = document.getElementById("emailInput").value.trim();
  const output = document.getElementById("emailOutput");

  if (email === "") {
    output.textContent = "❌ Email cannot be empty.";
    output.className = "error";
  } else if (!email.includes("@") || !email.includes(".")) {
    output.textContent = "❌ Invalid email. Must contain @ and .";
    output.className = "error";
  } else {
    output.textContent = "✅ Valid email: " + email;
    output.className = "success";
  }
}

// ─── PASSWORD VALIDATION ───────────────────────────────────────────
function validatePassword() {
  const password = document.getElementById("passwordInput").value;
  const output = document.getElementById("passwordOutput");

  if (password === "") {
    output.textContent = "❌ Password cannot be empty.";
    output.className = "error";
  } else if (password.length < 8) {
    output.textContent = "❌ Password must be at least 8 characters.";
    output.className = "error";
  } else {
    output.textContent = "✅ Strong password accepted!";
    output.className = "success";
  }
}

// ─── FULL FORM VALIDATION ──────────────────────────────────────────
function validateForm() {
  const name     = document.getElementById("regName").value.trim();
  const email    = document.getElementById("regEmail").value.trim();
  const age      = document.getElementById("regAge").value.trim();
  const password = document.getElementById("regPassword").value;
  const output   = document.getElementById("formOutput");

  if (name === "" || email === "" || age === "" || password === "") {
    output.textContent = "❌ All fields are required.";
    output.className = "error";
    return;
  }

  if (name.length < 3) {
    output.textContent = "❌ Name must be at least 3 characters.";
    output.className = "error";
    return;
  }

  if (!email.includes("@") || !email.includes(".")) {
    output.textContent = "❌ Invalid email address.";
    output.className = "error";
    return;
  }

  if (age < 18 || age > 100) {
    output.textContent = "❌ Age must be between 18 and 100.";
    output.className = "error";
    return;
  }

  if (password.length < 8) {
    output.textContent = "❌ Password must be at least 8 characters.";
    output.className = "error";
    return;
  }

  output.textContent = "✅ Registration successful! Welcome, " + name + "!";
  output.className = "success";
}