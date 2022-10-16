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
    for(var i = 0; i < 5; i++) {
        move();
        move();
        jumpHurdle();
    }
}
function jumpHurdle(){
    turnLeft();
    move();
    turnRight();
    move();
    turnRight();
    move();
    turnLeft();
}