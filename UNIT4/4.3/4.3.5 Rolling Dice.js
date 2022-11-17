function start(){
    var dice1 = readInt("Result of die 1:");
    var dice2 = readInt("Result of die 2:");
    
    var rolledDoubles = dice1 == dice2;
    
    println(rolledDoubles);
}