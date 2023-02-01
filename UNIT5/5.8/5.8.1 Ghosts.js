// Constants for main ghost body
var HEAD_RADIUS = 35;
var BODY_WIDTH = HEAD_RADIUS * 2;
var BODY_HEIGHT = 60;
var NUM_FEET = 3;
var FOOT_RADIUS = (BODY_WIDTH) / (NUM_FEET * 2); 

// Constants for eyes
var PUPIL_RADIUS = 4;
var PUPIL_LEFT_OFFSET = 8;
var PUPIL_RIGHT_OFFSET = 20;
var EYE_RADIUS = 10;
var EYE_OFFSET = 14;

/* Write a comment here about your overall program */
function start(){
	var centerX = getWidth()  /2;
    var centerY = getHeight() / 2;
    
    drawGhost(centerX, centerY, Color.red);
    drawGhost(100, 100, Color.green);
    drawGhost(300, 200, Color.black);
    drawGhost(40, 300, Color.orange);
    drawGhost(300, 50, Color.yellow);
}

function drawGhost(centerX, centerY, color){
    drawBody(centerX, centerY, color);

    for(var i = 0; i < NUM_FEET; i++){
        drawCircle(
            (centerX - HEAD_RADIUS) + FOOT_RADIUS + (i * 23),
            centerY + BODY_HEIGHT,
            FOOT_RADIUS,
        color);
    }
    
    drawEye(centerX - EYE_OFFSET, centerY);
    drawEye(centerX + EYE_OFFSET, centerY);
}

function drawEye(x, y){
    drawCircle(x, y, EYE_RADIUS, Color.white);
    drawCircle(x + PUPIL_LEFT_OFFSET, y, PUPIL_RADIUS, Color.blue);
}

function drawBody(x, y, col){
    drawCircle(x, y, HEAD_RADIUS, col);
    drawRect(x-HEAD_RADIUS, y, BODY_WIDTH, BODY_HEIGHT, col);
}

function drawCircle(x, y, rad, col){
    var circle = new Circle(rad);
    circle.setPosition(x, y);
    circle.setColor(col);
    add(circle);
}

function drawRect(x, y, w, h, col){
    var rect = new Rectangle(w, h);
    rect.setPosition(x, y);
    rect.setColor(col);
    add(rect);
}