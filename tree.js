class Tree{
    constructor(x,y){
        var options = {
        isStatic : true,
       restitution : 0
        }
    
        this.image = loadImage("tree.png");
        this.body = Bodies.rectangle(x,y,20,20,options);
        World.add(world,this.body);
    }
    display(){
        push();
        imageMode(CENTER);
        image(this.image,this.body.position.x,this.body.position.y,500,500);
        pop();
    }
}