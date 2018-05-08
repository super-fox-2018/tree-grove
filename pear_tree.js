"use strict"

const FruitTree = require('./fruit_tree.js')

class PearTree extends FruitTree {
  // Initialize a new PearTree
  constructor(name, agePlanted, heightPlanted, matureAge) {
    super(name, agePlanted, heightPlanted, matureAge)
  }
}

module.exports = PearTree
