class dustbin {
    constructor(x,y){
    
    this.x=x;
    this.y=y;
    this.dustbinWidth=200;
    this.dustbinHeight=100;
    this.wallThickness=20;
    this.angle=0;

    
    this.bottomBody=Bodies.rectangle(this.x, this.y, this.dustbinWidth, this.wallThickness, {isStatic:true});
    this.leftwallBody=Bodies.rectangle(this.x-this.dustbinWidth/2, this.y-this.dustbinHeight/2,this.wallThickness,{isStatic:true});
    Matter.Body.setAngle(this.leftwallBody, this.angle);

    this.rightwallBody=Bodies.rectangle(this.x+this.dustbinWidth/2, this.y-this.dustbinHeight/2,this.wallThickness, this.dustbinHeight, {isStatic:true});
    Matter.Body.setAngle(this.rightwallBody, -1*this.angle);
    World.add(world, this.bottomBody);
    World.add(world, this.leftwallBody);
    World.add(world, this.rightwallBody);

    }display(){
      
      var posBottom=this.bottomBody.position;
      var posLeft=this.leftwallBody.position;
      var posRight=this.rightwallBody.position;

      push();
      translate(posLeft.x, posLeft.y);
      rectMode(CENTER);
      strokeWeight(4);
      angleMode(RADIANS);
      fill(255);
      stroke(255);
      rotate(this.angle);
      rect(0,0, this.wallThickness, this.dustbinHeight);
      pop();
       
      push();
      translate(posRight.x, posRight.y);
      rectMode(CENTER);
      strokeWeight(4);
      angleMode(RADIANS);
      fill(255);
      stroke(255);
      rotate(this.angle);
      rect(0,0, this.wallThickness, this.dustbinHeight );
      pop();  

      push();
      translate(posBottom.x, posBottom.y);
      rectMode(CENTER);
      strokeWeight(4);
      angleMode(RADIANS);
      fill(255);
      stroke(255);
      rotate(this.angle);
      rect(0,0,this.wallThickness,this.dustbinHeight );
      pop(); 



  }
}
