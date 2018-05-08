"use strict"

// release 0
const Tree = require('./tree.js')

class PearTree extends Tree {
  // Initialize a new PearTree
  constructor(treeName, age, height, matureAge, healthyStatus) {
    super(treeName, age, height, matureAge, healthyStatus);
    // this._matureAge = matureAge;
    this._maxHeightAge = 10;
    this._maxAge = 20;
    // this._healthyStatus = true;
    this._isHarvesting = false;
  }


  get harvested() {
    // return this._harvested // return (string)
    // <number> (<numberGood> good, <numberBad> bad)
    return `${this._fruits.length} (${this._goodCounter} good, ${this._badCounter} bad)`
  }

  // Get current states here

  // Produce some Pears
  producePears() {
    if (this._isHarvesting === true) {
      this._fruits = [];
      let randomNumber = Math.floor(Math.random() * (10 - 1) + 1);
      let counter = 0;
      while (counter < randomNumber) {
        let pear = new Pear();
        this._fruits.push(pear);
        counter++;
      }
      //console.log(this._fruits);
    }
  }
}

class Pear {
  // Produce a Pear
  constructor() {
    // atribut quality memiliki default value yang isinya random antara good/bad
    this._quality = this.randomQuality();
  }
  
  get quality() {
    return this._quality;
  }

  randomQuality() {
    let quality = ['good', 'bad'];
    let randomPick = Math.floor(Math.random() * quality.length);

    return quality[randomPick];
  }
}

module.exports = PearTree