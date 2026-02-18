function runSelections() {
  const output = document.getElementById('output');
  output.innerHTML = '';

  function log(method, value) {
    let result = '';

    if (value instanceof HTMLElement) {
      result = value.innerText.trim();
    } else if (value instanceof NodeList || value instanceof HTMLCollection) {
      result = [...value].map(el => el.innerText.trim()).join(' | ');
    } else {
      result = value;
    }

    output.innerHTML += `<b>${method}</b> → ${result}<br>`;
  }

  // 1. getElementById
  log('getElementById("mainPara")', document.getElementById('mainPara'));

  // 2. getElementsByClassName
  log('getElementsByClassName("text")', document.getElementsByClassName('text'));

  // 3. getElementsByTagName
  log('getElementsByTagName("li")', document.getElementsByTagName('li'));

  // 4. getElementsByName
  log('getElementsByName("mySpan")', document.getElementsByName('mySpan'));

  // 5. querySelector - selects FIRST match only
  log('querySelector(".text")', document.querySelector('.text'));

  // 6. querySelectorAll - selects ALL matches
  log('querySelectorAll(".text")', document.querySelectorAll('.text'));

  // 7. querySelector with ID
  log('querySelector("#mainPara")', document.querySelector('#mainPara'));

  // 8. querySelector with combined CSS selector
  log('querySelector(".text.highlight")', document.querySelector('.text.highlight'));

  // 9. Select from inside a parent element
  const container = document.getElementById('container');
  log('container.querySelector("p")', container.querySelector('p'));

  // 10. DOM Traversal while selecting
  log('firstElementChild of #container', container.firstElementChild);
  log('lastElementChild of #container', container.lastElementChild);
  log('children count of #container', container.children.length + ' children');

  // 11. Special selectors
  log('document.body.tagName', document.body.tagName);
  log('document.title', document.title);
}

function clearOutput() {
  document.getElementById('output').innerHTML = '';
}