function start(){
    // Start here
    for (var i = 0 ; i < 5; i++){
        move();
    }
    turnLeft();
    while (frontIsClear()){
        if (rightIsBlocked()){
            putBall();
        }
        move();
    }
    putBall();
}