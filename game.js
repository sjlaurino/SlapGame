let target = {
  health: 100,
  name: 'Charlie Brown',
  hits: 0,
  items: []
}
let items = {
  football: {
    name: 'Football',
    modifier: -10,
    description: 'Shankapotomous!'
  },
  kite: {
    name: 'Kite',
    modifier: 5,
    description: 'It\'s a perfectly windy day for flying kites!',
  }
}



function addMods() {
  let modTotal = 0;
  for (let i = 0; i < target.items.length - 1; i++) {
    modTotal += target.items[i].modifier;
    target.health - modTotal;
  }
  console.log(modTotal);
}


function slap() {
  target.health--
  target.hits++
  update();
  addMods()
}
function punch() {
  target.health -= 5
  target.hits++
  update();
  addMods()
}
function kick() {
  target.health -= 10
  target.hits++
  update();
  addMods()
}

function update() {
  document.getElementById('health').innerHTML = 'Health: ' + target.health.toString();
  document.getElementById('hits').innerHTML = 'Hits: ' + target.hits.toString();
}
function yankFootball() {
  target.items.push(items.football);
}

function giveFootball() {
  yankFootball()
}



