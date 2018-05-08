const FruitTree = require('./fruit_tree.js');

class MangoTree extends FruitTree{
  constructor(name, age, height, matureAge, healthyStatus) {
    super(name, age, height, matureAge, healthyStatus);
    this._deadAge = 20;
    this._stopGrowing = 10;
  }
}

module.exports = MangoTree;
