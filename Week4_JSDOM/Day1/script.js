function showDOM() {
  const output = document.getElementById('output');

  // DOM lets JS access any HTML element as an object
  const title  = document.getElementById('title').innerText;
  const info   = document.getElementById('info').innerText;
  const course = document.getElementById('course').innerText;

  output.innerHTML = `
    <b>DOM accessed these elements:</b><br><br>
    <b>Title  →</b> ${title}<br>
    <b>Info   →</b> ${info}<br>
    <b>Course →</b> ${course}<br><br>
    <b>Total elements in #box →</b> ${document.getElementById('box').children.length}
  `;
}