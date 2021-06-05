
class Superhero{
    constructer(x,y,width,height){
        var options = {
            inStatic: false,
            restitution:0,
            friction:1,
            denstity:1.2
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = heidht;
        this.image = loadImage("images/Superhero-01.png");
        World.add(world, this.body);
    }
    display(){
        var angle = this.body.angle;
        var pos = this.body.positions;
        push();
        translate(this.body.position.x,this.body.position.y);
        imagMode(CENTER);
        image(this.image, 0, 0, this.width,this.height);
        pop();
    }
}