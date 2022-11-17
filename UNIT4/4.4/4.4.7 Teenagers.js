function start(){
    var age = readInt("How old are you?");
    
    if (age >= 13 && age <= 15) {
        println("Yes");
    } else {
        println("No");
    }
}