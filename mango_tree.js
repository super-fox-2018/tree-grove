'use strict'
const FruitTree = require('./fruit_tree.js')

class MangoTree extends FruitTree {
    constructor(name, age, height, mature, health) {
        super(name, age, height, mature, health);
        this._stopGrow = 10;
        this._dead = 20;
    }
}

// var mango = new MangoTree();
// console.log(mango);

module.exports = MangoTree;