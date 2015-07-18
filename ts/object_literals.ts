import {MyClass} from 'classes';

var handler = (resultCode: number) => {return resultCode * 10};

var obj = {
    // __proto__
    __proto__: new MyClass(10, 'Luke'),
    // Shorthand for ‘handler: handler’
    handler,
    // Methods
    toString() {
     // Super calls
     return "d " + super.toString();
    },
    // Computed (dynamic) property names
    ["prop_" + (() => 42)()]: 42
};

console.log(obj.handler(1));
