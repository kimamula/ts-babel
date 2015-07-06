Number.EPSILON
Number.isInteger(Infinity) // false
Number.isFinite(Infinity) // true
Number.isNaN(NaN) // true

Math.acosh(3) // 1.762747174039086
Math.hypot(3, 4) // 5
Math.imul(Math.pow(2, 32) - 1, Math.pow(2, 32) - 2) // 2

"abcde".startsWith("xy") // false
"abcde".includes("cd") // true
"abcde".endsWith("de") // true
"abcde".normalize()
"abc".repeat(3) // "abcabcabc"

Array.from(document.querySelectorAll("*")) // Returns a real Array
Array.of(1, 2, 3) // Similar to new Array(...), but without special one-arg behavior
var numberArray = [1, 2, 3];
numberArray.fill(7, 1) // [1,7,7]
numberArray.findIndex((x: number) => x === 2) // 1
["a", "b", "c"].entries() // iterator [0, "a"], [1,"b"], [2,"c"]
["a", "b", "c"].keys() // iterator 0, 1, 2
["a", "b", "c"].values() // iterator "a", "b", "c"

class Point {
    constructor(private x: number, private y: number) {}
}
Object.assign(Point, { origin: new Point(0,0) })
