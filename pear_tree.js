const {FruitTree, Fruit} = require('./fruit_tree.js');

class PearTree extends FruitTree  {
  constructor(currentAge, height, matureAge, healthyStatus) {
    let obj = {
      age : currentAge,
      height : height,
      produced : [],
      harvested : 0,
      healthyStatus : healthyStatus,
      matureAge : matureAge,
      maxAge : 20,
      goodCount : 0,
      badCount : 0,
      maxFruit : 30,
      amtGrow : 150,
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
class Pear extends Fruit {
  // Produce an Pear
  constructor() {
    super();
    //this.quality = this.quality()
  }
}

module.exports = PearTree