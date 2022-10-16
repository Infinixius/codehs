// This program fetches a ball and puts it at the start.
function jump() {
    for (var i = 0; i < 4; i++) {
        move();
    }
}
function turnAroundX() {
    turnLeft();
    turnLeft();
}
function start() {
    turnLeft();
    jump();
    turnRight();
    move();
    move();
    takeBall();
    turnAroundX();
    move();
    move();
    turnLeft();
    jump();
    turnLeft();
    putBall();
}