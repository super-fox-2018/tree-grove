"use strict"

class FruitTree {
  constructor(name, agePlanted, heightPlanted, matureAge) {
    this._name = name
    this._age = agePlanted;
    this._height = heightPlanted;
    this._fruits = [];
    this._health = true;
    this._harvested = 0;
    this._matureAge = matureAge
    this._maxAge = Math.round(Math.random() * (20 - 10) + 20)
    this._totalFruits = [0,0,0]; //index 0 = total, index 1 = good, index 2 = bad
  }
  get name() {
    return this._name
  }
  get age() {
    return this._age;
  }

  get height() {
    return this._height;
  }

  get fruits() {
      return this._fruits;
  }

  get healthStatus() {
    return this._health;
  }

  get harvested() {
    return this._harvested;
  }

  // Grow the tree
  grow() {
    //this._maxAge = Math.round(Math.random() * (30 - 20) + 20)
    this._age += 1;
    let height = this._height;
    // console.log(this._age);
    if (this._age < this._matureAge) {
      this._height += Math.random() * 1.5;
    }
    if (this._age >= this._maxAge) {
      this._health = false;
    }
  }

  // Produce some fruits
  produceFruits() {
    let randomProduced = Math.floor(Math.random() * (10-2) + 10) //maxRange - minRange
    // this
    if(this._age >= this._matureAge) {
      for (let i = 0; i < randomProduced; i ++) {
        this._fruits.push(new Fruit)
      }
    }
    //console.log(this._fruits)
  }

  // Harvest some fruits
  harvest() {
    let goodFruits = 0;
    let badFruits = 0;
    // console.log(this._fruits[0]._quality)
    for (let i = 0; i < this._fruits.length; i++) {
      // console.log('dfdfdfd')
      if (this._fruits[i]._quality == 'good') {
        goodFruits += 1
        this._totalFruits[0] += 1
        this._totalFruits[1] += 1
      }
      else {
        badFruits += 1
        this._totalFruits[0] += 1
        this._totalFruits[2] += 1
      }
    }
    this._harvested = `${this._totalFruits[0]} (${this._totalFruits[1]} good, ${this._totalFruits[2]} bad)`
    this._fruits = []
    this._totalFruits = [0,0,0]
  }
}

class Fruit {
  constructor() {
    this._quality = this.randomQuality()
  }
  randomQuality() {
    let random = Math.round(Math.random());
    if (random === 0) {
      return 'good';
    }
    else {
    return 'bad';
    }
  }
}



module.exports = FruitTree;
