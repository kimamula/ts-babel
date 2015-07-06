class MyArray extends Array {
    constructor(...args) {
        super(...args);
    }
}
var arr = new MyArray();
arr[1] = 12;
arr.length == 2;
class MyDate extends Date {
    constructor() {
        super();
    }
}
class MyElement extends Element {
}
