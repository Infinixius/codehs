function turnRight(){
    turnLeft();
    turnLeft();
    turnLeft();                 
}
function dig() {
    move();
    move();
    turnRight();
    move();
    move();
    move();
    putBall();
    
    turnLeft();
    turnLeft();
    
    move();
    move();
    move();
    turnRight();
}
function start() {
    dig();
    move();
    dig();
    move();
    dig();
    move();
}