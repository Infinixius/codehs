/*
 * This program has Karel paint a checkerboard
 */
function start(){
    for(var i = 0; i < 3; i++){
        rowOne();
        rowTwo();
    }
    rowOne();
    for(var i = 0; i < 3; i++){
        paint(Color.black);
        move();
        paint(Color.red);
        move();
    }
    paint(Color.black);
    move();
    paint(Color.red)
    turnLeft();
    for(var i = 0; i < 7; i++){
        move();
    }
    turnLeft();
}
function rowOne(){
    for(var i = 0; i < 3; i++){
        paint(Color.black);
        move();
        paint(Color.red);
        move();
    }
    paint(Color.black);
    move();
    paint(Color.red)
    turnLeft();
    move();
    turnLeft();
}
function rowTwo(){
    for(var i = 0; i < 3; i++){
        paint(Color.black);
        move();
        paint(Color.red);
        move();
    }
    paint(Color.black);
    move();
    paint(Color.red)
    turnRight();
    move();
    turnRight();
}