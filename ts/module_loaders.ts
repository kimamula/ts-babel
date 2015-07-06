// Dynamic loading – ‘System’ is default loader
System.import("lib/math").then(function(m: {sum: (a: number, b: number) => number, pi: number}) {
  alert("2π = " + m.sum(m.pi, m.pi));
});

// Create execution sandboxes – new Loaders
var loader = new Loader({
  global: fixup(window) // replace ‘console.log’
});
loader.eval("console.log(\"hello world!\");");

// Directly manipulate module cache
System.get("jquery");
System.set("jquery", Module({$: window['$']})); // WARNING: not yet finalized
