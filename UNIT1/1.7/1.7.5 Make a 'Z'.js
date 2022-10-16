function turnRight() {
    turnLeft();
    turnLeft();
    turnLeft();
}
function turnAround() {
    turnLeft();
    turnLeft();
}
function start(){
    putBallsInRow();
    makeDiagonal();
    move();
    turnAround();
    putBallsInRow();
}
// Puts down four balls in a row
function putBallsInRow(){
    move();
    putBall();
    move();
    putBall();
    move();
    putBall();
    move();
    putBall();
}
// Makes the diagonal for the 'Z'
function makeDiagonal(){
    turnRight();
    move();
    turnRight();
    move();
    putBall();
    
    turnLeft();
    move();
    turnRight();
    move();
    putBall();
    turnLeft();
    move();
    turnRight();
    move();
}