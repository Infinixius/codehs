/* This program draws a circle wherever the user
 * clicks. */
function start(){
    mouseClickMethod(drawRectangle);
}
function drawRectangle(e){
    var rectangle = new Rectangle(20, 20);
    rectangle.setPosition(e.getX(), e.getY());
    rectangle.setColor(Randomizer.nextColor());
    add(rectangle);
}