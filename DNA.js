function DNA(genes){
  if(genes){
      this.genes=genes;
  }else{
      this.genes=[];
  }
  for(var i = 0;i<lifespan;i++){
    this.genes[i] = p5.Vector.random2D();
    this.genes[i].setMag(maxforce);
  }


  this.crossover = function(partner){ //method - pick midpoint in length of the array and get half genes/genes
      var newgenes = new DNA(); //make random genes
      var mid = floor(random(this.genes.length));
      for(var i = 0; i<this.genes.length;i++){
          if(i>mid){
              newgenes[i] = this.genes[i];
          } else{
              newgenes[i] = partner.genes[i]; //overwrite
          }
          
      }
      return new DNA(newgenes); //return new dna with new genes
  }

  this.mutation = function(){
    for(var i = 0;i<genes.length;i++){
        if(random(1)<0.01){
            this.genes[i]=p5.Vector.random2D();
            this.genes[i].setMag(maxforce);
        }
    }
  }

}
