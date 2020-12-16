class Ball {
    constructor(x, y,radius) {
      var options = {
          'restitution':0.8,
          'friction':1.5,
          'density':1.0
      }
      this.body = Bodies.circle(x, y,radius, options);
     
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
     push();
      translate(pos.x, pos.y);
      ellipsMode(CENTER)
      ellips(ball.position.x,ball.position.y,20,20)
    
     
      pop();
    }
  };