function turnRight() {
    turnLeft();
    turnLeft();
    turnLeft();
}

function buryBall() {
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
    move();
}

buryBall();
buryBall();
buryBall();