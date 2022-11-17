var N = 5;
function start(){
    var ans = 1;
    for (var i = 1; i <= N; i++) {
        ans = ans * i;
    }
    println(ans);
}