var INCHES_TO_CM = 2.54;
var CM_TO_METERS = 0.01;
var FEET_TO_INCHES = 12;
function start(){
    convertHeightToMeters(6,4);
}
function convertHeightToMeters(feet, inches) {
    println(CM_TO_METERS * (((feet * FEET_TO_INCHES) * INCHES_TO_CM) + inches * INCHES_TO_CM));
}