"use strict"

// release 0

class FruitTree {

  // Initialize a new MangoTree
  constructor(name,age,height,matureAge,healthyStatus) {
    this.name = name
    this._age = age
    this._height = height
    this.maxFruits =15
    this._harvested = 0
    this.maxAge = 20
    this.matureAge = matureAge
    this._healthyStatus = healthyStatus
    this._fruits = []
    this.badFruit = 0
    this.goodFruit = 0
    this.fruitType = 'mango'
  }

  get age() {
    return this._age;
  }

  get height() {
    return this._height;
  }

  get fruits() {
    return this._fruits
  }

  get healthyStatus() {
    return this._healthyStatus;
  }

  get harvested() {
    return `${this._harvested} , (${this.goodFruit} good , ${this.badFruit} bad)`
  }


  // Get current states here


  // Grow the tree
  grow() {
    this._age += 1
    this._fruits = []
    this.goodFruit = 0
    this.badFruit = 0
    var random = Math.floor(Math.random() * this.maxAge)
    if (this._age < this.maxAge) {
      this._height += random
    }
    if (this._age >= this.maxAge) {
      this._healthyStatus = false
    }
  }

  // Produce some mangoes
  produceFruits() {
    if (this.fruitType === 'Mango') {
      if (this._age >= this.matureAge && this._age <= this.maxAge) {
        var randomFruits = Math.floor(Math.random() * this.maxFruits)
        for (let i = 0; i < randomFruits; i++) {
          let totalFruits = new Mango()
          this._fruits.push(totalFruits)
        }
        this._harvested = this._fruits.length
      }
    } else if (this.fruitType === 'Apple') {
      if (this._age >= this.matureAge && this._age <= this.maxAge) {
        var randomFruits = Math.floor(Math.random() * this.maxFruits)
        for (let i = 0; i < randomFruits; i++) {
          let totalFruits = new Apple()
          this._fruits.push(totalFruits)
        }
        this._harvested = this._fruits.length
      }
    } else if (this.fruitType === 'Pear') {
      if (this._age >= this.matureAge && this._age <= this.maxAge) {
        var randomFruits = Math.floor(Math.random() * this.maxFruits)
        for (let i = 0; i < randomFruits; i++) {
          let totalFruits = new Pear()
          this._fruits.push(totalFruits)
        }
        this._harvested = this._fruits.length
      }
    }

  }

  // Get some fruits
  harvest() {
    for (let i = 0; i < this._fruits.length; i++) {
      if (this._fruits[i].quality === 'bad') {
        this.badFruit++
      } else {
        this.goodFruit++
      }
    }
  }

}



class MangoTree extends FruitTree {
  constructor(name,age,height,matureAge,healthyStatus) {
    super(name,age,height,matureAge,healthyStatus)
  }


}

class Mango {
  // Produce a mango
  constructor() {
    this.quality = this.fruitQuality()
  }
  fruitQuality() {
    let random = Math.floor(Math.random() * 2)
    if (random === 0) {
      return 'bad';
    } else if (random === 1) {
      return 'good';
    }

  }
}

class AppleTree extends FruitTree {
  constructor(name,age,height,matureAge,healthyStatus) {
    super(name,age,height,matureAge,healthyStatus)
  }
}

class Apple {
  // Produce a mango
  constructor() {
    this.quality = this.fruitQuality()
  }
  fruitQuality() {
    let random = Math.floor(Math.random() * 2)
    if (random === 0) {
      return 'bad';
    } else if (random === 1) {
      return 'good';
    }

  }
}

class PearTree extends FruitTree {
  constructor(name,age,height,matureAge,healthyStatus) {
    super(name,age,height,matureAge,healthyStatus)
  }
}

class Pear {
  // Produce a mango
  constructor() {
    this.quality = this.fruitQuality()
  }
  fruitQuality() {
    let random = Math.floor(Math.random() * 2)
    if (random === 0) {
      return 'bad';
    } else if (random === 1) {
      return 'good';
    }

  }
}



// let mangoTree = new MangoTree()
// //
// do {
//   mangoTree.grow();
//   mangoTree.produceFruits()
//   mangoTree.harvest();
//   console.log(`[Year ${mangoTree.age} Report Mango Tree] Height = ${mangoTree.height/10} m | Fruits harvested = ${mangoTree.harvested}`)
// } while (mangoTree.healthyStatus != false)
//
//

// let appleTree= new AppleTree()
//
// do {
//   appleTree.grow();
//   appleTree.produceFruits()
//   appleTree.harvest();
//   console.log(`[Year ${appleTree.age} Report Apple Tree] Height = ${appleTree.height/10} m | Fruits harvested = ${appleTree.harvested}`)
// } while (appleTree.healthyStatus != false)


// let pearTree= new PearTree()
//
// do {
//   pearTree.grow();
//   pearTree.produceFruits()
//   pearTree.harvest();
//   console.log(`[Year ${pearTree.age} Report Pear Tree] Height = ${pearTree.height/10} m | Fruits harvested = ${pearTree.harvested}`)
// } while (pearTree.healthyStatus != false)


// const MangoTree = require('./mango_tree.js');
// const AppleTree = require('./appletree.js');
// const PearTree = require('./pear_tree.js');

class TreeGrove {
  constructor() {
    this.listTree =[]
  }

  inputTree(name,age,height,matureAge,healthyStatus){
    if (name === 'MangoTree') {
      var tempTree = new MangoTree(name,age,height,matureAge,healthyStatus)
    }
    else if (name === 'AppleTree') {
      var tempTree = new AppleTree(name,age,height,matureAge,healthyStatus)
    }
    else if (name === 'PearTree') {
      var tempTree = new PearTree(name,age,height,matureAge,healthyStatus)
    }

    this.listTree.push(tempTree)

  }

  showAge(){
    for (let i = 0; i < this.listTree.length; i++) {
      console.log('========== Umur Pohon ==========');
      console.log(this.listTree[i].age);
    }
  }

  showTrees(){
    for (var i = 0; i < this.listTree.length; i++) {
      console.log('========== List Pohon ==========');
      console.log(this.listTree[i].name);
    }
  }

  nextYear(){
    for (var i = 0; i < this.listTree.length; i++) {
      this.listTree[i]._age++
    }
  }

  mature_trees(){
    for (var i = 0; i < this.listTree.length; i++) {
      if (this.listTree[i]._age >= this.listTree[i].matureAge) {
        console.log('========== List pohon yang sedang berbuah ==========');
        console.log(this.listTree[i].name);
      }
    }
  }
}

var grove = new TreeGrove()
// input your trees data !
// parameter ke-1: nama pohon
// parameter ke-2: umur pohon ketika ditanam di taman tersebut
// pamareter ke-3: tinggi pohon pertama kali ketika ditanam di taman tersebut
// parameter ke-4: umur mature pohon tersebut
// parameter ke-5: healthyStatus dari pohon tersebut ketika ditanam


grove.inputTree("MangoTree", 3, 1.8, 7, true)
grove.inputTree("MangoTree", 5, 2.4, 12, true)
grove.inputTree("AppleTree", 4, 1.2, 5, true)
grove.inputTree("PearTree", 7, 2, 15, true)
// console.log(grove);

// next year
grove.nextYear()

// show trees age
grove.showAge()
//
// // show trees
grove.showTrees()
//
// // show trees
grove.mature_trees()
