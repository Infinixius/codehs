function start(){
    var total = 0;
    while (true) {
        var roll = Randomizer.nextInt(1,6);
        var roll2 = Randomizer.nextInt(1,6);
        
        println(`Rolled: ${roll} ${roll2}`);
        total++;
        
        if (roll == 1 && roll2 == 1) {
            println(`It took you ${total} rolls to get snake eyes.`);
            break ;
        }
    }
}