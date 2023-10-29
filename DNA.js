class DNA {
    constructor(genes) {
      if (genes) {
        this.genes = genes;
      } else {
        this.genes = [];
        for (let i = 0; i < lifespan; i++) {
          this.genes[i] = p5.Vector.random2D();
          this.genes[i].setMag(0.1);
        }
      }
    }
  
    crossover(partner) {
      const newgenes = new DNA();
      const mid = floor(random(this.genes.length));
      for (let i = 0; i < this.genes.length; i++) {
        if (i > mid) {
          newgenes.genes[i] = this.genes[i];
        } else {
          newgenes.genes[i] = partner.genes[i];
        }
      }
      return new DNA(newgenes.genes);
    }
  }
  