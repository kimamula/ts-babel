"use strict";

var s = new Set();
s.add("hello").add("goodbye").add("hello");
s.size === 2;
s.has("hello") === true;
var m = new Map();
m.set("hello", 42);
m.set(s, 34);
m.get(s) == 34;
var wm = new WeakMap();
wm.set(s, { extra: 42 });
wm["size"] === undefined;
var ws = new WeakSet();
ws.add({ data: 42 });