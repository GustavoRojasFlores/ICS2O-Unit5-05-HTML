document.getElementById('calc').addEventListener('click', calculate)

function calculate () {
  document.getElementById('output').innerHTML = Math.pow(document.getElementById('input').value, 2)
}