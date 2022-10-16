/* This program draws a big tower from Karel's starting spot */
function faceNorth() {
    while (notFacingNorth()) {
        turnLeft();
    }
}
function placeBalls() {
    putBall();
    if (frontIsClear()) {
        move();
    }
}
function start(){
    faceNorth();
    
    while (noBallsPresent()) {
        placeBalls();
    }
}