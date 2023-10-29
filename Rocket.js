class Rocket {
    constructor(dna) {
      this.pos = createVector(width / 2, height);
      this.vel = createVector();
      this.acc = createVector();
  
      if (dna) {
        this.dna = dna;
      } else {
        this.dna = new DNA();
      }
      this.fitness = 0;
    }
  
    applyForce(force) {
      this.acc.add(force);
    }
  
    calcFitness() {
      const d = dist(this.pos.x, this.pos.y, target.x, target.y);
      this.fitness = map(d, 0, width, width, 0);
    }
  
    update() {
      this.applyForce(this.dna.genes[count]);
      this.vel.add(this.acc);
      this.pos.add(this.vel);
      this.acc.mult(0);
    }
  
    show() {
      push();
      noStroke();
      fill(255, 150);
      translate(this.pos.x, this.pos.y);
      rotate(this.vel.heading());
      rectMode(CENTER);
      rect(0, 0, 25, 5);
      pop();
    }
  }
  