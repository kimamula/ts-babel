"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MyModule;
(function (MyModule) {
    var key = Symbol("key");

    var MyClass = (function () {
        function MyClass(privateData) {
            _classCallCheck(this, MyClass);

            this[key] = privateData;
        }

        _createClass(MyClass, [{
            key: "doStuff",
            value: function doStuff() {
                this[key];
            }
        }]);

        return MyClass;
    })();

    MyModule.MyClass = MyClass;
})(MyModule || (MyModule = {}));
var c = new MyModule.MyClass("hello");
c["key"] === undefined;