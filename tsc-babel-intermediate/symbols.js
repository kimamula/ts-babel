var MyModule;
(function (MyModule) {
    var key = Symbol("key");
    class MyClass {
        constructor(privateData) {
            this[key] = privateData;
        }
        doStuff() {
            this[key];
        }
    }
    MyModule.MyClass = MyClass;
})(MyModule || (MyModule = {}));
var c = new MyModule.MyClass("hello");
c["key"] === undefined;
