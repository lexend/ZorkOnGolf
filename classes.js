class Player {
  constructor(name, hcp) {
    this.name = name;
    this.hcp = hcp;
  }
}

class Hole {
  constructor(number, par, distance, hit) {
    this.number = number;
    this.par = par;
    this.distance = distance;
    this.hit = 0;
  }
}

class Club {
  constructor(id, name, avgDistance) {
    this.id = id;
    this.name = name;
    this.avgDistance = avgDistance;
  }
}


