/* 
 * This program creates Karel without any of the builtin Karel commands,
 * it makes Karel from scratch using JavaScript.
 *
 * Karel only knows how to turn left.
 *
 * Your job in this program is to teach Karel how to move.
 */
 
//Variables to keep track of karel and karel's direction
var karel;
var direction;
 
//This function has Karel move forward one space, depending on what
//direction Karel is facing.
function move(){
    if(direction == EAST) {
        karel.move(KAREL_SIZE, 0);
    } else if(direction == WEST) {
        karel.move(-KAREL_SIZE, 0);
    } else if(direction == NORTH){
        karel.move(0, -KAREL_SIZE);
    } else if(direction == SOUTH){
        karel.move(0, KAREL_SIZE);
    } else{
        println("Error: Karel's Direction is not properly set.");
    }
}

/*****************************************************
 * You do not need to modify any code below this line.
 * Feel free to read the code and see how it works.
 * Your job is simply to implement the move()
 * function.
 *****************************************************/

// Constants for creating Karel
var KAREL_IMG_URL = "https://codehs.com/uploads/9a244249f215d0da12c9a13aaea5efd7";

var NUM_STREETS = 4;
var NUM_AVES = 4;
var POINT_SIZE = 3;
var WORLD_WIDTH = 400;
var WORLD_HEIGHT = 400;

var STREET_HEIGHT = WORLD_HEIGHT / NUM_STREETS;
var AVE_WIDTH = WORLD_WIDTH / NUM_AVES;

var KAREL_SIZE = STREET_HEIGHT;

var PAUSE_TIME = 1000;

var EAST = "East";
var WEST = "West";
var NORTH = "North";
var SOUTH = "South";

//Has Karel turn left then move twice
function start(){
    setupWorld();
    
    setTimeout(turnLeft, PAUSE_TIME);
    setTimeout(move, 2*PAUSE_TIME);
    setTimeout(move, 3*PAUSE_TIME);
}

//This function has the image of Karel rotate left 90 degrees
function turnLeft() {
    karel.rotate(-90);
    if(direction == EAST) {
        direction = NORTH;
    } else if(direction == WEST) {
        direction = SOUTH;
    } else if(direction == NORTH){
        direction = WEST;
    } else if(direction == SOUTH){
        direction = EAST;
    } else{
        println("Error: Karel's Direction is not properly set.");
    }
}

/*
 * This function creates Karel's world and creates Karel in the bottom left
 * corner, facing east.
 */
function setupWorld(){
    setSize(WORLD_WIDTH, WORLD_HEIGHT);
    
    //Add the points to the grid
    for(var street = 0; street < NUM_STREETS; street++){
        for(var ave = 0; ave < NUM_AVES; ave++){
            var xPosition = ave * AVE_WIDTH + AVE_WIDTH / 2;
            var yPosition = street * STREET_HEIGHT + STREET_HEIGHT / 2;
            
            var point = new Circle(POINT_SIZE);
            point.setPosition(xPosition, yPosition);
            add(point);
        }
    }
    
    //Add Karel to the grid
    karel = new WebImage(KAREL_IMG_URL);
    karel.setSize(KAREL_SIZE, KAREL_SIZE);
    
    karel.setPosition(0, WORLD_HEIGHT - KAREL_SIZE);
    add(karel);
    
    //Set Karel's initial direction
    direction = EAST;
}