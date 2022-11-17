function start(){
    var noSchoolToday = false;
    
    var weekday = readBoolean("Is today a weekday?");
    var holiday = readBoolean("Is today a holiday?");
    
    if (!weekday) noSchoolToday = true;
    if (holiday)  noSchoolToday = true;
    
    println("There is no school today: " + noSchoolToday);
}