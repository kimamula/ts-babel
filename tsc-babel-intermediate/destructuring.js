var [a, , b] = [1, 2, 3];
class ASTNode {
    constructor(op, lhs, rhs) {
        this.op = op;
        this.lhs = lhs;
        this.rhs = rhs;
    }
}
function getASTNode() {
    return new ASTNode('op', null, null);
}
var { op: o, lhs: { op: lo }, rhs: r } = getASTNode();
var { op, lhs, rhs } = getASTNode();
function g({ name: x }) {
    console.log(x);
}
g({ name: 'Taro' });
var num;
var [num] = [];
var [num = 1] = [];
