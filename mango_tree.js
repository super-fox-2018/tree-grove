const {FruitTree, Fruit} = require('./fruit_tree.js');

class MangoTree extends FruitTree{
  constructor(currentAge, height, matureAge, healthyStatus) {
    let obj = {
      age : currentAge,
      height : height,
      produced : [],
      harvested : 0,
      healthyStatus : healthyStatus,
      matureAge : matureAge,
      maxAge : 35,
      goodCount : 0,
      badCount : 0,
      maxFruit : 15,
      amtGrow : 50,
    };
    super(obj);
  }

  get age() {
    return this._age;
  }

  get height() {

    return ((Math.round((this._height/100) * 10)/ 10) + "m");
  }

  get fruits() {
    return this._max;
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
class Mango extends Fruit{
  // Produce an Mango
  constructor() {
    super();
    //this.quality = this.quality()
  }
}
module.exports = MangoTree
