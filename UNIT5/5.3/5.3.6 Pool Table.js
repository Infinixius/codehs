var POOL_BALL_RADIUS = 40;
var POOL_BALL_FONT = "30pt Arial";
function start(){
    drawPoolBall(Color.orange, 5, 100, 100);
    drawPoolBall(Color.green, 6, 50, 200);
    drawPoolBall(Color.red, 3, 150, 350);
    drawPoolBall(Color.blue, 2, 250, 140);
}
function drawPoolBall(color, num, x, y){
    var circle = new Circle(POOL_BALL_RADIUS);
    circle.setColor(color);
    circle.setPosition(x, y);
    add(circle);
    
    var text = new Text(num, POOL_BALL_FONT);
    text.setColor("white");
    text.setPosition(x - POOL_BALL_RADIUS / 4, y + POOL_BALL_RADIUS / 4);
    add(text);
}