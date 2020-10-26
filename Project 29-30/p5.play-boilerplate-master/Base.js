class Base{
    constructor(x,y,w,h){
      var options2 = {
        
        isStatic:true,
        friction:1

      }
    this.body = Bodies.rectangle(x,y,w,h,options2);
    this.w = w;
    this.h = h;
    this.color = color;
    
    World.add(world,this.body);
    
     }
    
    display(){
    var pos1 = this.body.position;
    fill(this.color);
    rectMode(CENTER);
    rect(pos1.x,pos1.y,this.w,this.h) ;
    
    }
    }