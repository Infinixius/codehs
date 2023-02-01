var LIGHT_RADIUS = 35;
var STOPLIGHT_WIDTH = 100;
var STOPLIGHT_HEIGHT = 300;
var BUFFER = 100;
var GRAY_COLOR = "#737071";
var halfWidth = getWidth() / 2;
var halfHeight = getHeight() / 2;
function start() {
    drawRect(STOPLIGHT_WIDTH, STOPLIGHT_HEIGHT);
    drawCircle(halfHeight - BUFFER, "red");
    drawCircle(halfHeight, "yellow");
    drawCircle(halfHeight + BUFFER, "green");
}
function drawCircle(ypos, color) {
    var circle = new Circle(LIGHT_RADIUS);
    circle.setColor(color);
    circle.setPosition(halfWidth, ypos);
    add(circle);
}
function drawRect(w, h) {
    var rect = new Rectangle(w, h);
    rect.setPosition(halfWidth - 50, halfHeight - 150);
    rect.setColor("gray");
    add(rect);
}