/*
 * This program has Karel invert colors
 */
function start(){
    for (var i = 0; i < 10; i++) {
        if (colorIs(Color.red)) {
            paint(Color.blue);
        } else {
            paint(Color.red);
        }
        if (frontIsClear()) {
            move();
        }
    }
}