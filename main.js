let startButton = document.querySelector('#startButton');
let welcomeText = document.querySelector('#welcomeText');
let courseText = document.querySelector ('#courseText');
let holeText = document.querySelector('#holeText');
let clubText = document.querySelector ('#clubText');
let strokeText = document.querySelector('#strokeText');
let summaryButton = document.querySelector('#button_summary');

const body =  document.body;
const main = document.querySelector("#main");
const welcome = document.querySelector('#welcome');
const course = document.querySelector('#courseSelection');
const hole = document.querySelector('#holeSelection');
const club = document.querySelector('#clubSelection');
const stroke = document.querySelector('#stroke');
const result = document.querySelector('#result'); //section der Ergenisse
const results =document.querySelector("#results"); //article der einzelnen Ergenisse
const summary = document.querySelector('#summary');
var min = 1.0;
var max = 1.0;
var strength = 1;

document.getElementById ("btn_swing").addEventListener("click", function(){swing();});

document.getElementById("w1").addEventListener("click", function(){clubId(this.id);});
document.getElementById("w3").addEventListener("click", function(){clubId(this.id);});
document.getElementById("w5").addEventListener("click", function(){clubId(this.id);});
document.getElementById("i3").addEventListener("click", function(){clubId(this.id);});
document.getElementById("i4").addEventListener("click", function(){clubId(this.id);});
document.getElementById("i5").addEventListener("click", function(){clubId(this.id);});
document.getElementById("i6").addEventListener("click", function(){clubId(this.id);}); //anonymous function
document.getElementById("i7").addEventListener("click", function(){clubId(this.id);});
document.getElementById("i8").addEventListener("click", function(){clubId(this.id);});
document.getElementById("i9").addEventListener("click", function(){clubId(this.id);});
document.getElementById("sw").addEventListener("click", function(){clubId(this.id);});
document.getElementById("pw").addEventListener("click", function(){clubId(this.id);});
document.getElementById("p").addEventListener("click", function(){clubId(this.id);});

course.remove();
hole.remove();
club.remove();
stroke.remove();
//result.remove();
//summary.remove();

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
      // hier muss noch eine Schleife rein, damit die letzte else wieder zur Eingabe führt.
      if (activePlayer.hcp <= 0.0) {
          min = 1.05;
          max = 1.3;
        } else if (activePlayer.hcp <= 10.0) {
            min = 1.0;
            max = 1.25;
          } else if (activePlayer.hcp <= 20.0) {
              min = 0.9;
              max = 1.2;
            } else if (activePlayer.hcp <= 30.0) {
                min = 0.8;
                max = 1.1;
              } else if (activePlayer.hcp <= 56.0) {
                  min = 0.75;
                  max = 1.05;
                } else {
                    alert("haha, try again!");
                  }
      welcomeText.textContent = 'Schönes Spiel, ' + golfersName + '!';
    }
}

function courseSelection() {
  welcome.append(course);
  document.getElementById("btn_frontNine").addEventListener("click", function(){setCourse(this.name);});
  document.getElementById("btn_backNine").addEventListener("click", function(){setCourse(this.name);});
}

function setCourse(name) {
  courseText.textContent = "Du hast die " + name + " gewählt.";
  //course.remove();
  course.append(hole);
  holeSelection();
  return activeCourse = name; //der Course wird global in Variable activeHole gespeichert!
}

function holeSelection() {
  //course.append(hole);
  document.getElementById("btn_hole1").addEventListener("click", function(){setHole(this.id);});
  document.getElementById("btn_hole2").addEventListener("click", function(){setHole(this.id);});
  document.getElementById("btn_hole3").addEventListener("click", function(){setHole(this.id);});
  document.getElementById("btn_hole4").addEventListener("click", function(){setHole(this.id);});
  document.getElementById("btn_hole5").addEventListener("click", function(){setHole(this.id);});
  document.getElementById("btn_hole6").addEventListener("click", function(){setHole(this.id);});
  document.getElementById("btn_hole7").addEventListener("click", function(){setHole(this.id);});
  document.getElementById("btn_hole8").addEventListener("click", function(){setHole(this.id);});
  document.getElementById("btn_hole9").addEventListener("click", function(){setHole(this.id);});
}

