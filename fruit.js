"use strict"

// Release 2

class FruitTree {
  // Initialize a new FruitTree
  constructor(name, age, height, mature, healtyStatus) {
    this._name = name
    this._age = age
    this._height = height
    this._fruits = 0
    this._mature = mature
    this._healtyStatus = healtyStatus
    this._gFruit = 0
    this._bFruit = 0
  }

  get name () {
    return this._name
  }
  set name (newName) {
    this._name = newName
  }

  get mature () {
    return this._mature
  }
  set mature (newMature) {
    this._mature = newMature
  }

  get gFruit() {
    return this._gFruit
  }
  set gFruit (newgFruit) {
    this._gFruit = newgFruit
  }

  get bFruit() {
    return this._bFruit
  }
  set bFruit (newbFruit) {
    this._bFruit = newbFruit
  }

  get age() {
    return this._age
  }
  set age (newAge) {
    this._age = newAge;
  }

  get height() {
    return this._height
  }
  set height (newHeight) {
    this._height = newHeight
  }

  get fruits() {
    return this._fruits
  }
  set fruits (newFruits) {
    this._fruits = newFruits
  }

  get healtyStatus() {
    return this._healtyStatus
  }
  set healtyStatus (newHealtyStatus) {
    this._healtyStatus = newHealtyStatus
  }

  // Get current states here
  // Grow the tree
  grow () {
    if(this.age<25 && this.height<8) {
      this.age += 1
      this.height += (Math.round(Math.random()*10)/10)
    } else if(this.age<25 && this.height>=8) {
      this.age += 1
      this.height += 0
    } else if (this.age>=25) {
      this.healtyStatus=false
    } 
  }

  // Produce some fruits
  produceFruits() {
    let fruitRNG = Math.floor(Math.random()*10)
    if(this.age>=this.mature) {
      for(let x=0; x<fruitRNG; x++) {
        let fruit = new Fruit ()
        this.fruits += 1
        if(fruit.quality()===false) {
          this.bFruit += 1
        } else {
          this.gFruit += 1
        }
      }
    }   
  }

  // Get some fruits
  harvest() {
    this.fruits = 0
    this.gFruit = 0
    this.bFruit = 0
  }

  fruitDriver () {
    console.log('The Fruit Tree starting on a Journey :)')
    for(let x=0; x<30; x++) {
      if(this.healtyStatus===false) {
        console.log('Fruit Tree sadly has met its end :(')
        console.log('')
        break
      } else {
        this.grow ()
        this.produceFruits ()
        console.log(`[Year ${this.age} Report] Height = ${this.height.toFixed(1)} | Fruits harvested = ${this.fruits} (${this.gFruit} good, ${this.bFruit} bad)`)
        this.harvest ()
      }
    }
  }
  
}

class Fruit {
  // Produce a fruit
  constructor() { 
    this.rng = (Math.round(Math.random()*1))
  }

  quality () {
    
    if(this.rng===1) {
      return false
    } else {
      return true
    }
  }
}
var fruitTree = new FruitTree ('FruitTree', 0, 0, 10, true)

fruitTree.fruitDriver()

// release 0

class MangoTree extends FruitTree {

  // Initialize a new MangoTree
  constructor(name, age, height, mature, healtyStatus) {
    super (name, age, height, mature, healtyStatus)
  }

  mangoDriver () {
    console.log('The Mango Tree starting on a Journey :)')
    for(let x=0; x<30; x++) {
      if(this.healtyStatus===false) {
        console.log('Mango Tree sadly has met its end :(')
        console.log('')
        break
      } else {
        this.grow ()
        this.produceFruits ()
        console.log(`[Year ${this.age} Report] Height = ${this.height.toFixed(1)} | Fruits harvested = ${this.fruits} (${this.gFruit} good, ${this.bFruit} bad)`)
        this.harvest ()
      }
    }
  }
}

class Mango extends Fruit {
  // Produce a mango
  constructor() { 
    super ()
  }
}

var mangoTree = new MangoTree ('MangoTree', 0, 0, 10, true)

mangoTree.mangoDriver()

/**
  * driver code untuk release 0
  * let mangoTree = new MangoTree()
  * do {
  *   mangoTree.grow();
  *   mangoTree.produceMangoes();
  *   mangoTree.harvest();
  *   console.log(`[Year ${tree.age} Report] Height = ${tree.height} | Fruits harvested = ${tree.harvested}`)
  * } while (mangoTree.healthyStatus != false)
  */

// Release 1
class AppleTree extends FruitTree {

  // Initialize a new MangoTree
  constructor(name, age, height, mature, healtyStatus) {
    super (name, age, height, mature, healtyStatus)
  }

  appleDriver () {
    console.log('The Apple Tree starting on a Journey :)')
    for(let x=0; x<30; x++) {
      if(this.healtyStatus===false) {
        console.log('Apple Tree sadly has met its end :(')
        console.log('')
        break
      } else {
        this.grow ()
        this.produceFruits ()
        console.log(`[Year ${this.age} Report] Height = ${this.height.toFixed(1)} | Fruits harvested = ${this.fruits} (${this.gFruit} good, ${this.bFruit} bad)`)
        this.harvest ()
      }
    }
  }
}

class Apple extends Fruit {
  // Produce a apple
  constructor() { 
    super ()
  }
}

var appleTree = new AppleTree ('AppleTree', 0, 0, 10, true)

appleTree.appleDriver()

class PearTree extends FruitTree {

  // Initialize a new MangoTree
  constructor(name, age, height, mature, healtyStatus) {
    super (name, age, height, mature, healtyStatus)
  }

  pearDriver () {
    console.log('The Pear Tree starting on a Journey :)')
    for(let x=0; x<30; x++) {
      if(this.healtyStatus===false) {
        console.log('Pear Tree sadly has met its end :(')
        console.log('')
        break
      } else {
        this.grow ()
        this.produceFruits ()
        console.log(`[Year ${this.age} Report] Height = ${this.height.toFixed(1)} | Fruits harvested = ${this.fruits} (${this.gFruit} good, ${this.bFruit} bad)`)
        this.harvest ()
      }
    }
  }
}

class Pear extends Fruit {
  // Produce a pear
  constructor() { 
    super ()
  }
}

var pearTree = new PearTree ('PearTree', 0, 0, 10, true)

pearTree.pearDriver()



module.exports ={MangoTree, AppleTree, PearTree}