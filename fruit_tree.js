"use strict"

// release 0
class FruitTree {
  // Initialize a new MangoTree
  constructor(maxAge, MatureAge, Stopheight) {
    this._height = 0
    this._total = 0
    this._fruit = 0
    this._harvested = 0;
    this._status = true
    this._name = ''
    this._age = 0
    this._maxAge = maxAge; // max age
    this._mature = MatureAge; // mulai berbuah
    this._stopHeight = Stopheight
    this._bad = 0;
    this._good = 0
    this._bucket = []
    this._totals = 0;
  }


  get age() {
    return this._age
  }

  get height() {
    return this._height + ' m'
  }

  get mature() {
    return this._mature
  }

  get fruits() {
    return this._fruit
  }

  get status() {
    return this._status
  }

  set age(age) {
    return this._age = age
  }

  set name(name) {
    return this._name = name
  }

  set height(height) {
    return this._height = height
  }

  set mature(mature) {
    return this._mature = mature
  }
  set stopHeight(stopheight) {
    return this._stopHeight = stopheight
  }
  set maxage(maxage) {
    this._maxAge = maxage
  }

  get harvested() {

    // return this._harvested
    return this._totals

  }
  get bucket() {
    return this._bucket
  }
  // Get current states here

  // Grow the tree
  grow() {
    let tinggi = Math.floor(Math.random() * 3)
    this._bucket = []
    //age
    if (this._age < this._maxAge) {
      this._age += 1
    }

    if (this._age === this._maxAge) {
      this._status = false
    }

    //height
    if (this._age < this._stopHeight) {
      this._height += tinggi
    }


  }


  // Produce some mangoes
  produce() {
    if (this._age > this._mature && this._age < this._maxAge) {
      this._harvested += Math.floor(Math.random() * 5);

      // this._bucket = []


      for (let i = 0; i < this._harvested; i++) {
        let buah = new Fruit();
        this._bucket.push(buah)
      }
    }
  }

  // Get some fruits
  harvest() {


    for (let i = 0; i < this._bucket.length; i++) {
      if (this._bucket[i].quality === 'good') {
        this._good += 1
      } else {
        this._bad += 1
      }
    }
    this._totals = this._bucket.length
    this._totals += ' good:' + this._good + ' bad: ' + this._bad
    this._good = 0;
    this._bad = 0;
    return this._totals;

  }
}

class Fruit {
  // Produce a mango
  constructor() {

    let status = ['good', 'bad']
    let kualitas = status[Math.floor(Math.random() * 2)]
    this.quality = kualitas
  }
}


class MangoTree extends FruitTree {
  constructor(maxAge, MatureAge, Stopheight) {
    super(maxAge, MatureAge, Stopheight)

  }
}



class AppleTree extends FruitTree {

  constructor(maxAge, MatureAge, Stopheight) {

    super(maxAge, MatureAge, Stopheight)

  }



}


class PearTree extends FruitTree {

  constructor(maxAge, MatureAge, Stopheight) {

    super(maxAge, MatureAge, Stopheight)

  }



}

//
// console.log('\n ----------- MANGO TREE -------------')
// // * driver code untuk release 0
// console.log('\nThe mangos tree is alive: ---')
// //name, maxAge, Mature, Stopheight
// let mangotree = new MangoTree(10, 3, 7)
//
// do {
//   mangotree.grow();
//   mangotree.produce();
//   mangotree.harvest();
//   console.log(`[Year ${mangotree.age} Report] Height = ${mangotree.height} | Fruits harvested = ${mangotree.harvested} `)
// } while (mangotree.status != false)
// console.log('\nThe Mango tree has met its end: ---')
//
//
// console.log('\n ----------- Apple TREE -------------')
// // * driver code untuk release 2
// console.log('\nThe Apple tree is alive: ---')
//
// let appleTree = new AppleTree(9, 2, 6)
//
// do {
//   appleTree.grow();
//   appleTree.produce();
//   appleTree.harvest();
//   console.log(`[Year ${appleTree.age} Report] Height = ${appleTree.height} | Fruits harvested = ${appleTree.harvested} `)
// } while (appleTree.status != false)
// console.log('The Apples tree has met its end. ')
//
//
// console.log('\n ----------- Pear TREE -------------')
// // * driver code untuk release 2
//
// console.log('\nThe Pear tree is alive: ---')
// let Peartree = new PearTree(5, 1, 7);
//
// do {
//   Peartree.grow();
//   Peartree.produce();
//   Peartree.harvest();
//   console.log(`[Year ${Peartree.age} Report] Height = ${Peartree.height} | Fruits harvested = ${Peartree.harvested} `)
// } while (Peartree.status != false)
// console.log('The Pear tree has met its end. ')


module.exports = {
  MangoTree,
  AppleTree,
  PearTree
}
