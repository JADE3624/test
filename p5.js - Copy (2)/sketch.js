function sum(n) {
    var out = 0;
    for (var i = 0; i <= n; i++) {
        out = out + i;
    }
    return out;
}
var s = sum(3);
console.log(s)
