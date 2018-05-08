'use strict'
const FruitTree = require('./fruit_tree.js')

class PearTree extends FruitTree {
    constructor(name, age, height, mature, health) {
        super(name, age, height, mature, health);
        this._stopGrow = 10;
        this._dead = 18;
    }
}

// var pear = new PearTree();
// console.log(pear);

module.exports = PearTree;