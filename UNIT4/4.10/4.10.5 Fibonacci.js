var MAX = 1000;
function start(){
    var firstNum = 0;
    var secondNum = 1;
    
    println("1");
    
    while (firstNum + secondNum < MAX) {
        var answer = firstNum + secondNum;
        firstNum = secondNum;
        secondNum = answer;
        println(answer);
    }
}