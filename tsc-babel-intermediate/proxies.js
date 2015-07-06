var targetObject = { 'world': null };
var objectHandler = {
    get: function (receiver, name) {
        return `Hello, ${name}!`;
    }
};
var objectProxy = new Proxy(targetObject, objectHandler);
objectProxy.world === "Hello, world!";
var targetFunction = (name) => { return `I am ${name}`; };
var functionHandler = {
    apply: function (receiver, ...args) {
        return "I am the proxy";
    }
};
var functionProxy = new Proxy(targetFunction, functionHandler);
functionProxy() === "I am the proxy";
functionProxy(0) === "I am the proxy";
