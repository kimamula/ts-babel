"use strict";

var targetObject = { "world": null };
var objectHandler = {
    get: function get(receiver, name) {
        return "Hello, " + name + "!";
    }
};
var objectProxy = new Proxy(targetObject, objectHandler);
objectProxy.world === "Hello, world!";
var targetFunction = function targetFunction(name) {
    return "I am " + name;
};
var functionHandler = {
    apply: function apply(receiver) {
        return "I am the proxy";
    }
};
var functionProxy = new Proxy(targetFunction, functionHandler);
functionProxy() === "I am the proxy";
functionProxy(0) === "I am the proxy";