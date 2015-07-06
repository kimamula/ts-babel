"use strict";

var evens = [0, 2, 4, 6, 8];
var fives;
var odds = evens.map(function (v) {
    return v + 1;
});
var nums = evens.map(function (v, i) {
    return v + i;
});
nums.forEach(function (v) {
    if (v % 5 === 0) fives.push(v);
});
var bob = {
    _name: "Bob",
    _friends: [],
    printFriends: function printFriends() {
        var _this = this;

        this._friends.forEach(function (f) {
            return console.log(_this._name + " knows " + f);
        });
    }
};