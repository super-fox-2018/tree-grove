"use strict"

const FruitTree = require('./fruit_tree.js')

class AppleTree extends FruitTree {
  // Initialize a new AppleTree
  constructor(name, agePlanted, heightPlanted, matureAge) {
    super(name, agePlanted, heightPlanted, matureAge)
  }
}

module.exports = AppleTree
