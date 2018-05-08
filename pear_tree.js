const FruitTree = require('./fruit_tree.js');

class PearTree extends FruitTree  {
  constructor(currentAge, height, matureAge, healthyStatus) {
    let obj = {
      age : currentAge,
      height : height,
      produced : [],
      harvested : 0,
      healtyStatus : healthyStatus,
      matureAge : matureAge,
      maxAge : 20,
      goodCount : 0,
      badCount : 0,
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


  // Get current states here

  // Grow the tree
  grow() {
    this._age += 1;

    if(this._age <= this.__maxAge){
      var ran = Math.floor(Math.random() * 150 + 1);
      this._height += ran;
    }
    if(this._age >= this._maxAge){
      this._healthyStatus = false;
    }
  }

  // Produce some Pears
  producePears() {
    this._badCount = 0;
    this._goodCount = 0;
    if(this._age >= this._matureAge){
      var ran = Math.floor(Math.random() * 30 + 1);
      for(let i=0; i<ran; i++) {
        let Pear = new Pear()
        this._produced.push(Pear);
      }
    }

  }

  // Get some fruits
  harvest() {

    this._harvested = this._produced.length
    for(let i = 0; i < this._harvested; i++){
      if(this._produced[i].quality === "bad"){
        this._badCount++;
      }
      else if(this._produced[i].quality === "good"){
        this._goodCount++;
      }
    }
  }

}
class Pear {
  // Produce an Pear
  constructor() {
    this.quality = this.quality()
  }

  quality(){
    var arr = ["good", "bad"];
    var ran = Math.floor(Math.random() * arr.length);

    return arr[ran];
  }
}

module.exports = PearTree