"use strict"

const FruitTree = require('./fruit_tree.js');

// console.log(FruitTree);

class MangoTree extends FruitTree {
  // Initialize a new MangoTree
  constructor(name, agePlanted, heightPlanted, matureAge) {
    super(name, agePlanted, heightPlanted, matureAge)
  }
}

module.exports = MangoTree;
