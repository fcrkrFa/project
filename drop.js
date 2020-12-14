class Drop
{
    constructor()
    {
        var options
        {
            restitution: 0.5
        }
        this.radius = random(3,6)
        this.body = Bodies.circle(random(0,400), random(0,400),this.radius, options);
        World.add(myWorld, this.body);
    }
    display()
    {
        var pos = this.body.position;
        fill(150,200,255);
        ellipseMode(RADIUS);
        ellipse(pos.x,pos.y,this.radius,this.radius);
        if(pos.y > height)
        {
            Matter.Body.setPosition(this.body, {x: random(0,400), y: random(0,400)})
        }
    }
}