function fDefault(x, y = 12) {
    return x + y;
}
fDefault(3) === 15;
function fRest(x, ...y) {
    return x * y.length;
}
fRest(3, "hello", true) === 6;
function fSpread(x, y, z) {
    return x + y + z;
}
