function start(){
    move();
    while (ballsPresent()){
        takeBall();
        move();
        putTwoBalls();
        moveBack();
    }
    move();
    while (ballsPresent()){
        putBack();
    }
    moveBack();
    moveBack();
}
// Move backwards
function moveBack(){
    turnAround();
    move();
    turnAround();
}
// Take all balls
function putTwoBalls(){
    putBall();
    putBall();
}
// Put all balls back
function putBack(){
    takeBall();
    moveBack();
    putBall();
    move();
}