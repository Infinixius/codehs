/* This program will play a simple guessing game.
 * The user will guess, and the computer should print if
 * the guess was too high, too low, or correct.
 */
var lowerLimit = 1;
var upperLimit = 25;
var tries = 5;
var answer = Math.floor(Math.random() * (upperLimit - lowerLimit + 1)) + lowerLimit;
var guess = "";
var message = "Guess a number between " + lowerLimit + " and " + upperLimit + ":";

// Keep prompting the user for a guess until the game ends.
while (tries > 0) {
    guess = readLine(message);
    if (guess == null) {
        println("Quitting game now.");
        break;
    } else if (isFinite(guess) && guess != "") {
        guess = + guess;
        
        if (guess < lowerLimit) {
            println("Your guess should be no less than " + lowerLimit + ".");
        } else if (guess > upperLimit) {
            println("Your guess should be no greater than " + upperLimit + ".");
        } else if (guess > answer) {
            println("Your guess is too high.");
        } else if (guess < answer) {
            println("Your guess is too low");
        } else {
            println("Great job, you got it!");
            break;
        }
    } else {
        println("You must enter a number as a guess.");
    }
    
    tries = tries - 1;
    
    if (tries == 0) {
        println("You ran out of tries. The number was " + answer + ".");
    }
}