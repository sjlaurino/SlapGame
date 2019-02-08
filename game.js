let health = 100;
let name = 'Charlie Brown';
let hits = 0

function slap() {
  health--
  hits++
  console.log(health)
  update();
}
function punch() {
  health -= 5
  hits++
  console.log(health)
  update();
}
function kick() {
  health -= 10
  hits++
  console.log(health)
  update();
}

function update() {
  document.getElementById('health').innerHTML = 'Health: ' + health.toString();
  document.getElementById('hits').innerHTML = 'Hits: ' + hits.toString();
}



