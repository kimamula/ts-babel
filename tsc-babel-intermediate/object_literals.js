import { MyClass } from 'classes';
var handler = (resultCode) => { return resultCode * 10; };
var obj = {
    __proto__: MyClass.prototype,
    handler,
    toString() {
    },
    ["prop_" + (() => 42)()]: 42
};
console.log(obj.handler(1));
