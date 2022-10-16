function start(){
    buildTower();
    while(frontIsClear()){
        move();
        safeMove();
    }
}
// Builds a tower
function buildTower(){
    turnLeft();
    putBall();
    move();
    putBall();
    move();
    putBall();
    turnAround();
    move();
    move();
    turnLeft();
}
// Checks if it is safe to move forward
function safeMove(){
    if(frontIsClear()){
        move();
        buildTower();
    }
}