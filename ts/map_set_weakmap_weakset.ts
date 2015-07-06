// Sets
var s = <Set<string>>new Set();
s.add("hello").add("goodbye").add("hello");
s.size === 2;
s.has("hello") === true;

// Maps
var m = <Map<any, number>>new Map();
m.set("hello", 42);
m.set(s, 34);
m.get(s) == 34;

// Weak Maps
var wm = <WeakMap<Set<string>, any>>new WeakMap();
wm.set(s, { extra: 42 });
wm['size'] === undefined;

// Weak Sets
var ws = <WeakSet<{data: number}>>new WeakSet();
ws.add({ data: 42 });
// Because the added object has no other references, it will not be held in the set
