class Ground{
    constructor(x,y){
        var options = {
        isStatic : true,
       restitution : 0

        }
        this.body = Bodies.rectangle(x,y,1600,10,options);
        World.add(world,this.body);
    }
    display(){
        push();
        fill("black");
        rectMode(CENTER);
        rect(this.body.position.x,this.body.position.y,1600,10);
        pop();
    }
}