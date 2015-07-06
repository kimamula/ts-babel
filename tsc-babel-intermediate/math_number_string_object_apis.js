Number.EPSILON;
Number.isInteger(Infinity);
Number.isFinite(Infinity);
Number.isNaN(NaN);
Math.acosh(3);
Math.hypot(3, 4);
Math.imul(Math.pow(2, 32) - 1, Math.pow(2, 32) - 2);
"abcde".startsWith("xy");
"abcde".endsWith("de");
"abcde".normalize();
"abc".repeat(3);
Array.from(document.querySelectorAll("*"));
Array.of(1, 2, 3);
var numberArray = [1, 2, 3];
numberArray.fill(7, 1);
numberArray.findIndex((x) => x === 2)["a", "b", "c"].entries()["a", "b", "c"].keys()["a", "b", "c"].values();
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}
Object.assign(Point, { origin: new Point(0, 0) });
