function start(){
    var units = readBoolean("Do you have enough credits?");
    var requirements = readBoolean("Have you met the requirements");
    
    print(units && requirements);
}