let target = {
  health: 100,
  name: 'Charlie Brown',
  hits: 0,
  items: []
}
let items = {
  football: {
    name: 'Football',
    modifier: 10,
    description: 'Shankapotomous!'
  },
  kite: {
    name: 'Kite',
    modifier: -5,
    description: 'It\'s a perfectly windy day for flying kites!',
  }
}

function addMods2() {
  let modTotal = 0;
  for (let i = 0; i < target.items.length; i++) {
    modTotal += target.items[i].modifier;
  }
  return modTotal
}

function slap() {
  target.health -= 1 + addMods2()
  target.hits++
  update();
  target.items = [];
}

function punch() {
  target.health -= 5 + addMods2()
  target.hits++
  update();
  target.items = [];
}

function kick() {
  target.health -= 10 + addMods2()
  target.hits++
  update();
  target.items = [];
}
function kite() {
  target.health += 5
  target.hits--
  update();
  target.items = [];
}
function update() {
  document.getElementById('health').innerHTML = 'Health: ' + target.health.toString();
  document.getElementById('hits').innerHTML = 'Hits: ' + target.hits.toString();
}

function giveFootball() {
  target.items.push(items.football);
}

function giveKite() {
  target.items.push(items.kite);
}

// add function  and object in dictionary for lucys deception
// get health to stop at 0 and say youve defeated charlie stop at 100 health
// style page
// add progress bar


