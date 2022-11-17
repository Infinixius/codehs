var SIDE_LENGTH = 100;
function start(){
    var square = new Rectangle(SIDE_LENGTH, SIDE_LENGTH);
    
    square.setPosition(getWidth() / 2 - SIDE_LENGTH / 2, getHeight() / 2 - SIDE_LENGTH / 2);
    square.setColor(Randomizer.nextColor());
    add(square);
}