function setHole(id) {
  //results.remove();
  //summary.remove();
  activeHole = new Hole(id);

  switch (id) {
    case "btn_hole1": {
      activeHole.number = 1;
      activeHole.par = 4;
      activeHole.distance = 247;
      break;
    }
    case "btn_hole2": {
      activeHole.number = 2;
      activeHole.par = 4;
      activeHole.distance = 329;
      break;
    }
    case "btn_hole3": {
      activeHole.number = 3;
      activeHole.par = 5;
      activeHole.distance = 467;
      break;
    }
    case "btn_hole4": {
      activeHole.number = 4;
      activeHole.par = 3;
      activeHole.distance = 156;
      break;
    }
    case "btn_hole5": {
      activeHole.number = 5;
      activeHole.par = 4;
      activeHole.distance = 333;
      break;
    }
    case "btn_hole6": {
      activeHole.number = 6;
      activeHole.par = 5;
      activeHole.distance = 492;
      break;
    }
    case "btn_hole7": {
      activeHole.number = 7;
      activeHole.par = 4;
      activeHole.distance = 321;
      break;
    }
    case "btn_hole8": {
      activeHole.number = 8;
      activeHole.par = 3;
      activeHole.distance = 186;
      break;
    }
    case "btn_hole9": {
      activeHole.number = 9;
      activeHole.par = 4;
      activeHole.distance = 381;
      break;
    }
  }
  holeText.innerHTML = "Du hast Loch Nr. " + activeHole.number + " gewählt.</br>Es ist ein Par " + activeHole.par + ".</br>Länge: " + activeHole.distance + " Meter.";
  hole.append(club);
}

function clubId (id) {
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
    case "w5": {
      activeClub.name = "Holz 5";
      activeClub.avgDistance = 175;
      break;
    }
    case "i3": {
      activeClub.name = "3er Eisen";
      activeClub.avgDistance = 180;
      break;
    }
    case "i4": {
      activeClub.name = "4er Eisen";
      activeClub.avgDistance = 170;
      break;
    }
    case "i5": {
      activeClub.name = "5er Eisen";
      activeClub.avgDistance = 160;
      break;
    }
    case "i6": {
      activeClub.name = "6er Eisen";
      activeClub.avgDistance = 150;
      break;
    }
    case "i7": {
      activeClub.name = "7er Eisen";
      activeClub.avgDistance = 140;
      break;
    }
    case "i8": {
      activeClub.name = "8er Eisen";
      activeClub.avgDistance = 125;
      break;
    }
    case "i9": {
      activeClub.name = "9er Eisen";
      activeClub.avgDistance = 115;
      break;
    }
    case "pw": {
      activeClub.name = "Pitching Wedge";
      activeClub.avgDistance = 100;
      break;
    }
    case "sw": {
      activeClub.name = "Sand Wedge";
      activeClub.avgDistance = 80;
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
  if (activeClub.id == "p") {
    strength = prompt("Wie stark haust du drauf? Gib eine ganze Zahl zw. 1 und 10 ein.");
    strength = strength/5;
    //club.remove();
    club.append(stroke);
  } else if (activeClub.id == "sw") {
      strength = prompt("Wie stark haust du drauf? Gib eine ganze Zahl zw. 1 und 5 ein.");
      strength = strength/5;
      //club.remove();
      club.append(stroke);
    } else {
    strength = 1;
  }
  club.append(stroke);
}

function swing() {
  holeText.innerHTML = "";
  f = (Math.random() * (max - min)) + min;
  var carry = Math.round(activeClub.avgDistance * f * strength);
  activeHole.hit += 1;
  console.log(strength);
  console.log(carry);
  console.log(activeHole.hit);
  berechneRestweite(activeHole, carry);
  stroke.remove();
}

function berechneRestweite (activeHole, carry) {
  activeHole.distance = Math.abs(activeHole.distance) - carry;
  console.log(activeHole.distance);
  hole.append(results);
  showHitResult(carry);
  if (activeHole.distance > 2.0) {
    alert("Der ging " + carry + " Meter weit.\nRestdistanz: " + activeHole.distance + " Meter.\nWähle deinen nächsten Schläger.");
    //hole.append(club);
    //clubSelection();
  } else if (activeHole.distance < -2) {
      alert("Der ging " + carry + " Meter weit. Etwas zu lang!\nRestdistanz: " + activeHole.distance + " Meter.\nWähle deinen nächsten Schläger.");
      //hole.append(club);
    } else {
        alert("Der ging " + carry + " Meter weit.\nRestdistanz: " + activeHole.distance + " Meter.\n\nIt's a gimmy!")
        club.remove;
        hole.append(summary);
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

summaryButton.onclick = function() {
  let hits = activeHole.hit + 1;
  alert("Du hast insg. " + hits + " Schläge gebraucht!");
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