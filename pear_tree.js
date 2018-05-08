const FruitTree = require('./fruit_tree');

class PearTree extends FruitTree{
  constructor(name, age, height, matureAge, healthyStatus) {
    super(name, age, height, matureAge, healthyStatus, 16);
  }
}

module.exports = PearTree;