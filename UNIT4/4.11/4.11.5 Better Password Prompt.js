var SECRET = "abc123";
function start(){
    while (true) {
        var guess = readLine("Enter password: ");
        
        if (guess == SECRET) {
            print("You got it!");
            break;
        } else {
            println("Sorry, that did not match. Please try again.");
        }
    }
}