// CLICK EVENT
document.getElementById('clickBtn').addEventListener('click', function () {
  document.getElementById('clickOutput').innerText = 'Button was clicked!';
});


// SUBMIT EVENT
document.getElementById('submitBtn').addEventListener('click', function () {
  const name = document.getElementById('nameInput').value.trim();

  if (name === '') {
    document.getElementById('submitOutput').style.color = 'red';
    document.getElementById('submitOutput').innerText = 'Please enter your name!';
  } else {
    document.getElementById('submitOutput').style.color = 'green';
    document.getElementById('submitOutput').innerText = 'Submitted! Welcome, ' + name + '!';
  }
});