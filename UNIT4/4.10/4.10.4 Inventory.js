var STARTING_ITEMS_IN_INVENTORY = 20;
function start(){
    var numItems = STARTING_ITEMS_IN_INVENTORY; 
    while (numItems > 0) {
        println(`We have ${numItems} items in inventory.`);
        var num = readLine("How many would you like to buy? ");
        if (num > numItems) {
            println("There is not enough in inventory for that purchase.");
        } else {
            numItems -= num;
            println(`Now we have ${numItems} left.`);
        }
    }
}