"use strict";

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var MyArray = (function (_Array) {
    function MyArray() {
        _classCallCheck(this, MyArray);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        _get(Object.getPrototypeOf(MyArray.prototype), "constructor", this).apply(this, args);
    }

    _inherits(MyArray, _Array);

    return MyArray;
})(Array);

var arr = new MyArray();
arr[1] = 12;
arr.length == 2;

var MyDate = (function (_Date) {
    function MyDate() {
        _classCallCheck(this, MyDate);

        _get(Object.getPrototypeOf(MyDate.prototype), "constructor", this).call(this);
    }

    _inherits(MyDate, _Date);

    return MyDate;
})(Date);

var MyElement = (function (_Element) {
    function MyElement() {
        _classCallCheck(this, MyElement);

        _get(Object.getPrototypeOf(MyElement.prototype), "constructor", this).apply(this, arguments);
    }

    _inherits(MyElement, _Element);

    return MyElement;
})(Element);