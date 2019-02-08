let health = 100

function slap() {
  health--
  console.log(health)
  update();
}

function update() {
  document.getElementById('enemyHealth').innerHTML = 'Health: ' + health.toString();
}



