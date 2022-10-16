/* Constants representing the radius of the top, middle,
 * and bottom snowball. */
var BOTTOM_RADIUS = 100;
var MID_RADIUS = 60;
var TOP_RADIUS = 30;
function start(){
    var circle = new Circle(30);
    circle.setPosition(200, 130);
    circle.setColor(Color.grey);
    add(circle);
    
    var circle = new Circle(60);
    circle.setPosition(200, 220);
    circle.setColor(Color.grey);
    add(circle);
    
    var circle = new Circle(100);
    circle.setPosition(200, 380);
    circle.setColor(Color.grey);
    add(circle);
}