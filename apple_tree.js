const FruitTree = require('./fruit_tree');

class AppleTree extends FruitTree{
  constructor(name, age, height, matureAge, healthyStatus) {
    super(name, age, height, matureAge, healthyStatus, 17);
  }
}

module.exports = AppleTree;