/* This program should draw the French flag. The
 * left third of the canvas is blue, the middle third
 * is white, and the right third is red. */
function start(){
    var blue = new Rectangle(getWidth() / 3, getHeight());
    blue.setColor(Color.blue);
    blue.setPosition(0, 0);
    add(blue);
    
    var red = new Rectangle(getWidth() / 3, getHeight());
    red.setColor(Color.red);
    red.setPosition(getWidth() - getWidth() / 3, 0);
    add(red);
}