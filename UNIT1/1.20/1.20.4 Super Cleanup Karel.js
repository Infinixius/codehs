function start() {
    for (var i = 0; i < 12; i++){
        rowOne();
        rowTwo();
        safeMove();
        turnRight();
    }
    rowOne();
    rowTwo();
    turnAround();
    safeMove();
}
function rowOne(){
    while (frontIsClear()){
        ball();
        safeMove();
    }
    ball();
    turnLeft();
    safeMove();
    turnLeft();
}
function rowTwo(){
    while (frontIsClear()){
        ball();
        safeMove();
    }
    ball();
    turnRight();
}
// Checks if it is safe to move then moves
function safeMove(){
    if (frontIsClear()){
        move();
    }
}
// Takes a ball if one exists
function ball(){
    if (ballsPresent()){
        takeBall();
    }
}