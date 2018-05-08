'use strict'
const FruitTree = require('./fruit_tree.js')

class AppleTree extends FruitTree {
    constructor(name, age, height, mature, health) {
        super(name, age, height, mature, health);
        this._stopGrow = 10;
        this._dead = 18;
    }
}

// var apple = new AppleTree();
// console.log(apple);

module.exports = AppleTree;