function start() {
	var circle = new Circle(50);
	circle.setPosition(100, 200);
	circle.setColor("red");
	add(circle);
    keyDownMethod(keyDown);
}
function keyDown(e) {
    if (e.key == "ArrowLeft") {
        circle.setRadius(circle.getRadius() * 2);
    }
    if(e.key == "ArrowRight"){
        circle.setRadius(circle.getRadius() / 2);
    }
}