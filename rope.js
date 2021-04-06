class Rope{
    constructor(bodyA,bodyB){
        var options = {
            bodyA : bodyA,
            bodyB : bodyB,
            stiffness : 0.004,
            length : 0
        }
        this.rope = Constraint.create(options);
        World.add(world,this.rope);
        
    }
    fly(){
        this.rope.bodyB = null;
    }
    attach(ft){
        this.rope.bodyB = ft;
    }
    display(){
    push();
    if(this.rope.bodyB){
    strokeWeight(4);
    stroke("black");
    line(this.rope.bodyA.position.x,this.rope.bodyA.position.y,
        this.rope.bodyB.position.x,this.rope.bodyB.position.y);
    }
    pop();
    }
}