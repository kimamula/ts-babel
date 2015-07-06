'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _ref = [1, 2, 3];
var a = _ref[0];
var b = _ref[2];

var ASTNode = function ASTNode(op, lhs, rhs) {
    _classCallCheck(this, ASTNode);

    this.op = op;
    this.lhs = lhs;
    this.rhs = rhs;
};

function getASTNode() {
    return new ASTNode('op', null, null);
}

var _getASTNode = getASTNode();

var o = _getASTNode.op;
var lo = _getASTNode.lhs.op;
var r = _getASTNode.rhs;

var _getASTNode2 = getASTNode();

var op = _getASTNode2.op;
var lhs = _getASTNode2.lhs;
var rhs = _getASTNode2.rhs;

function g(_ref2) {
    var x = _ref2.name;

    console.log(x);
}
g({ name: 'Taro' });
var num;
var _ref3 = [];
var num = _ref3[0];
var _ref4 = [];
var _ref4$0 = _ref4[0];
var num = _ref4$0 === undefined ? 1 : _ref4$0;