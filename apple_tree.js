const FruitTree = require('./fruit_tree.js');

class AppleTree extends FruitTree{
  constructor(name, age, height, matureAge, healthyStatus) {
    super(name, age, height, matureAge, healthyStatus);
    this._deadAge = 15;
    this._stopGrowing = 10;
  }
}

module.exports = AppleTree;
