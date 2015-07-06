"use strict";

function fDefault(x) {
    var y = arguments[1] === undefined ? 12 : arguments[1];

    return x + y;
}
fDefault(3) === 15;
function fRest(x) {
    for (var _len = arguments.length, y = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        y[_key - 1] = arguments[_key];
    }

    return x * y.length;
}
fRest(3, "hello", true) === 6;
function fSpread(x, y, z) {
    return x + y + z;
}