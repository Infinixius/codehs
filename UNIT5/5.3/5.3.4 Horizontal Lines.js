function start(){
    horizontalLine(100, 200);
    horizontalLine(200, 100);   
    horizontalLine(300, 20);
}
function horizontalLine(pos, len) {
    var line = new Line(0, pos, len, pos);
    add(line);
}