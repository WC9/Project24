class Ground {
    constructor(x, y) {
      var options = {
        isStatic: true
      };
      this.body = Bodies.rectangle(x, y, 1000, 50, options);
      this.width = 1000;
      this.height = 50;
      World.add(world, this.body);
    };
    display(){
      var pos = this.body.position;
      strokeWeight(3);
      stroke('blue')
      fill('red')
      rectMode(CENTER);
      rect(this.body.position.x,this.body.position.y,this.width,this.height);
      
    };
  };