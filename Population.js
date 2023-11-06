function Population(){
  this.rockets=[];
  this.popsize=25;
  this.matingpool=[];

  for(var i = 0;i<this.popsize;i++){
      this.rockets[i] = new Rocket();
  }

  this.allRocketsCrashed = function() { //check if rockets have crashed
    for (var i = 0; i < this.rockets.length; i++) {
        if (!this.rockets[i].crashed && !this.rockets[i].completed) {
            return false;
        }
    }
    return true;
  }

//   this.rocketComplete = function(){
//     for (var i = 0; i < this.rockets.length; i++) {
//         if (this.rockets[i].completed) {
//             return true;
//         }
//     }
//     return false;
//   }

  this.evaluate = function(){

      var maxfit=0;
      for(var i =0;i<this.popsize;i++){
          this.rockets[i].calcFitness();
          if(this.rockets[i].fitness>maxfit){
              maxfit= this.rockets[i].fitness;
          }
      }

      for(var i =0;i<this.popsize;i++){
          this.rockets[i].fitness /= maxfit; //normalize it
      }

      this.matingpool=[];
      for(var i =0;i<this.popsize;i++){
          var n = this.rockets[i].fitness * 100;
          for(var j = 0;j < n;j++){
              this.matingpool.push(this.rockets[i]);
          }
      }
  }
      

      this.selection = function(){
          var newRockets=[];
          for(var i = 0;i<this.rockets.length;i++){
          var parentA = random(this.matingpool).dna; //give random element from the array (feature in p5?)
          var parentB = random(this.matingpool).dna;
          var child = parentA.crossover(parentB);
          child.mutation();
          newRockets[i]=new Rocket(child);
          }
          this.rockets = newRockets;
      }

  this.run = function(){
      for(var i = 0;i<this.popsize;i++){
          this.rockets[i].update();
          this.rockets[i].show();
      }
  }
}