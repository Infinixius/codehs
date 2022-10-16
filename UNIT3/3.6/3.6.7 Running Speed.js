/* Write a program that asks the user how far they ran (in miles)
 * and then how long it took them (in minutes), and print out
 * their speed in miles per hour. */
function start(){
    var miles = readInt("How far did you run in miles? ");
    var minutes = readInt("How long did it take you in minutes? ");
    
    println("Miles per hour: " + (miles/(minutes / 60)));
}