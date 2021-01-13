let startButton = document.querySelector('#startButton');
let welcomeText = document.querySelector('#welcomeText');
let courseText = document.querySelector ('#courseText');
let holeText = document.querySelector('#holeText');
let clubText = document.querySelector ('#clubText');
let strokeText = document.querySelector('#strokeText');
let summaryButton = document.querySelector('#button_summary');

const body =  document.body
const section = document.createElement('section');
const course = document.querySelector('#courseSelection');
const hole =document.querySelector('#holeSelection');
const club = document.querySelector('#clubSelection');
const stroke = document.querySelector('#stroke');
const result = document.querySelector('#result'); //section der Ergenisse
const results =document.querySelector("#results"); //article der einzelnen Ergenisse
const summary = document.querySelector('#summary');

document.getElementById ("btn_swing").addEventListener("click", function(){swing();});

document.getElementById("w1").addEventListener("click", function(){clubId(this.id);});
document.getElementById("w3").addEventListener("click", function(){clubId(this.id);});
document.getElementById("i3").addEventListener("click", function(){clubId(this.id);}); //anonymous function
document.getElementById("i7").addEventListener("click", function(){clubId(this.id);});
document.getElementById("sw").addEventListener("click", function(){clubId(this.id);});
document.getElementById("p").addEventListener("click", function(){clubId(this.id);});

course.remove();
hole.remove();
club.remove();
stroke.remove();
result.remove();
summary.remove();

startButton.onclick = function() {
  createPlayer();
  courseSelection();
}

function createPlayer() {
  let golfersName = prompt('Hallo ich bin Zork. Wie heißt du?');
  if(!golfersName) {
    createPlayer();
  } else {
      activePlayer = new Player(golfersName);
      activePlayer.hcp = parseFloat(prompt('Was ist dein Handicap?').replace(/,/, ".")); //ersetz Komma durch Punkt und wandelt in float um.
      welcomeText.textContent = 'Schönes Spiel, ' + golfersName + '!';
    }
}

function courseSelection() {
  body.append(course);
  document.getElementById("btn_frontNine").addEventListener("click", function(){setCourse(this.name);});
  document.getElementById("btn_backNine").addEventListener("click", function(){setCourse(this.name);});
}

function setCourse(name) {
  courseText.textContent = "Du hast die " + name + " gewählt.";
  //course.remove();
  holeSelection();
  return activeCourse = name; //der Course wird global in Variable activeHole gespeichert!
}

function holeSelection() {
  body.append(hole);
  document.getElementById("btn_hole1").addEventListener("click", function(){setHole(this.id);});
  document.getElementById("btn_hole2").addEventListener("click", function(){setHole(this.id);});
  document.getElementById("btn_hole3").addEventListener("click", function(){setHole(this.id);});
}

function setHole(id) {
  results.remove();
  summary.remove();
  activeHole = new Hole(id);

  switch (id) {
    case "btn_hole1": {
      activeHole.number = 1;
      activeHole.par = 4;
      activeHole.distance = 310;
      break;
    }
    case "btn_hole2": {
      activeHole.number = 2;
      activeHole.par = 4;
      activeHole.distance = 320;
      break;
    }
    case "btn_hole3": {
      activeHole.number = 3;
      activeHole.par = 4;
      activeHole.distance = 330;
      break;
    }
  }
  holeText.innerHTML = "Du hast Loch Nr. " + activeHole.number + " gewählt.</br>Es ist ein Par " + activeHole.par + " mit einer Länge von " + activeHole.distance + " Meter.";
  body.append(club);
  //clubSelection();
}

/*function clubSelection() {
  body.append(club);
  let w1 = document.getElementById("w1").addEventListener("click", function(){clubId(this.id);});
  let w3 = document.getElementById("w3").addEventListener("click", function(){clubId(this.id);});
  document.getElementById("i3").addEventListener("click", function(){clubId(this.id);}); //anonymous function
  document.getElementById("i7").addEventListener("click", function(){clubId(this.id);});

}*/


function clubId (id) {
  //club.remove();
  activeClub = new Club(id);

  switch (id) {
    case "w1": {
      activeClub.name = "Driver";
      activeClub.avgDistance = 210;
      break;
    }

    case "w3": {
      activeClub.name = "Holz 3";
      activeClub.avgDistance = 190;
      break;
    }

    case "i3": {
      activeClub.name = "3er Eisen";
      activeClub.avgDistance = 180;
      break;
    }

    case "i7": {
      activeClub.name = "7er Eisen";
      activeClub.avgDistance = 140;
      break;
    }

    case "sw": {
      activeClub.name = "Sandwedge";
      activeClub.avgDistance = 70;
      break;
    }

    case "p": {
      activeClub.name = "Putter";
      activeClub.avgDistance = 5;
      break;
    }
    
    default: {
      alert("Kein Schläger gewählt.");
    }
  }
  strokeText.innerHTML = `Loch Nr. ${activeHole.number}, Par ${activeHole.par}</br>Restweite: ${activeHole.distance}</br>Es folgt Schlag Nr. ${activeHole.hit + 1}`
  clubText.innerHTML = `Du hast dein ${activeClub.name} in der Hand.`;
  body.append(stroke);
}

function swing() {
  holeText.innerHTML = "";
  let min = 0.8
  let max = 1.2
  f = (Math.random() * (max - min)) + min;
  var carry = activeClub.avgDistance * f;
  activeHole.hit += 1;
  console.log(carry);
  console.log(activeHole.hit);
  berechneRestweite(activeHole, carry);
  stroke.remove();
}

function berechneRestweite (activeHole, carry) {
  activeHole.distance -= carry;
  console.log(activeHole.distance);
  body.append(results);
  showHitResult(carry);
  if (activeHole.distance > 1.5) {
    body.append(club);
    //clubSelection();
  }
  else {
    club.remove;
    body.append(summary);
  }
}

function showHitResult(carry){
  results.innerHTML = `Loch Nr. ${activeHole.number}</br>Schlag Nr. ${activeHole.hit}</br>Schläger: ${activeClub.name}</br>Weite: ${carry}</br>Restdistanz: ${activeHole.distance}</br>Es folgt Schlag Nr. ${activeHole.hit +1}`
}
/*
function ergebnisAusgabe(carry) {
  results.innerHTML = `Course: ${activeCourse}</br>Loch Nr. ${activeHole.number}.</br>Par ${activeHole.par}.</br>Schläger ${activeClub.name}.</br>Weite: ${carry}.</br>Restweite bis Loch: ${activeHole.distance}`;
  body.append(club);
}
*/
/*function rand(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}*/

summaryButton.onclick = function() {
  consolenAusgabe();
}

function consolenAusgabe() {
  //console.log(gN);
  console.log(activePlayer.name);
  console.log(activePlayer.hcp);
  console.log(activeCourse);
  console.log(activeHole.number);
  console.log(activeClub.name);
  console.log(activeHole.hit);
  console.log(activeHole.distance);
}