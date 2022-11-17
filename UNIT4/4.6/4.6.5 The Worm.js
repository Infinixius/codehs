var NUM_CIRCLES = 15;
// This graphics program should draw a worm. 
// A worm is made up of NUM_CIRCLES circles. 
// Use a for loop to draw the worm, 
// centered vertically in the screen. 
// Also, be sure that the worm is still drawn across 
// the whole canvas, even if the value of NUM_CIRCLES is changed.
function start(){
    var width = 13;
    
    for (var i = 0; i < NUM_CIRCLES; i++) {
        var circle = new Circle(13);
        circle.setPosition(width, getHeight() / 2);
        width += 26;
        add(circle);
    }
}