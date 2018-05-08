"use strict"

class FruitTree {
  // Initialize a new MangoTree
  constructor(age = 2, height = 1.3, harvested = 0, maxFruit = 15, healthyStatus = true, maxAge = 25, maxGrow = 15) {
    this._age = age;
    this._height = height;
    this._harvested = harvested;
    this._healthyStatus = healthyStatus;
    this._startFruit = 2
    this._countGood = 0;
    this._countBad = 0;
    this._maxFruit = maxFruit;
    this._countProduce = 0;
    this._maxAge = maxAge;
    this._maxGrow = maxGrow;
  }

  getAge() {
    return this._age;
  }
  getHeight() {
    return this._height;
  }
  getFruits() {
    return this._harvested
  }
  getHealtyStatus() {
    return this.healthyStatus
  }
  // Grow the tree
  grow() {
    if (this._age <= this._maxGrow) {
      this._height += Math.random() * 2
    }

    this._age++
      if (this._age >= this._maxAge) {
        this._healthyStatus = false;
      }
  }

  // Produce some mangoes
  produceMangoes() {
    this._countProduce = Math.floor(Math.random() * this._maxFruit)
    // console.log('ini punya' + this._countProduce);
    this._harvested = this._countProduce;
  }

  // Get some fruits
  harvest() {
    this._countBad = 0;
    this._countGood = 0;
    if (this._age > this._startFruit) {
      for (var i = 0; i < this._harvested; i++) {
        let fruitQuality = Math.random()
        if (fruitQuality >= 0.5) {
          this._countGood++
        } else {
          this._countBad++
        }
      }
    }
  }
}

// release 0
class PearTree extends FruitTree {
  // Initialize a new PearTree
  constructor(age = 5, height = 1, harvested = 0, maxFruit = 100, healthyStatus = true, maxAge = 50, maxGrow = 35) {
    super(age, height, harvested, maxFruit, healthyStatus, maxAge, maxGrow)
  }
}
class Pear {}
let pearTree = new PearTree()
console.log('Selamat anda telah menanam benih pohon Pear :)');
do {
  pearTree.grow();
  pearTree.produceMangoes();
  pearTree.harvest();
  console.log(`[Year ${pearTree._age} Report] Height = ${pearTree._height.toFixed(1)} | Fruits harvested = ${pearTree._harvested} (${pearTree._countGood} good, ${pearTree._countBad} bad)`)
} while (pearTree._healthyStatus != false)
console.log('The tree has met its end. :sad:')

class MangoTree extends FruitTree {
  // Initialize a new MangoTree
  constructor(age = 5, height = 5, harvested = 0, maxFruit = 100, healthyStatus = true, maxAge = 50, maxGrow = 35) {
    super(age, height, harvested, maxFruit, healthyStatus, maxAge, maxGrow)
  }
}
class Mango {}
let mangoTree = new MangoTree()
console.log('Ayo menanam pohon mangga :9');
do {
  mangoTree.grow();
  mangoTree.produceMangoes();
  mangoTree.harvest();
  console.log(`[Year ${mangoTree._age} Report] Height = ${mangoTree._height.toFixed(1)} | Fruits harvested = ${mangoTree._harvested} (${mangoTree._countGood} good, ${mangoTree._countBad} bad)`)
} while (mangoTree._healthyStatus != false)
console.log('The tree has met its end. :sad:')

class AppleTree extends FruitTree {
  // Initialize a new AppleTree
  constructor(age = 5, height = 3, harvested = 0, maxFruit = 100, healthyStatus = true, maxAge = 50, maxGrow = 35) {
    super(age, height, harvested, maxFruit, healthyStatus, maxAge, maxGrow)
  }
}

class Apple {}

let appleTree = new AppleTree()
console.log('Selamat anda telah menanam benih pohon Apple :)');
do {
  appleTree.grow();
  appleTree.produceMangoes();
  appleTree.harvest();
  console.log(`[Year ${appleTree._age} Report] Height = ${appleTree._height.toFixed(1)} | Fruits harvested = ${appleTree._harvested} (${appleTree._countGood} good, ${appleTree._countBad} bad)`)
} while (appleTree._healthyStatus != false)
console.log('The tree has met its end. :sad:')

// class Fruit {}
//
// // Release 3
// class TreeGrove {}

module.exports = { MangoTree, AppleTree, PearTree };
