"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _classes = require("classes");

var handler = function handler(resultCode) {
    return resultCode * 10;
};
var obj = _defineProperty({
    __proto__: _classes.MyClass.prototype,
    handler: handler,
    toString: function toString() {}
}, "prop_" + (function () {
    return 42;
})(), 42);
console.log(obj.handler(1));