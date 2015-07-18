function fDefault(x: number, y = 12) {
  // y is 12 if not passed (or passed as undefined)
  return x + y;
}
fDefault(3) === 15;

function fRest(x: number, ...y: any[]) {
  // y is an Array
  return x * y.length;
}
fRest(3, "hello", true) === 6

function fSpread(x: number, y: number, z: number) {
  return x + y + z;
}
// Pass each elem of array as argument
fSpread(...[1, 2, 3]) === 6;
(<any>fSpread)(...[1, 2, 3]) === 6; // This can be compiled
