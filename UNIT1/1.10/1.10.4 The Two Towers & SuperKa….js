// This function starts our program.
function start() {
    move();
    tower();
    move();
    towerStayPut();
}
// This function creates a new tower, and sends Karel back down.
function tower() {
    turnLeft();
    putBall();
    move();
    putBall();
    move();
    putBall();
    
    turnRight();
    turnRight();
    move();
    move();
    turnLeft();
    move();
}
// This function creates a new tower aswell, but keeps Karel at the top of it.
function towerStayPut() {
    turnLeft();
    putBall();
    move();
    putBall();
    move();
    putBall();
    
    move();
    turnRight();
}