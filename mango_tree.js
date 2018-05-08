const FruitTree = require('./fruit_tree');

class MangoTree extends FruitTree{
  constructor(name, age, height, matureAge, healthyStatus) {
    super(name, age, height, matureAge, healthyStatus, 20);
  }
}

module.exports = MangoTree;