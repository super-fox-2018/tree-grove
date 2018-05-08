"use strict"

// release 0
const Tree = require('./tree.js')
class MangoTree extends Tree {
  // Initialize a new MangoTree
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

  // Produce some mangoes
  produceMangoes() {
    // 1. menghasilkan buah mangga
    // 2. atribut fruits telah memiliki value beberapa object mango, jumlahnya random
    if (this._isHarvesting === true) {
      this._fruits = [];
      let randomNumber = Math.floor(Math.random() * (10 - 1) + 1);
      let counter = 0;
      while (counter < randomNumber) {
        let mango = new Mango();
        this._fruits.push(mango);
        counter++;
      }
      //console.log(this._fruits);
    }
  }
}

class Mango {
  // Produce a mango
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

module.exports = MangoTree