const {FruitTree, Fruit} = require('./fruit_tree.js');

class AppleTree extends FruitTree {
  constructor(currentAge, height, matureAge, healthyStatus) {
    let obj = {
      age : currentAge,
      height : height,
      produced : [],
      harvested : 0,
      healthyStatus : healthyStatus,
      matureAge : matureAge,
      maxAge : 30,
      goodCount : 0,
      badCount : 0,
      maxFruit : 20,
      amtGrow : 100,
    };
    super(obj);
  }

  get age() {
    return this._age;
  }

  get height() {

    return ((Math.round((this._height/100) * 10)/ 10) + "m");
  }

  get healthyStatus() {
    return this._healthyStatus;
  }

  get harvested() {
    return this._harvested + " (" + this._goodCount + " good, " + this._badCount + " bad)";
  }
  get maxAge(){
    return this._maxAge;
  }

}
class Apple extends Fruit {
  // Produce an apple
  constructor() {
    super();
  }
}

module.exports = AppleTree