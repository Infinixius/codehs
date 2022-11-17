var SIDES_ON_DICE = 6;
function start() {
    for(var a = 0; a <= SIDES_ON_DICE; a++){
        for(var b = 0; b <= SIDES_ON_DICE; b++){
            println(a + "," + b);
        }
    }
}