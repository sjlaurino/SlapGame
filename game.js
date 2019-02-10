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
  },
  lucy: {
    name: 'Lucy\'s Deception',
    modifier: 5,
    description: 'Lucy fooled Charlie!'
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
  stopHealth()
  target.hits++
  update();
  target.items = [];
}

function punch() {
  target.health -= 5 + addMods2()
  stopHealth()
  target.hits++
  update();
  target.items = [];
}

function kick() {
  target.health -= 10 + addMods2()
  stopHealth()
  target.hits++
  update();
  target.items = [];
}
function kite() {
  target.health += 5
  stopHealth()
  update();
  target.items = [];
}
function update() {
  document.getElementById('health').innerHTML = 'Health: ' + target.health.toString();
  document.getElementById('hits').innerHTML = 'Hits: ' + target.hits.toString();
  document.getElementById('progress-number').innerText = target.health.toString();
  document.getElementById('progress-number').style.width = target.health + '%';
}

function giveFootball() {
  target.items.push(items.football);
}

function giveLucy() {
  target.items.push(items.lucy);
}
function reset() {
  target.health = 100;
  target.hits = 0;
  update()
}

function stopHealth() {
  if (target.health <= 0) {
    target.health = 0;
    // document.getElementById('insult').innerHTML = 'I hope you feel good about yourself... \nYou just killed the most beloved childrens character in history.'
    alert('You\'ve defeated Charlie! \nClick "Reset" to play again!')
  } else if (target.health >= 100) {
    target.health = 100;
  }
}


// XX add function and object in dictionary for lucys deception
// XX get health to stop at 0 and say youve defeated charlie stop at 100 health
// style page
// add progress bar **Bonus
