// Proxying a normal object
interface TargetObject {
    world: string
}
var targetObject: TargetObject = {'world': null};
var objectHandler = {
  get: function (receiver: TargetObject, name: string) {
    return `Hello, ${name}!`;
  }
};

var objectProxy = new Proxy(targetObject, objectHandler);
objectProxy.world === "Hello, world!";
// This raises a compilation error! Great!
// objectProxy.foo === "Hello, world!";

// Proxying a function object
var targetFunction = (name: string) => { return `I am ${name}`; };
var functionHandler = {
  apply: function (receiver: Function, ...args: any[]) {
    return "I am the proxy";
  }
};

var functionProxy = new Proxy(targetFunction, functionHandler);
functionProxy() === "I am the proxy";
// This does not raise a compilation error...
functionProxy(0) === "I am the proxy";
// This rases "Cannot find name 'Proxy'"
// (<Proxy<(name: string) => string>>new Proxy(targetFunction, functionHandler))(0);
