const FruitTree = require('./fruit_tree.js');

class PearTree extends FruitTree{
  constructor(name, age, height, matureAge, healthyStatus) {
    super(name, age, height, matureAge, healthyStatus);
    this._deadAge = 25;
    this._stopGrowing = 10;
  }
}

module.exports = PearTree;
