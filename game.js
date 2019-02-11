let targets = {
  charlie: {
    health: 100,
    name: 'Charlie Brown',
    hits: 0,
    items: [],
  },
  lucy: {
    health: 100,
    name: 'Lucy van Pelt',
    hits: 0,
  }
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
  for (let i = 0; i < targets.charlie.items.length; i++) {
    modTotal += targets.charlie.items[i].modifier;
  }
  return modTotal
}

function slap() {
  targets.charlie.health -= 1 + addMods2()
  targets.charlie.hits++
  charlieAttack()
  stopHealth()
  update();
}

function punch() {
  targets.charlie.health -= 5 + addMods2()
  targets.charlie.hits++
  charlieAttack()
  stopHealth()
  update();
}

function kick() {
  targets.charlie.health -= 10 + addMods2()
  targets.charlie.hits++
  charlieAttack()
  stopHealth()
  update()
}
function kite() {
  targets.charlie.health += 5
  stopHealth()
  update();
}
function update() {
  showAlert()
  document.getElementById('health').innerHTML = 'Health: ' + targets.charlie.health.toString();
  document.getElementById('lucy-health').innerHTML = 'Health: ' + targets.lucy.health.toString();
  document.getElementById('hits').innerHTML = 'Hits: ' + targets.charlie.hits.toString();
  document.getElementById('lucy-hits').innerHTML = 'Hits: ' + targets.lucy.hits.toString();
  document.getElementById('progress-number').innerText = targets.charlie.health.toString();
  document.getElementById('progress-number').style.width = targets.charlie.health + '%';
  document.getElementById('progress-lucy').innerText = targets.lucy.health.toString();
  document.getElementById('progress-lucy').style.width = targets.lucy.health + '%';
  targets.charlie.items = [];

}
function stopHealth() {
  if (targets.charlie.health <= 0) {
    targets.charlie.health = 0;
    // document.getElementById('insult').innerHTML = 'I hope you feel good about yourself... \nYou just killed the most beloved childrens character in history.'
  }
  if (targets.charlie.health >= 100) {
    targets.charlie.health = 100
  }
  if (targets.lucy.health <= 0)
    targets.lucy.health = 0;
}

function showAlert() {
  if (targets.charlie.health <= 0) {
    alert('You\'ve defeated Charlie! \nClick "Reset" to play again!');
  } else if (targets.lucy.health <= 0) {
    alert('You\'ve been defeated by Charlie! \nClick "Reset" to play again!');
  }
}







function giveFootball() {
  targets.charlie.items.push(items.football);
}

function giveLucy() {
  targets.charlie.items.push(items.lucy);
}
function reset() {
  targets.charlie.health = 100;
  targets.charlie.hits = 0;
  targets.lucy.health = 100;
  targets.lucy.hits = 0;
  update()
}



function charlieAttack() {
  targets.lucy.health -= Math.floor((Math.random() * 15) + 1)
  targets.lucy.hits++
}


// XX add function and object in dictionary for lucys deception
// XX get health to stop at 0 and say youve defeated charlie stop at 100 health
// style page
// XX add progress bar **Bonus

// different color for progress bar wont work
// bootstrap modal to make custom alert at the
// get alert to show affter 0
