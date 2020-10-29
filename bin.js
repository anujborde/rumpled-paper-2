class Bin{
    constructor(x,y,width,height){
        
        var options ={
            isStatic:true,
            friction:0.5,
        density:0.3,
        restitution:0.3
            }
            
            
            this.body=Bodies.rectangle(x,y,width,height,options)
          this.height=height
         this.width=width 
         this.image=loadImage("dustbingreen.png")
            World.add(world,this.body);
    
    }
    
    display(){
    fill ("white")
    
        
        
        imageMode(CENTER)
    image(this.image,this.body.position.x,this.body.position.y,this.width,this.height)
    
    }
}
