function turnRight() {
    turnLeft();
    turnLeft();
    turnLeft();
}
function start() {
    move();
    tower();
    move();
    towerStayPut();
}
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