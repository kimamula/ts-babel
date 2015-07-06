// list matching
var [a, , b] = [1,2,3];

class ASTNode {
    constructor(public op: string, public lhs: ASTNode, public rhs: ASTNode) {}
}


function getASTNode() {
    return new ASTNode('op', null, null);
}

// object matching
var { op: o, lhs: { op: lo }, rhs: r }
       = getASTNode();

// object matching shorthand
// binds `op`, `lhs` and `rhs` in scope
var {op, lhs, rhs} = getASTNode();

// Can be used in parameter position
function g({name: x}: {name: string}) {
  console.log(x);
}
g({name: 'Taro'});

// Fail-soft destructuring
var num: number;
var [num]: number[] = [];
// num === undefined;

// Fail-soft destructuring with defaults
var [num = 1]: number[] = [];
// num === 1;
