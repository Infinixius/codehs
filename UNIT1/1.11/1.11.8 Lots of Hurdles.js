// Jumps over a hurdle.
function jumpHurdle() {
    turnLeft();
    move();
    turnRight();
    move();
    turnRight();
    move();
    turnLeft();
}
function start() {
    for(var i = 0; i < 5; i++){
        move();
        move();
        jumpHurdle();
    }
}