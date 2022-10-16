function jumpHurdle() {
    turnLeft();
    move();
    turnRight();
    move();
    turnRight();
    move();
    turnLeft();
}
function start(){
    for(var i = 0; i < 13; i++){
        if (frontIsBlocked()) {
            jumpHurdle();
        } else {
            move();
        }
    }
}